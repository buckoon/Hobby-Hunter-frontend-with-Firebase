import React, { useEffect, useState } from "react";
import "./Feed.css";
import Hobby from "./Hobby";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { motion } from 'framer-motion';

import AddIcon from '@mui/icons-material/Add';

/*import PostAddIcon from '@mui/icons-material/PostAdd';*/

function Feed() {
  const user = useSelector(selectUser);
  const [hobbys, setHobbys] = useState([]);
  const [hobbyname, setHobbyname] = useState("");
  const [hobbyinstructions, setHobbyinstructions] = useState("");
  const [hobbyphoto, setHobbyphoto] = useState("");
  const [displayinput, setDisplayinput]= useState(false);
  const [ratingValue, setRatingValue] = useState(0);

  const handleDisplayinput =()=>{
    setDisplayinput(!displayinput);
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    db.collection("hobbys")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot /*this orders the hobbys*/) =>
        setHobbys(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendHobbys = (e) => {
    /*event*/
    e.preventDefault(); /*this makes it so when you click enter after typing something it does not automatically reset*/
    db.collection("hobbys").add({
      name: user.displayName /*these to lines take in the stuff from userSlice. Line 17 enables this*/,
      profpic: user.photoUrl || "",
      description: hobbyname,
      instructions: hobbyinstructions,
      photo: hobbyphoto,
      starrating: ratingValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setHobbyname("");
    setHobbyinstructions("");
    setHobbyphoto("");
    setRatingValue(0);
    setDisplayinput(!displayinput);
  };

  return (
    <div className="min-h-screen  flex-col items-center space-y-2">
      <div className="flex items-center justify-center">
        <button
          onClick={handleDisplayinput}
          className="flex flex-row px-16 py-3 border-b border-gray-600 justify-center  text-white rounded-lg hover:shadow-xl font-medium z-5 cursor-pointer"
        >
          Add a Hobby <AddIcon className="ml-2" size={25} />
        </button>
      </div>
      <div className={displayinput ? "text-black  flex p-5 mb-5 bg-opacity-40 justify-center rounded-lg border border-gray-300  bg-white shadow-lg  flex-col z-10 ease-in duration-500": "absolute top-0  left-[100%]  "}>
        {displayinput && (
          <div className="form-section">
            <form className="flex flex-col gap-4" onSubmit={sendHobbys}>
              <div className="flex flex-col">
                <label htmlFor="hobby" className="text-black font-bold mb-2">
                  List your favorite hobby:
                </label>
                <input
                  type="text"
                  id="hobby"
                  value={hobbyname}
                  onChange={(e) => setHobbyname(e.target.value)}
                  className="border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="instructions" className="text-black font-bold mb-2">
                  Instructions and supplies:
                </label>
                <textarea
                  id="instructions"
                  value={hobbyinstructions}
                  onChange={(e) => setHobbyinstructions(e.target.value)}
                  rows={3}
                  onInput={(e) => {
                    e.target.rows = Math.ceil(e.target.scrollHeight / 20);
                  }}
                  className="border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="photo" className="text-black font-bold mb-2">
                  Add a photo:
                </label>
                <input
                  type="text"
                  id="photo"
                  value={hobbyphoto}
                  onChange={(e) => setHobbyphoto(e.target.value)}
                  placeholder="Enter photo URL"
                  className="border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white font-bold py-2 hover:shadow-xl px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      {hobbys.map(({ id, data: { name, profpic, description, instructions, photo} }) => (
        <Hobby
          key={id}
          name={name}
          profpic={profpic}
          description={description}
          instructions={instructions}
          photo={photo}
          
        />
      ))}
    </div>
  );
  
}

export default Feed;

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
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [displayinput, setDisplayinput]= useState(false);
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
      description: input,
      instructions: input2,
      photo: input3,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setInput2("");
    setInput3("");
    setDisplayinput(!displayinput);
  };

  return (
    <div className="min-h-screen flex-[0.6] flex-col items-center space-y-2">
      <div className="flex items-center justify-center">
        <button
          onClick={handleDisplayinput}
          className="flex flex-row px-16 py-3 border-b border-gray-600 justify-center bg-green-600 text-white rounded-lg hover:shadow-xl font-medium z-20 cursor-pointer"
        >
          Add a Hobby <AddIcon className="ml-2" size={25} />
        </button>
      </div>
      <div className="flex p-5 mb-5 justify-center rounded-lg border border-gray-300 bg-white shadow-lg bg-opacity-50">
        <div
          className={
            displayinput
              ? "ease-in duration-300 w-full max-w-md bg-opacity-80 rounded-md p-8 z-10"
              : <p></p>
          }
          style={{display:displayinput ? "block" : "none"}}
        >
          <form className="flex flex-col gap-4" onSubmit={sendHobbys}>
            <div className="flex flex-col">
              <label htmlFor="hobby" className="text-black font-bold mb-2">
                List your favorite hobby:
              </label>
              <input
                type="text"
                id="hobby"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-gray-400 rounded py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="instructions" className="text-black font-bold mb-2">
                Instructions and supplies:
               </label>
             <textarea
                id="instructions"
                value={input2}
               onChange={(e) => setInput2(e.target.value)}
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
                value={input3}
                onChange={(e) => setInput3(e.target.value)}
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
      </div>
      {hobbys.map(({ id, data: { name, profpic, description, instructions, photo } }) => (
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

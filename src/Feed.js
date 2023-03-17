import React, { useEffect, useState } from "react";
import "./Feed.css";
import Hobby from "./Hobby";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

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
    <div className="min-h-screen  flex-[0.6] flex-col items-center space-y-4">

      <div className="flex items-center justify-center">
        <button onClick={handleDisplayinput} className=" flex flex-row px-16 py-3 border-b border-gray-600 justify-center bg-green-600 text-white rounded-lg hover:shadow-xl font-medium z-20 cursor-pointer  " >
         Add a Hobby <AddIcon className="ml-2" size={25} /> 
        </button>
      </div>
      
      <div className="flex items-center justify-center  ">
        <div className={displayinput ? "  ease-in duration-300 w-full max-w-md bg-white bg-opacity-80 rounded-md p-8 Z-10 ":"absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"}>
         <form className="" onSubmit={sendHobbys}>
            <div className="">
             <label
                htmlFor="hobby"
                className="block text-green-600 font-bold mb-2"
             >
              List your favorite hobby :
             </label>
              <input
              type="text"
              id="hobby"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
              />
           </div>
           <div className="">
              <label
               htmlFor="instructions"
               className="block text-green-600 font-bold mb-2"
             >
              Instructions and supplies:
              </label>
             <input
               type="text"
               id="instructions"
               value={input2}
               onChange={(e) => setInput2(e.target.value)}
               className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
             />
           </div>
           <div className="">
             <label
               htmlFor="photo"
               className="block text-green-600 font-bold mb-2"
             >
                Add a photo:
             </label>
             <input
               type="text"
               id="photo"
               value={input3}
               onChange={(e) => setInput3(e.target.value)}
                className="border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:border-green-500"
             />
            </div>
           <button
             type="submit"
             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
             Submit
            </button>
         </form>
        
        </div>
        

      </div>
      

      


      {hobbys.map(
        ({ id, data: { name, profpic, description, instructions, photo } }) => (
          <Hobby
            key={id}
            name={name}
            profpic={profpic}
            description={description}
            instructions={instructions}
            photo={photo}
          />
        )
      )}
    </div>
  );
}

export default Feed;

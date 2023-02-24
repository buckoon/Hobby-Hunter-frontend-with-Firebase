import React, { useEffect, useState } from "react";
import "./Feed.css";
import Hobby from "./Hobby";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

/*import PostAddIcon from '@mui/icons-material/PostAdd';*/

function Feed() {
  const user = useSelector(selectUser);
  const [hobbys, setHobbys] = useState([]);
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");

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
  };

  return (
    <div className="feed">
      <div className="feed_inputcontainer">
        {/*<PostAddIcon/>*/}
        <div className="feed_input">
          <form onSubmit={sendHobbys}>
            <label>List your favorite hobby : </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/*onchange is an event that is set equal to an anonomous  function which then invokes setHobby so then we are going to change the hobby when the input value is changed*/}

            <label>
              List the instructions for this hobby and what is needed :{" "}
            </label>
            <input
              type="text"
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />

            <label>Please add a photo if needed : </label>
            <input
              type="text"
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />

            <button type="submit">Post</button>
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

import React, {useEffect, useState} from 'react';
import "./Feed.css";
import Hobby from "./Hobby";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';

/*import PostAddIcon from '@mui/icons-material/PostAdd';*/


function Feed() {

    const [hobbys,setHobbys]= useState([]);
    const [input,setInput]= useState("");
    const [input2,setInput2]=useState("");

    useEffect(()=>{
        db.collection("hobbys").orderBy("timestamp","desc").onSnapshot(snapshot=>(/*this orders the hobbys*/ 
            setHobbys(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    const sendHobbys = e =>{/*event*/
    e.preventDefault();/*this makes it so when you click enter after typing something it does not automatically reset*/
    db.collection("hobbys").add({
        name:"Anonyomous",
        description:input,
        instructions:input2,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    setInput2("");
}; 

  return(
    <div className = "feed">

        <div className ="feed_inputcontainer">
                {/*<PostAddIcon/>*/}
            <div className="feed_input">

                <form onSubmit={sendHobbys}>

                    <label>List your favorite hobby : </label>
                    <input
                    type="text"
                    value={input}onChange={(e) => setInput(e.target.value)}/>{/*onchange is an event that is set equal to an anonomous  function which then invokes setHobby so then we are going to change the hobby when the input value is changed*/ }

                    <label>List the instructions for this hobby and what is needed : </label>
                    <input
                    type="text"
                    value={input2}onChange={(e) => setInput2(e.target.value)}/>

                    <button type="submit">Post</button>



                </form>

            </div>
        </div>
        
        {hobbys.map(({id, data:{description,instructions }})=>(
            <Hobby
            key={id}
            description={description}
            instructions={instructions}
            />
        ))}
    </div>
  )
}

export default Feed

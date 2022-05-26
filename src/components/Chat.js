import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

import { Context } from "..";
import "./Chat.scss";
import Loader from "./Loader";

export default function Chat() {
   const { auth, firestore } = useContext(Context);
   const [user] = useAuthState(auth);
   const [val, setVal] = useState("");
   const [messages, loading] = useCollectionData(
      firestore.collection("messages").orderBy("createdAt")
   );

   const sendMessage = () => {
      console.log(val);
      firestore.collection("messages").add({
         uid: user.uid,
         displayName: user.displayName,
         photoURL: user.photoURL,
         text: val,
         createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setVal("");
   };

   if (loading) {
      return <Loader />;
   }

   return (
      <div>
         <div className="chat">
            <div className="chat-title">
               <h1>{user.displayName}</h1>
               <h2>{user.email}</h2>
               <figure className="avatar">
                  <img src={user.photoURL} />
               </figure>
            </div>
            <div className="messages">
               <div className="messages-content"></div>
               {messages.map((val, key) => {
                  if (user.uid !== val.uid) {
                     return (
                        <div key={key} className="message new">
                           <figure className="avatar">
                              <img src={val.photoURL} />
                           </figure>
                           <h4 style={{ margin: "0", color: "orange" }}>
                              {val.displayName}
                           </h4>
                           {val.text}
                        </div>
                     );
                  }
               })}
               <div className="message new">
                  <figure className="avatar">
                     <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" />
                  </figure>
                  <h4 style={{ margin: "0", color: "orange" }}>Neo</h4>
                  hello sfsdf sdf sdf sdf sd fds
               </div>
               <div>
                  {messages.map((val, key) => {
                     if (user.uid === val.uid) {
                        return (
                           <div key={key} className="message message-personal">
                              {/* <b>{val.displayName}</b> */}
                              {val.text}
                              {/* <figure className="avatar">
                              <img src={val.photoURL} />
                           </figure> */}
                           </div>
                        );
                     }
                  })}
               </div>
            </div>
            <div className="message-box">
               <textarea
                  type="text"
                  className="message-input"
                  placeholder="Type message..."
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
               ></textarea>
               <button
                  onClick={sendMessage}
                  type="submit"
                  className="message-submit"
               >
                  Send
               </button>
            </div>
         </div>
         <div className="bg"></div>
      </div>
   );
}

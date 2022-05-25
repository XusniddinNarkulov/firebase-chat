import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Context } from "../index";
import firebase from "firebase/compat/app";

export default function Login() {
   const { auth } = useContext(Context);

   const login = async () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const { user } = await auth.signInWithPopup(provider);
      console.log(user);
   };

   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
         }}
      >
         <Button onClick={login} variant="outlined">
            Sign Up with Google
         </Button>
      </div>
   );
}

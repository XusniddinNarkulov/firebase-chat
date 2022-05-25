import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import { privateRoutes, publicRoutes } from "./Routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utilities/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

export default function AppRouter() {
   // const user = false;
   const { auth } = useContext(Context);
   const [user] = useAuthState(auth);

   console.log(user);

   return user ? (
      <Routes>
         {privateRoutes.map(({ path, element }, key) => (
            <Route path={path} element={element} key={key} />
         ))}
         <Route path="*" element={<Chat />} />
      </Routes>
   ) : (
      <Routes>
         {publicRoutes.map(({ path, element }, key) => (
            <Route path={path} element={element} key={key} />
         ))}
         <Route path="*" element={<Login />} />
      </Routes>
   );
}

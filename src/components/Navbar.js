import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { LOGIN_ROUTE } from "./utilities/constants";
import { Context } from "..";

export default function Navbar() {
   // const user = true;
   const { auth } = useContext(Context);
   const [user] = useAuthState(auth);

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  {/* <MenuIcon /> */}
               </IconButton>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {/* News */}
               </Typography>
               {user ? (
                  <Button
                     onClick={() => auth.signOut()}
                     variant="outlined"
                     color="inherit"
                     style={{ color: "tomato" }}
                  >
                     Log Out
                  </Button>
               ) : (
                  <NavLink to={LOGIN_ROUTE}>
                     <Button
                        variant="outlined"
                        color="inherit"
                        style={{ color: "white" }}
                     >
                        Login
                     </Button>
                  </NavLink>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
}

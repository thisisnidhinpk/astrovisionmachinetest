import React from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Homepage from "./Homepage";
import Signin from "./Signin";
import Register from "./Register";

import UDashboard from "../users/UDashboard";
import ADashboard from "../admin/ADashboard";
import { useUser } from "../common-pages/UserContext";
function Mymenu() {
  const { username, setUser } = useUser();
  let ulog = 0;
  const location = useLocation();

  return (
    // <BrowserRouter>

    <>
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li className="active">
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            {username != 0 ? (
              <NavLink to="">SignOut</NavLink>
            ) : (
              <NavLink to="sign">Signin</NavLink>
            )}
            {/* <NavLink to="sign">Signin</NavLink> */}
          </li>
          <li>
            <a href="#">ContactUs</a>
          </li>
          <li className="float-right">
            <a href="#">AboutUs</a>
          </li>
        </ul>
        {/* </div> */}
      </nav>
      <Routes>
        <Route path="" element={<Homepage mylog={ulog} />}></Route>
        <Route path="sign" element={<Signin myRoll={"User"} />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="admin" element={<Signin myRoll={"Admin"} />}></Route>
        <Route path="user-dashboard" element={<UDashboard />}></Route>
        <Route path="admin-dashboard" element={<ADashboard />}></Route>
      </Routes>
    </>
    // </BrowserRouter>
  );
}

export default Mymenu;

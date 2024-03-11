import React from "react";
import Slider from "./Slider";
import { Link, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import { useState } from "react";
import axios from "axios";
import Dashboard from "../admin/ADashboard";
import UDashboard from "../users/UDashboard";
import Mytest from "./Mytest";
import { useUser } from "./UserContext";
function Signin(props) {
  const [email, setMyemail] = useState();
  const [name, setMyname] = useState();
  const [password, setMypassword] = useState();
  const [userroll, setUserroll] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const { mymailis, setUser } = useUser();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  let loginCheck = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/login",
        {
          email,
          password,
        },
        { headers }
      )
      .then((result) => {
        if (result.data.userroll === "user") {
          setUser(result.data.id);

          navigate("/user-dashboard");
        } else if (result.data.userroll === "admin") {
          setUser(result.data.id);
          navigate("/admin-dashboard");
        } else if (result.data.userroll === "") {
          alert("login failed ...Invalid credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Slider></Slider>
      <h4>{props.myRoll}Sign in</h4>
      <div className="row">
        <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
          {/* <p>Lorem ipsum...</p> */}
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email id"
              onChange={(mymail) => {
                setMyemail(mymail.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(mypwd) => {
                setMypassword(mypwd.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={loginCheck}
            >
              <i className="fa fa-search"></i> Sign
            </button>
          </div>
          <div className="form-group">
            {/* <button className="btn btn-secondary" type="button"> */}
            {props.myRoll == "User" ? (
              <Link to={`/signup`}>New User? Register</Link>
            ) : (
              ""
            )}
            {/* </button> */}
          </div>
        </div>
        <div
          className="col-sm-4"
          style={{ backgroundColor: "aquamarine" }}
        ></div>
      </div>
    </>
  );
}

export default Signin;

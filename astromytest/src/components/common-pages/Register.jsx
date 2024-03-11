import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
  const [email, setMyemail] = useState();
  const [name, setMyname] = useState();
  const [password, setMypassword] = useState();
  const [userroll, setUserroll] = useState("user");

  let registerUser = () => {
    axios
      .post("http://127.0.0.1:8000/api/store", {
        email,
        name,
        password,
        userroll,
      })
      .then((result) => {
        console.log(result.data);
        result.data.status == 200
          ? alert(result.data.Msg)
          : alert(result.data.Msg);
        //navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Slider></Slider>
      <h4>Register</h4>
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
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(myname) => {
                setMyname(myname.target.value);
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
              onClick={registerUser}
            >
              <i className="fa fa-search"></i> Sign Up
            </button>
          </div>
          <div className="form-group">
            {/* <button className="btn btn-secondary" type="button"> */}
            <Link to={`/sign`}>Already User? Signin</Link>
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

export default Register;

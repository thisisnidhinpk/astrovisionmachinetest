import React from "react";
import Slider from "./Slider";
import { useUser } from "./UserContext";

function Mytest() {
  const { username, setUser } = useUser();
  return (
    <>
      <Slider />
      welcomekkkk{username}
    </>
  );
}

export default Mytest;

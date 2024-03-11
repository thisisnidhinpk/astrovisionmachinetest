import React from "react";
import Mymenu from "./Mymenu";
import Slider from "./Slider";
import Profielist from "./ProfielistLeft";
import Profielist2 from "./ProfielistMiddle";
import Profielist3 from "./ProfielistRight";
import { useEffect, useState } from "react";
import axios from "axios";
import ProfielistLeft from "./ProfielistLeft";
import ProfielistMiddle from "./ProfielistMiddle";
import ProfielistRight from "./ProfielistRight";
import { useUser } from "./UserContext";
function Homepage(props) {
  const [plistleft, setPlistLeft] = useState([]);
  const [plistmiddle, setPlistMiddle] = useState([]);
  const [plistright, setPlistRight] = useState([]);
  const { mymailis, setUser } = useUser();
  const profiles = [
    { id: 1, name: "John Doe", photo: "team1.jpg" },
    { id: 2, name: "Jane Doe", photo: "team2.jpg" },
    { id: 3, name: "Anna Doe", photo: "team3.jpg" },
    { id: 4, name: "Marie Doe", photo: "team4.jpg" },
    // Add more profiles as needed
  ];
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/profileLeft/")
      .then((response) => {
        // console.log(response.data);

        setPlistLeft(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
    // }, []);
    axios
      .get("http://127.0.0.1:8000/api/profileMiddle/")
      .then((response) => {
        // console.log(response.data);

        setPlistMiddle(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });

    axios
      .get("http://127.0.0.1:8000/api/profileRight/")
      .then((response) => {
        // console.log(response.data);

        setPlistRight(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      {setUser(props.mylog)}
      {/* <Mymenu></Mymenu> */}
      <Slider></Slider>
      <h4>Profiles</h4>
      <div className="row">
        <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
          {/* <p>Lorem ipsum...</p> */}
          <ProfielistLeft profiles={plistleft} />
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
          <ProfielistMiddle profiles={plistmiddle} />
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
          <ProfielistRight profiles={plistright} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;

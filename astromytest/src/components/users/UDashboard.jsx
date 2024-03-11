import React from "react";
import { useUser } from "../common-pages/UserContext";
import Slider from "../common-pages/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
function UDashboard() {
  const { username, setUser } = useUser();
  const [myimg, setimg] = useState();
  const [myname, setMyname] = useState();
  const [myemail, setMyemail] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getuser/" + username)
      .then((response) => {
        console.log(response.data.id);

        const dataUri = `data:image/png;base64,${response.data.profpic}`;
        setMyname(response.data.name);

        setMyemail(response.data.email);
        setimg(dataUri);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  let myUpdate = () => {
    const requestData = {
      name: myname,
    };
    axios
      .put("http://127.0.0.1:8000/api/updateUser/" + username, requestData)
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          alert("updated");
          const dataUri = `data:image/png;base64,${response.data.profpic}`;
          setMyname(response.data.name);
          setMyemail(response.data.email);
          setimg(dataUri);
        } else {
          alert("failed");
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  return (
    <>
      <h3 className="pull-left">welcomekkkk{username}</h3>

      <Slider></Slider>

      <div className="row">
        <div
          className="col-sm-4"
          style={{ backgroundColor: "aquamarine", height: "350px" }}
        >
          <p>Lorem ipsum...</p>
          {/* <Profielist profiles={profiles} /> */}
        </div>
        <div className="col-sm-4" style={{ backgroundColor: "aquamarine" }}>
          {/* <Profielist2 profiles={profiles} /> */}
          <p>Profile</p>
          <center>
            <table>
              <tr>
                <td>
                  <div className="form-group">
                    <img
                      className="img-rounded"
                      style={{
                        height: "150px",
                        width: "150px",
                        marginTop: "10px",
                        border: "1px",
                      }}
                      src={myimg}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      value={myemail}
                      onChange={(txtemail) => {
                        setMyemail(txtemail.target.value);
                      }}
                      readOnly
                    ></input>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      value={myname}
                      onChange={(txtmyname) => {
                        setMyname(txtmyname.target.value);
                      }}
                    ></input>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="form-group">
                    <button
                      type="button"
                      className="form-control"
                      onClick={myUpdate}
                    >
                      Update
                    </button>
                  </div>
                </td>
              </tr>
            </table>
          </center>
        </div>
        <div
          className="col-sm-4"
          style={{ backgroundColor: "aquamarine", height: "350px" }}
        >
          {/* <Profielist3 profiles={profiles} /> */}
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </>
  );
}

export default UDashboard;

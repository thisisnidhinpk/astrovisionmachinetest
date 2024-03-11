import React from "react";
import { useUser } from "../common-pages/UserContext";
import Slider from "../common-pages/Slider";
import { useEffect, useState } from "react";
import axios from "axios";
function ADashboard() {
  const { username, setUser } = useUser();
  const [myimg, setimg] = useState();
  const [myname, setMyname] = useState();
  const [myemail, setMyemail] = useState();

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/getuser/" + username)
      .then((response) => {
        console.log(response.data.id);
        // Convert binary data to base64
        // const base64Image = btoa(String.fromCharCode(response.data.profpic));
        // Create a data URI
        const dataUri = `data:image/png;base64,${response.data.profpic}`;
        console.log(response.data.profpic);
        setMyname(response.data.name);

        setMyemail(response.data.email);
        setimg(dataUri);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setimg(URL.createObjectURL(file));
  };
  let myUpdate = () => {
    const requestData = {
      name: myname,
      profpic: myimg,
    };

    axios
      .put("http://127.0.0.1:8000/api/updateUser/" + username, requestData)
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          alert("updated");
          const dataUri = `data:image/jpg;base64,${response.data.profpic}`;
          setMyname(response.data.name);
          setMyemail(response.data.email);
          setimg(dataUri);
        } else {
          alert("failed");
        }
        // Convert binary data to base64
        // const base64Image = btoa(String.fromCharCode(response.data.profpic));
        // Create a data URI
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };
  return (
    <>
      <h3 className="pull-left">welcome:{myname}</h3>

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
          <p>Admin Profile</p>
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
                      onClick={() => {
                        document.getElementById("fileInput").click();
                      }}
                    />
                    <input
                      id="fileInput"
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
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

export default ADashboard;

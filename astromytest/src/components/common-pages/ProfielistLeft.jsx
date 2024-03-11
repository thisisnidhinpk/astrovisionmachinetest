import React from "react";

function ProfielistLeft({ profiles }) {
  return (
    <div>
      <table>
        {profiles.map((profile) => (
          <div>
            <tr key={profile.id}>
              <td rowSpan={3}>
                <img
                  className="img-rounded"
                  style={{ height: "150px", width: "150px", marginTop: "10px" }}
                  src={`data:image/png;base64,${profile.profpic}`}
                />
              </td>

              <td>
                <p style={{ marginLeft: "60px" }} className="col-x">
                  Id: {profile.id}
                </p>
                {/* {profile.name} */}
              </td>
            </tr>
            <tr>
              <td>
                <p style={{ marginLeft: "60px" }} className="col-x">
                  name: {profile.name}
                </p>
                {/* {profile.name} */}
              </td>
            </tr>
          </div>
        ))}
      </table>

      {/* <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="float-left">
            <img
              className="img-rounded"
              style={{ height: "150px", width: "150px", marginTop: "10px" }}
              src={profile.photo}
              alt={profile.name}
            />
            <div>
              {profile.id}
              {profile.name}
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ProfielistLeft;

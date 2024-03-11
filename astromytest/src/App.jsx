import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/common-pages/Homepage";
import Mymenu from "./components/common-pages/Mymenu";
import { UserProvider } from "./components/common-pages/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <div className="container-fluid" style={{ backgroundColor: "aqua" }}>
        <Mymenu></Mymenu>
      </div>
    </UserProvider>
  );
}

export default App;

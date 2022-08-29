import React from "react";
import "./App.css";
import FullName from "./profile/component/FullName";
import HandleName from "./profile/component/HandleName";
import Bio from "./profile/component/Bio";
import Profession from "./profile/component/Profession";
const App = () => {
  const Welcom = (x) => alert(`Thank You`);
  return (
    <>
      <div className="App">
        <FullName name="Marwen Zitouni">
          <br />
          <img src="/tempImhg-103.jpg" alt="images" style={{ width: "200" }} />
          <br />
        </FullName>
        <Profession />
        <br />
        <br />

        <Bio name="Marwen Zitouni" profession="Developer Engineer"></Bio>

        <HandleName severity="success" Welcom={Welcom} name="Marwen Zitouni" />
      </div>
    </>
  );
};

export default App;

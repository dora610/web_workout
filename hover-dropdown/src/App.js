import { useState } from "react";
import "./App.css";

const App = () => {
  const [opacity, setOpacity] = useState(1);
  const [textColor, setTextcolor] = useState(`#fff`);
  let hoverStyle = {
    textAlign: "center",
    height: "100px",
    width: "200px",
    background: "blue",
    border: "1px solid black",
    margin: "10px",
    padding: "25px",
    color: textColor,
    opacity: opacity,
  };

  return (
    <div className="App">
      <div
        style={hoverStyle}
        onMouseEnter={() => {
          setTextcolor(`#000`);
          setOpacity(0.8);
        }}
        onMouseLeave={() => {
          setTextcolor(`#fff`);
          setOpacity(1);
        }}
      >
        Hover me!
      </div>
      <div className="block">Hover me!!</div>
      <div className="dropdown">
        <button className="dropbtn">Options</button>
        <div className="dropdown-content">
          <a href="#">Content 1</a>
          <a href="#">Content 2</a>
          <a href="#">Content 3</a>
        </div>
      </div>
    </div>
  );
};

export default App;

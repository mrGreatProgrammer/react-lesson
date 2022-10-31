import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import Count from "./components/Count/Count";
import IsFive from "./components/IsFive/IsFive";

function App() {
  const [visibleList, setVisibleList] = React.useState(false);
  const [countOne, setCountOne] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);

  

  return (
    <div className="App">
      <div className="center">
        <img src={logo} alt="App-logo" />

        {/* <div className="counter">
          <button onClick={() => setCountOne(countOne + 1)}>+</button>
          <Count value={countOne} />
        </div>
        <div className="counter">
          <button onClick={() => setCountTwo(countTwo + 1)}>+</button>
          <Count value={countTwo} />
          <IsFive value={countTwo} />
        </div> */}

        {/* {visibleList && <List />}

        <button onClick={() => setVisibleList((visible) => !visible)}>
          show list
        </button> */}
      </div>
    </div>
  );
}

export default App;

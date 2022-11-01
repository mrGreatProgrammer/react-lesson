import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import Count from "./components/Count/Count";
import IsFive from "./components/IsFive/IsFive";

type ttimer = NodeJS.Timer | undefined;
type elt = HTMLUListElement | undefined;
type ulT = React.MutableRefObject<elt>

function App() {
  const [visibleList, setVisibleList] = React.useState(false);
  const [countOne, setCountOne] = React.useState(0);
  const [countTwo, setCountTwo] = React.useState(0);
  const [numbers, setNumbers] = React.useState([1,2,3,4,5]);
  const ulRef: React.MutableRefObject<any> = React.useRef();
  const timerRef: React.MutableRefObject<ttimer> = React.useRef();
  
  const addNumber= ( ) =>{
    setNumbers((prev)=>[...prev, prev.length])
  }

  const deleteNum= ()=>{
    
  }
  function handleScroll(){
    console.log("scrolling")
  }
  function removeScroll() {
    ulRef.current && ulRef?.current.removeEventListener("scroll", handleScroll)
  }
  function start(){
    timerRef.current = setInterval(addNumber, 1000);
  }
  function stop(){
    clearInterval(timerRef.current)
  }

  React.useEffect(()=>{
    ulRef.current && ulRef?.current.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App">
      <div className="center">
        <img src={logo} alt="App-logo" />


      <ul ref={ulRef} className="list" >
        {numbers.map((num, id)=>
        <li className="list__item" key={id} >{num}</li>
        )}
      </ul>

      <button className='btn' onClick={addNumber} >add num</button>
      <button disabled={true} className="btn" onClick={deleteNum} >delete</button>
      <button className="btn" onClick={start} >start timer</button>
      <button className="btn" onClick={stop} >stop timer</button>
      <button className="btn" onClick={removeScroll} >stop scrolling</button>

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

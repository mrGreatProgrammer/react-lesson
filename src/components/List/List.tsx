import React from "react";

// class List extends React.Component {
//     state = {
//         numbers: [1,2,3,4]
//     }

    // addRandNum = () => {
    //     const randNum = Math.round(Math.random() * 10);
    //     this.setState({
    //         numbers: [...this.state.numbers, randNum]
    //     })
    // }

//     componentDidMount(){
//         console.log("componentDidMount");
//     }
//     componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any){
//         console.log("componentDidUpdate")
//         console.log({prevProps, prevState, props: this.props, state: this.state})
//     }

//     componentWillUnmount(){
//         console.log("componentWillUnmount")
//     }

//     render(): React.ReactNode {
//         return (
// <div>
//     <ul>
//         {this.state.numbers.map((num, id)=><li key={id} >{num}</li>)}
//     </ul>
//     <button onClick(addRandNum) >add number</button>
// </div>
//         )
//     }
// }

const List = () => {
    const [numbers, setNumbers] = React.useState([1,2,3,4]);

   const addRandNum = () => {
        const randNum = Math.round(Math.random() * 10);
            setNumbers([...numbers, randNum])
    }

    React.useEffect(()=>{
        console.log("componentDidMount")
    }, [])

    React.useEffect(()=>{
        console.log("componentDidUpdate")
    }, [numbers]);

    React.useEffect(()=>{

        return () => {
            console.log("componentWillUnmount")
        }
    }, [])

    

  return (
    <div>
      <ul>
        {numbers.map((num, id) => (
          <li key={id}>{num}</li>
        ))}
      </ul>
      <button onClick={addRandNum} >add number</button>
    </div>
  );
};

export default List;

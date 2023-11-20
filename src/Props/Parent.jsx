import { useState } from "react"



const Parent = () => {

    const [counter, setCounter] = useState(0)

    const handleClick = ()=>{
        setCounter(counter + 1)

    }

    
    
  return (
    <div>Parent
        <button onClick={handleClick}> {counter} </button>
        {counter}
    



    </div>
  )
}


// function ChildA ({counter}) {
//   return (
//     <div>Child A Component

//         <h1>{counter}</h1>
//         <ChildB counter = {counter}/>


//     </div>
//   )
// }


// function ChildB (props) {
//     return (
//       <div>Child B Component
  
//           <h2>{props.counter}</h2>
//           <ChildC counter = {props.counter}/>
  
  
//       </div>
//     )
//   }

//   function ChildC (props) {
//     return (
//       <div>Child C Component
  
//           <h4>{props.counter}</h4>
  
  
//       </div>
//     )
//   }
  



export default Parent
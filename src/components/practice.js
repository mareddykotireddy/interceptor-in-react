import React,{useState} from 'react'

function Practice () {
const [count,setCount]=useState(0);
console.log(count)
  return (
      <div className="koti">
        <center>
        <h1>counter app</h1>
        <h2>{count}</h2>

        <button className="counter" onClick={()=>setCount(count +1)}>increment</button>
        <button className="counter" onClick={()=>setCount(count -1)}>decrement</button>
        <button className="counter" onClick={()=>setCount(count *0)}>reset</button>

        </center>
    </div>
  )
}

export default Practice


// import axios from 'axios';
// import React,{useEffect,useState}from 'react'

// const Practice = () => {
//     const[data,setData]=useState([]);
//     useEffect(()=>{
//         axios.get("https://fakestoreapi.com/products").then(
//             response=>setData(response.data)
//         )
//     },[])
//   return (
//     <div>
//       {data.map(item=><li key={item.id}>{item.title}</li>)}
//     </div>
//   )
// }

// export default Practice

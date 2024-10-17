import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("white")

  return (
    <>
      <div style={{background:color,height:'100vh'}}>
        <h1 className='text text-dark d-flex justify-content-center align-items-center pt-5'>Background-Color Changing App</h1>
        <div style={{justifyContent:'space-evenly',display:'flex',marginTop:'400px'}}>
        <button onClick={()=>setColor("blue")}  className = 'btn btn-primary' style={{width:'100px'}}>BLUE</button>
        <button onClick={()=>setColor("grey")} className = 'btn btn-secondary' style={{width:'100px'}}>GREY</button>
        <button onClick={()=>setColor("green")} className = 'btn btn-success'style={{width:'100px'}}>GREEN</button>
        <button onClick={()=>setColor("red")} className = 'btn btn-danger' style={{width:'100px'}}>RED</button>
        <button onClick={()=>setColor("yellow")} className = 'btn btn-warning' style={{width:'100px'}}>YELLOW</button>
        <button onClick={()=>setColor("black")} className = 'btn btn-dark' style={{width:'100px'}}>BLACK</button>
        </div>
      </div>
      
    </>
  )
}

export default App
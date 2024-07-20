import { useState } from "react";

function App() {

  const [color, setColor] = useState("olive");


  return (

    <div className="w-full h-screen" style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 w-full px-2">

        <div className="bg-white flex justify-center rounded-full flex-wrap gap-3 px-3 py-3" >
          <button   onClick={() => setColor("red")} className="px-4 py-2 bg-red-600 rounded-full border-none text-white">
            Red
          </button>

          <button onClick={() => {setColor("green")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "Green"}}>
            Green
          </button>

          <button onClick={() => {setColor("blue")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button onClick={() => {setColor("olive")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "Olive"}}>
            Olive
          </button>
          <button onClick={() => {setColor("Gray")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "Gray"}}>
          Gray
          </button>
          <button onClick={() => {setColor("Yellow")}} className="px-4 py-2 rounded-full border-none text-black" style={{backgroundColor: "Yellow"}}>
          Yellow
          </button>
          <button onClick={() => {setColor("Pink")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "Pink"}}>
          Pink
          </button>
          <button onClick={() => {setColor("Purple")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "Purple"}}>
          Purple
          </button>
          <button onClick={() => {setColor("Lavender")}} className="px-4 py-2 rounded-full border-none text-black" style={{backgroundColor: "Lavender"}}>
          Lavender
          </button>
          <button onClick={() => {setColor("White")}} className="px-4 py-2 rounded-full text-black" style={{backgroundColor: "White"}}>
          White
          </button>
          <button onClick={() => {setColor("Black")}} className="px-4 py-2 rounded-full border-none text-white" style={{backgroundColor: "Black"}}>
          Black
          </button>
        </div>

      </div>

    </div>
  )
}

export default App;

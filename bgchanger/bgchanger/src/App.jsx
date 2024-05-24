import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}></div>
    <div className="fixed flex-wrap flex justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-200 rounded-2xl px-3 py-2">
        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-3xl shadow-xl'style={{backgroundColor: "red"}}>Red</button>
        <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-3xl shadow-xl'style={{backgroundColor: "green"}}>green</button>
        <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-3xl shadow-xl'style={{backgroundColor: "blue"}}>blue</button>
        <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 rounded-3xl shadow-xl'style={{backgroundColor: "cyan"}}>cyan</button>
      </div>
    </div>


    </>
  )
}

export default App

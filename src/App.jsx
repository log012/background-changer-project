import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
   const [color,setColor]=useState("red");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
           <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                     <button className='bg-red-500 text-white rounded-full outline-none px-4 py-1' onClick={()=>setColor("red")}>Red</button>
                     <button className='bg-green-500 text-white rounded-full outline-none px-4 py-1' onClick={()=>setColor("green")}>Green</button>
                     <button className='bg-blue-500 text-white rounded-full outline-none px-4 py-1' onClick={()=>setColor("blue")}>Blue</button>
                     <button className='bg-yellow-500 text-white rounded-full outline-none px-4 py-1' onClick={()=>setColor("yellow")}>Yellow</button>
                     <button className='bg-orange-500 text-white rounded-full outline-none px-4 py-1' onClick={()=>setColor("orange")}>Orange</button>
                     <button className='bg-lime-500 text-white rounded-full outline-none px-4 py-1' onClick={()=>setColor("lime")}>Lime</button>
                    
                     
              
                </div>
           </div>
      </div>
    </>
  )
}

export default App

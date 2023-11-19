import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js' //a library

function App() {
  const [color, setColor] = useState('');//state that take the user's input
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#940B92').all(10));// state that save array comming from library, default value provided

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    try {
      let colors = new Values(color).all(10)// this return an array 
      setList(colors)
    } catch (error) {
      setError(true)// when error is true i toggle a class which display red outline on input field
    }
  }
  return (
    
    <main className='lg:p-20 md:p-10 sm:p-10 p-5 bg-purple-300 text-center'>
      <section className='container w-full'>
        <h1 className='text-primary text-4xl font-bold'>TintTrove</h1>
        <div className=' flex justify-center items-center'>
          <span className='w-20 h-2 rounded-lg bg-primary'></span>
        </div>
        <form onSubmit={handleSubmit}>
        <input type="text" value = {color} onChange={(e)=>setColor(e.target.value)}
        placeholder = "#940B92"
        className={`px-3 py-1 mt-8 mb-8 border md:w-1/2 w-2/3 shadow-md rounded-md border-primary  focus:outline-none ${error? "border border-red-700 rounded-md": null}`}
        />
        <button className="btn px-2 py-1 mr-5 rounded-md hover:opacity-80 mx-5 text-white" type='submit'>
          Search
        </button>
        </form>
      </section>
  
      <section className='color-container'>
        {list.map((color,index)=>{
          return <SingleColor key={index} {...color} hex={color.hex} index={index}/>
        })}
      </section>
      
    </main>
    
  )
}

export default App

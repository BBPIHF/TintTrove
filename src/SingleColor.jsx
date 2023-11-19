import React, { useState, useEffect } from 'react'


const SingleColor = ({rgb, weight, index, hex}) => {

   const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',')
  const style = {backgroundColor:`rgb(${bcg})`}
  const hexValue = `#${hex}`


  useEffect(()=>{
    const timeOut = 
      setInterval(()=>{
        setAlert(false);
      }, 3000)
     
    return ()=> clearTimeout(timeOut)
    
  },[alert])




  return <article className={`color pt-3 h-[100px] ${index > 8 && 'text-gray-100'}`} 
    style={style}
    onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexValue)}
    }
    >
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {alert && <p className='bg-slate-200 opacity-50 text-slate-900 w-20 m-auto rounded-md'>copied</p>}
  </article>
}

export default SingleColor

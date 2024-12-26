import React from 'react'
import { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('#FFFFFF')

    const colorChange = e => {
        setColor(e.target.value)
    }
  return (
    <div className='p-5 m-5'>
        <h1 className='text-5xl m-5 p-5 underline'>Color Picker</h1>
        <div className='p-3 m-2' style={{backgroundColor: color}}>
            <p className='text-2xl'>Selected Color : {color} </p>
        </div>
        <label className='p-4 flex justify-center items-center gap-5'>
            <span className='text-2xl'>Select a Color :</span>
           <input type="color" value={color} onChange={colorChange} />
        </label>
    </div>
  )
}

export default ColorPicker
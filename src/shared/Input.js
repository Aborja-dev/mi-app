import { useState } from 'react'

export const Input = ({ label, changeValue }) => {
   const [valueInput, setValueInput] = useState('')
   const change = (value)=>{
      setValueInput(value)
      changeValue(value)
   }
   return (
      <>
         <div>
            {label}: <input type="text" value={valueInput} onChange={(e) => { change(e.target.value) }} />
         </div>
      </>
   )
}
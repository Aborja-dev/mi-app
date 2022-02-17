import { useState, useEffect } from 'react'

export const Input = ({ label, changeValue, isSubmit }) => {
   const [valueInput, setValueInput] = useState('')
   useEffect(()=>{
      clear()
   }, [isSubmit])
   const clear = ()=>{
      setValueInput('')
   }
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
import { useState } from "react"
import { Input } from "../shared/Input"

export const Form = ({onSubmit}) => {
   const [submitted, setSubmitted] = useState(false)
   const newContact = {
      name: '',
      number: '',
   }
   const submitContact = (evt)=>{
      evt.preventDefault();
      onSubmit(newContact);
      setSubmitted(!submitted)
   }
   return (
      <>
         <section>
            <h2>Agregar contacto</h2>
            <form onSubmit={(e) => { submitContact(e) }}>
               <Input label={'Nombre'} isSubmit={submitted} changeValue={ (e)=>{newContact.name=e.trim()} }/>
               <Input label={'Número'} isSubmit={submitted} changeValue={ (e)=>{newContact.number=e.trim()} }/>
               <div>
                  <button type='submit'>Agregar</button>
               </div>
            </form>
         </section>
      </>
   )
}

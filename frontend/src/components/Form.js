import { Input } from "../shared/Input"

export const Form = ({onSubmit}) => {
   const newContact = {
      name: '',
      number: '',
   }
   const submitContact = (evt)=>{
      evt.preventDefault();
      onSubmit(newContact);
   }
   return (
      <>
         <section>
            <h2>Agregar contacto</h2>
            <form onSubmit={(e) => { submitContact(e) }}>
               <Input label={'Nombre'} changeValue={ (e)=>{newContact.name=e} }/>
               <Input label={'Número'} changeValue={ (e)=>{newContact.number=e} }/>
               <div>
                  <button type='submit'>Agregar</button>
               </div>
            </form>
         </section>
      </>
   )
}

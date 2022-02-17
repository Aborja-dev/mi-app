export const DisplayItem = ({contact, onDelete}) => {

   return (
      <>
         <li>{contact.name} <span>{contact.number}</span><button onClick={()=>onDelete(contact.id)}>Borrar</button></li>
      </>
   )
}
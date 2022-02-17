export const DisplayItem = ({contact}) => {

   return (
      <>
         <li>{contact.name} <span>{contact.number}</span></li>
      </>
   )
}
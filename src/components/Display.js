import { DisplayItem } from "../shared/DisplayItem"

export const Display = ({ contactsList }) => {

   return (
      <>
         <section>
            <h2>Numeros</h2>
            {
               contactsList.length === 0
                  ? 'No se encontraron contactos'
                  : <ul>
                     {
                        contactsList.map((el) => <DisplayItem key={el.name} contact={el}/>)
                     }
                  </ul>
            }
         </section>
      </>
   )
}

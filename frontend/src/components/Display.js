import { DisplayItem } from "../shared/DisplayItem"

export const Display = ({ contactsList, deleteId }) => {

   return (
      <>
         <section>
            <h2>Numeros</h2>
            {
               contactsList.length === 0
                  ? 'No se encontraron contactos'
                  : <ul className="list-group">
                     {
                        contactsList.map((el) => <DisplayItem onDelete={(e)=>deleteId(e)} key={el.name} contact={el}/>)
                     }
                  </ul>
            }
         </section>
      </>
   )
}

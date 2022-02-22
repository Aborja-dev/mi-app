export const DisplayItem = ({ contact, onDelete }) => {

   return (
      <li className="list-group-item">
         {contact.name} <span className="fw-bold">{contact.number}</span><div className="float-end d-inline-block"><i onClick={() => onDelete(contact.id)} class="las la-trash text-danger fs-4"></i></div>
      </li>
   )
}
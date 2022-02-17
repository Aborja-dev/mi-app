import { useEffect, useState } from 'react'
import { Display } from '../components/Display'
import { Form } from '../components/Form'
import { Searcher } from '../components/Searcher'

export const Agenda = () => {
   const [contactos, setContactos] = useState([
      { name: 'Arto Hellas' }
   ])
   const [search, setSearch] = useState('')
   const submitContact = (newContact) => {
      contactRepeat(newContact, 'name')
         ? alertError(`El nombre ${newContact.name} ya existe`)
         : addContacto(newContact)
   }
   const addContacto = (newContact) => {
      const contacts = contactos.concat(newContact)
      setContactos(contacts)
   }
   const contactRepeat = (contact, value) => {
      const repeat = contactos.find((element) => element[value] === contact[value])
      return repeat ? true : false
   }
   const alertError = (message) => {
      alert(message)
   }
   const searchName = (searchValue, searchProp)=>{
      const filterList = contactos.filter((element) => {
         return element[searchProp].includes(searchValue)
      })
      return filterList
      
   }
   const filteredContacts = searchName(search, 'name');
   return (
      <>
         <Searcher onSearch={ (e)=>{ setSearch(e) } }/>
         <Form onSubmit={ (e)=>{ submitContact(e) } }/>
         <Display contactsList={filteredContacts}/>
      </>
   )
}












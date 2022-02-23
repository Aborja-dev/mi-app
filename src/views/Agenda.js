import { useEffect, useState } from 'react'
import { Display } from '../components/Display'
import { Form } from '../components/Form'
import { Searcher } from '../components/Searcher'
import { createContact, deleteContact, getAllContacts, updateContact } from '../services/agendaGateway'
import { Alert } from '../shared/Alert'

export const Agenda = () => {
   const [contactos, setContactos] = useState([])
   const [search, setSearch] = useState('')
   const [errorMessage, setErrorMessage] = useState(null)
   let newContact = {}
   useEffect( ()=>{
      getAll()
   },[])
   const getAll = async ()=>{
      try {
         const contacts = await getAllContacts()
         setContactos(contacts)
      } catch (error) {
         showAlert('Ha ocurrido un error', 'error')
      }
   }
   const submitContact = (evtValue) => {
      newContact = evtValue
      contactRepeat(newContact, 'name')
         ? windowConfirm(newContact)
         : add()
   }
   const add = async () => {
      showAlert(`Se ha agregado a ${newContact.name}`, 'alert')
      const response = await createContact(newContact)
      const newContactList = contactos.concat(response)
      setContactos(newContactList)
   }
   const update = async ()=>{
      const finded = findContact(newContact.name);
      showAlert(`Se ha actualizado ${newContact.number}`, 'alert')
      await updateContact(newContact, finded.id)
      newContact['id'] = finded.id
      const newContactList = contactos.map((contact)=> contact.id===finded.id?newContact:contact)
      setContactos(newContactList)
   }
   const windowConfirm = (newContact)=>{
      const confirm = window.confirm(`Desea actualizar ${newContact.name}`)
      if (confirm) {
         update()
      }
   }
   const deleteC = async (deleteId)=>{
      try {
         await deleteContact(deleteId)
         const newContactList = contactos.filter(({id})=>id!==deleteId)
         showAlert(`El contacto se ha borrado`, 'alert')
         setContactos(newContactList)
      } catch (error) {
         if(error.response.status === 404){
            showAlert(`Este contacto ya no existe`, 'error')
         }
         else {
            showAlert('Ha ocurrido un error', 'error')
         }
      }
   }
   const showAlert = (message, type)=>{
      setErrorMessage({
         message: message,
         type: type,
      })
      setTimeout(()=>{
        setErrorMessage(null) 
      },1500)
   }
   const findContact = (nameFind)=>{
      const find = contactos.find(({name}) => name === nameFind) 
      return find || null
   }
   const contactRepeat = (contact, value) => {
      return contactos.some((element) => element[value] === contact[value])
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
         <Alert message={errorMessage?.message} type={errorMessage?.type}></Alert>
         <div className='card col-8 pb-2 bg-secondary bg-opacity-25 container' style={{marginTop: '5rem'}}>
            <Searcher onSearch={ (e)=>{ setSearch(e) } }/>
            <div className="card-body row">
               <article className="col-4">
                  <Form onSubmit={ (e)=>{ submitContact(e) } }/>
               </article>
               <article className="col-8">
                  <Display deleteId={(e)=>deleteC(e)} contactsList={filteredContacts}/>
               </article>
            </div>
         </div>
      </>
   )
}












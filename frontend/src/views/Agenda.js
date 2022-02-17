import { useEffect, useState } from 'react'
import { Display } from '../components/Display'
import { Form } from '../components/Form'
import { Searcher } from '../components/Searcher'
import { createContact, deleteContact, getAllContacts, updateContact } from '../services/agendaGateway'

export const Agenda = () => {
   const [contactos, setContactos] = useState([ ])
   const [search, setSearch] = useState('')
   let newContact = {}
   useEffect( ()=>{
      getAll()
   },[])
   
   const getAll = async ()=>{
     const contacts = await getAllContacts()
     setContactos(contacts)
   }
   const submitContact = (evtValue) => {
      newContact = evtValue
      contactRepeat(newContact, 'name')
         ? windowConfirm(newContact)
         : add()
   }
   const add = async () => {
      const response = await createContact(newContact)
      const newContactList = contactos.concat(response)
      setContactos(newContactList)
   }
   const update = async ()=>{
      const id = searchId(newContact.name);
      const response = await updateContact(newContact, id)
      const newContactList = contactos.map((contact)=> contact.id===response.id?response:contact)
      setContactos(newContactList)
   }
   const windowConfirm = (newContact)=>{
      const confirm = window.confirm(`Desea actualizar ${newContact.name}`)
      if (confirm) {
         update()
      }
   }
   const deleteC = async (deleteId)=>{
      deleteContact(deleteId)
      const newContactList = contactos.filter(({id})=>id!==deleteId)
      setContactos(newContactList)
   }
   const searchId = (nameFind)=>{
      const findContact = contactos.find(({name}) => name === nameFind) 
      return findContact?.id || null
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
         <Searcher onSearch={ (e)=>{ setSearch(e) } }/>
         <Form onSubmit={ (e)=>{ submitContact(e) } }/>
         <Display deleteId={(e)=>deleteC(e)} contactsList={filteredContacts}/>
      </>
   )
}












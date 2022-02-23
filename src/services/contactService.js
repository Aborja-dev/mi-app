import { getAllContacts } from "./agendaGateway"

export class Service {
   contactos = []
   constructor (){
      getAllContacts().then( data=>{
         this.contactos = data
      })
   }
   setContactArray(arr){
      this.contactos = arr
   }
   getContactArray(){
      return this.contactos
   }
   searchId = (nameFind)=>{
      const findContact = this.contactos.find(({name}) => name === nameFind) 
      return findContact?.id || null
   }
   contactRepeat = (contact, value) => {
      return this.contactos.some((element) => element[value] === contact[value])
   }
   searchName = (searchValue, searchProp)=>{
      console.log(this.contactos);
      const filterList = this.contactos.filter((element) => {
         return element[searchProp].includes(searchValue)
      })
      return filterList
   }
}
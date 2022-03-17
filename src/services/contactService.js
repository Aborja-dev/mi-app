export class Service {
   contactos = []
   constructor(contactos){
      this.contactos = contactos
   }
   setContactArray(arr){
      this.contactos = arr
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
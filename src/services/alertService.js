export const alertError = (message) => {
   alert(message)
}

export const windowConfirm = (newContact, handler)=>{
   const confirm = window.confirm(`Desea actualizar ${newContact.name}`)
   if (confirm) {
      handler()
   }
}
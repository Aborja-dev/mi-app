class AgendaError {
   constructor(val){
      this.val = val
   }
   isUndefined = ()=>this.type('undefined')
   isEmpty = ()=>this.val.length === 0
   isNull = ()=>this.type('null')
   type = (typeValue)=> typeof(this.val) === typeValue
   showValue = ()=> {
      console.log('AgendaError valor:', this.val);
   }
   
}

export const missingValue = (value, namevalue='')=>{
   const error = new AgendaError(value)
   if(error.isEmpty() )
      throw `El valor ${namevalue} esta vacio`
   if(error.isUndefined() )
      throw `El valor ${namevalue} no existe`
   if(error.isNull() )
      throw `El valor ${namevalue} es nulo`
}
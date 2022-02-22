import { Input } from '../shared/Input'

export const Searcher = ({onSearch}) => {
   const changevalue = (evt)=>{
      console.log(evt);
   }
   return (
      <section className='p-1'>
            <Input label={'Buscar'} changeValue={ (e)=>onSearch(e)}/>
      </section>
   )
}
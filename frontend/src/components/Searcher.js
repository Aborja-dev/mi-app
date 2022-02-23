import { Input } from '../shared/Input'

export const Searcher = ({onSearch}) => {
   return (
      <section className='p-1'>
            <Input label={'Buscar'} changeValue={ (e)=>onSearch(e)}/>
      </section>
   )
}
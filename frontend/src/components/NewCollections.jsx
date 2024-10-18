import New_Collections from '../assets/new_collections'
import Item from './Item'

const NewCollections = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold uppercase'>New Collections</h1>
        <hr className='w-60 h-1 rounded-md bg-slate-400'/>
        <div className='grid grid-cols-4 gap-4 mt-2 cursor-pointer border border-solid border-red-500'>
            {New_Collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections 
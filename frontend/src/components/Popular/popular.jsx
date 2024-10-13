import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'

const popular = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold uppercase'>Popular In Women</h1>
        <hr className='w-60 h-1 rounded-md bg-slate-400'/>
        <div className='flex gap-10 mt-2 cursor-pointer border border-solid border-red-500'>
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default popular
import { useEffect } from "react";
import { useState } from "react";
import { crossIcon } from "../assets/all_products";
const ListProduct = () => {
  const [all_products, setAllProducts] = useState([]);

  const fetchProduct = async () => {
    await fetch("http://localhost:4000/product/listproduct")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  
  useEffect(()=>{
    fetchProduct();
  },[])

  const handleDelete = async(id) => {
    await fetch('http://localhost:4000/product/removeproduct',{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id}),
    })
    await fetchProduct();
  }
  console.log("products",all_products)

  return (
    <div className="flex flex-col items-center px-2 py-3 m-2 rounded-md bg-slate-50">
      <h1>All product list</h1>
      <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr 1fr" }}>

        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      
      {/* <div>map */}
        {all_products.map((item,index)=>(
          <>
          <hr className="h-0.5 bg-slate-200 my-4 w-full" />
          <div key={index} className="grid gap-2" style={{ gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr 1fr" }}>
            <img className='' src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.old_price}</p>
            <p>{item.new_price}</p>
            <p>{item.category}</p>
            <img src={crossIcon} alt="" onClick={()=>handleDelete(item.id)}/>
          </div>
          </>
        ))}
      </div>
    // </div>
  );
};

export default ListProduct;

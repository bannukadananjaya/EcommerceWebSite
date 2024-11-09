import { useState } from "react";
import upload_area from "../assets/upload_area.svg";
// import { response } from "express";
// import { urlencoded } from 'express';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    if(selectedFile){
      setImage(selectedFile);

    }
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const add_Product = async () => {
    // console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product",image);
    // console.log(formData);

    try{
      const response = await fetch('http://localhost:4000/upload',{
        method:"POST",
        body:formData,
      });
      responseData = await response.json();
      // console.log("upload successfull",responseData)

    }catch(err){
      console.log(err)
    }
    // await fetch("http://localhost:4000/upload", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     responseData = data;
    //   });

    if (responseData) {
      product.image = responseData.image_url;
      console.log("PRODUCT",product);
      await fetch("http://localhost:4000/product/addproduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Failed");
        });
    }
  };

  console.log(productDetails)

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type here" value={productDetails.old_price} onChange={changeHandler}/>
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type here" value={productDetails.new_price} onChange={changeHandler}/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className="addproduct-selector" value={productDetails.category} onChange={changeHandler}>
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct-itemfiled">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
          {/* <img src={upload_area} className='addproduct-thumbnail-img' alt="" />  */}
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          add_Product();
        }}
        className="addproduct-btn"
      >
        {" "}
        ADD Product
      </button>
    </div>
  );
};

export default AddProduct;

import React from "react";
import "./AddProduct.css";
import { useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import { response } from "express";
// import { urlencoded } from 'express';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product");

    await fetch("http://localhost:4000/upload", {
      mmethod: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product added") : alert("Failed");
        });
    }
  };

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
          <input type="text" name="Old price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="New price" placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className="addproduct-selector" id="">
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kid">kid</option>
        </select>
      </div>
      <div className="addproduct-itemfiled">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
          {/* <img src={upload_area} className='addproduct-thumbnail-img' alt="" /> */}
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

import React from 'react'
import product from '../datasource/product';
import products from "../datasource/products";
function HomeScreen() {
  return (
    <div className='product'>
    <div className='firstrow'>
    <div className='card'>
    <h1>Quality Tecno Phones</h1>
    

    </div>
    <div
style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    maxwidth: "90%",
    margin: "20px auto",

}}
>
{product.map((products)=>(
  ))}
</div>
style={{
    display: "flex",
    justifyContent: "center",
    flixDirection: "column",
    border: "1px solid #dedede",
    margin: "10px",
    padding: "10px",

}}
<img src={product.image} height="230px" />
<h5>{product.name}</h5>
<h5>GH₵{product.price.toFixed(2)}</h5>
    </div>

    </div>
  )
}

export default HomeScreen
import React, {useState} from "react";

function Item({ name, category}) {
const [cartState, setCartState]= useState("")

function handleCartState(){
  if(cartState===""){
    setCartState("in-cart")
  }else{
    setCartState("")
  }
}

  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartState} className="add">{cartState===""? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

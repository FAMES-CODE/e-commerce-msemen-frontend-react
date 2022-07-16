import React from "react";
 

function AddtoCart(props) {
   
  return (
    <div class="bg-orange-500 p-2 w-36 text-center rounded-full text-white">
      <button
        onClick={(x) => {
          var a = [];
          // Parse the serialized data back into an aray of objects
          a = JSON.parse(localStorage.getItem("cart")) || [];
          // Push the new data (whether it be an object or anything else) onto the array
          a.push({
            id: props.data.id,
            title: props.data.attributes.title,
            price: props.data.attributes.price,
            color: props.data.attributes.Color,
            size: props.data.attributes.Size,
          });

          // Re-serialize the array back into a string and store it in localStorage
          localStorage.setItem("cart", JSON.stringify(a));
          const cat = localStorage.getItem("cart");
    
          
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddtoCart;

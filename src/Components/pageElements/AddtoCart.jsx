import React from "react";

function AddtoCart(props) {
  return (
    <div class="bg-orange-500 p-2 w-36 text-center rounded-full text-white">
      <button
        onClick={(x) => {
          var a = [];
          // Parse the serialized data back into an aray of objects
          a = JSON.parse(localStorage.getItem("cart")) || [];
          console.log(a.length);
          // Push the new data (whether it be an object or anything else) onto the array

          console.log("Vide donc push");
          a.push({
            id: props.data.id,
            title: props.data.attributes.title,
            price: props.data.attributes.price,
            color: props.data.attributes.Color,
            size: props.data.attributes.Size,
          });

          // Re-serialize the array back into a string and store it in localStorage
          localStorage.setItem("cart", JSON.stringify(a));
          console.log("a", a);
          const cat = localStorage.getItem("cart");
          console.log(cat);
          /*  if (a.length > 0) {
            console.log("rempli");
            a.map((x) => {
              if (x.id == props.data.id) {
                console.log(x.id, " = ", props.data.id);
                return x.quant++;
              }
            });
          } else {
            a.push({
              id: props.data.id,
              title: props.data.attributes.title,
              price: props.data.attributes.price,
              color: props.data.attributes.Color,
              size: props.data.attributes.Size,
              quant: 0,
            });
          }
          // Re-serialize the array back into a string and store it in localStorage
          localStorage.setItem("cart", JSON.stringify(a));
          console.log("a", a);
          const cat = localStorage.getItem("cart");
          console.log(cat);
          */
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddtoCart;

import React from "react";

function AddtoCart(props) {
  return (
    <div>
      <button
        onClick={(x) => {
          var a = [];
          // Parse the serialized data back into an aray of objects
          a = JSON.parse(localStorage.getItem("cart")) || [];
          console.log(a.length);
          // Push the new data (whether it be an object or anything else) onto the array
          if (a.length === 0) {
            console.log("Vide donc push");
            a.push({
              id: props.data.id,
              title: props.data.attributes.title,
              price: props.data.attributes.price,
              color: props.data.attributes.Color,
              size: props.data.attributes.Size,
              quant: 1,
            });
          } else {
            var index = 0;
            var arr_length = a.length;
            while (index < arr_length) {
              const element_id = a[index];
              if (element_id.id == props.data.id) {
                console.log(element_id.id, " = = ", props.data.id);
                element_id.quant++;
                index = arr_length;
                console.log('I ' , index , ' arr machin ' , arr_length)
                break;
              }
              if (element_id.id != props.data.id) {
                index = arr_length;
                console.log('I ' , index , ' arr machin dans 2 ' , arr_length)
                a.push({
                  id: props.data.id,
                  title: props.data.attributes.title,
                  price: props.data.attributes.price,
                  color: props.data.attributes.Color,
                  size: props.data.attributes.Size,
                  quant: 0,
                });
                
              }
              
              if((index == arr_length) || (index > arr_length)){
                return console.log('I ' , index , ' arr machin dans 3 ' , arr_length)
              } else {
                return index++;

              }
            }
          }

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

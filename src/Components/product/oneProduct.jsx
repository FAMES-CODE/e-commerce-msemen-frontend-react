 
import React , {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

export default function OneProduct() {
  const [product, setProduct] = useState([]);

 
  const { product_id } = useParams();
  console.log(product_id);

  const GetoneProduct = async () => {
    var call = await fetch(
      `http://localhost:1337/api/products/${product_id}?populate=*`
    );
    var response = await call.json();
    setProduct([response.data]);
    console.log([response.data]);
  };

   useEffect(() => {
   
    GetoneProduct();
  }, []);
  return (
    <div>
      <div>
        {product
          ? product.map((x) => {
              var img = x.attributes.product_image.data
                .map((a) => {
                  return a;
                })
                .map((y) => {
                  return y.attributes.formats.medium.url;
                });

              return (
                <div class="h-screen flex justify-center items-center">
                  <div class="flex justify-center items-center w-4/6">
                    <img
                      src={`http://localhost:1337${img}`}
                      alt="Product image"
                    />
                  </div>
                  <div class="w-2/4 text-left flex flex-col items-center">
                    <h1 class="font-bold">{x.attributes.title}</h1>
                    <h3 class="">Prix : <span class="font-extrabold">{x.attributes.price}</span></h3>
                    <p>{x.attributes.description}</p>
                    <h3> {x.attributes.Color}</h3>                   
                  </div>
                </div>
              );
            })
          : "Loading product"}
      </div>
    </div>
  );
}

 

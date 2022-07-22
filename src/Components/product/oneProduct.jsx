import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddtoCart from "./../pageElements/AddtoCart";

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
      <div
        id="success"
        className="hidden sticky z-50 h-1/6 w-full justify-center items-center top-0 bg-lime-500"
      >
        <h1>Article ajouter au panier</h1>
      </div>
      <div>
        {product
          ? product.map((x) => {
              var img = x.attributes.product_image.data
                .map((a) => {
                  return a;
                })
                .map((y) => {
                  return y.attributes.formats.small.url;
                });

              return (
                <div class="h-screen mt-36 flex justify-center items-start">
                  <div class="flex flex-col justify-center items-center w-4/6">
                    <h1 class="font-bold">{x.attributes.title}</h1>
                    <img
                      src={`http://localhost:1337${img}`}
                      alt="Product image"
                    />
                  </div>
                  <div class="h-4/6 w-3/4 text-left flex flex-col justify-around ">
                    <div>
                      <p>Description : </p>
                      <p>{x.attributes.description}</p>
                    </div>
                    <hr class=" border-black" />
                    <h3>
                      Couleur disponible : <b>{x.attributes.Color}</b>
                    </h3>
                    <hr class=" border-black" />
                    <h3 class="">
                      Prix :{" "}
                      <span class="font-extrabold">{x.attributes.price}</span>
                    </h3>
                    {x.attributes.available ? (
                      <AddtoCart class="absolute bottom-0" data={x} />
                    ) : (
                      <div className="relative">
                        {" "}
                        <span className="w-full absolute font-bold text-center bg-red-500 ">
                          NON DISPONIBLE
                        </span>{" "}
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          : "Loading product"}
      </div>
    </div>
  );
}

import React from "react";
import { useParams } from "react-router-dom";
import AddtoCart from "./pageElements/AddtoCart";
import Sortbycategory from "./pageElements/Sortbycategory";

export default function Store() {
  const [products, setProducts] = React.useState([]);
  var { x_id } = useParams();

  const storeProduct = async () => {
    var call = await fetch("http://localhost:1337/api/products/?populate=*");
    var response = await call.json();
    setProducts(response.data);
    console.log(response.data);
  };

  React.useEffect(() => {
    storeProduct();
  }, []);
  return (
    <div>
      <div class="flex flex-col items-center">
        <div class="w-full h-full ">
          <Sortbycategory />
        </div>

        <div class=" flex justify-around w-full">
          {products
            ? products.map((x) => {
                var img = x.attributes.product_image.data
                  .map((a) => {
                    return a;
                  })
                  .map((y) => {
                    return y.attributes.formats.small.url;
                  });

                var product_id = x.attributes.category.data.map((x) => {
                  return x.id;
                });

                if (x_id == product_id) {
                  return (
                    <div
                      class="relative max-w-sm rounded overflow-hidden shadow-lg"
                      key={x.id}
                    >
                      <a href={`/product/${x.id}`}>
                        <img
                          class="w-full max-h-96"
                          src={`http://localhost:1337${img.toString()}`}
                          loading="lazy"
                          alt="IMG PRODUCT"
                        />
                        <div class="px-6 py-4">
                        <h2 class="font-bold text-xl mb-2">{x.attributes.title}</h2>

                        <p class="text-gray-700 text-base">

                        {x.attributes.description.length > 120
                          ? x.attributes.description.substring(0, 120) +
                          " . . ."
                          : x.attributes.description}
                          </p>
                        <hr />
                        <h3>Prix : {x.attributes.price} DA</h3>
                          </div>
                      </a>
                      <AddtoCart data={x} />
                    </div>
                  );
                }

                if (x_id == "all") {
                  return (
                    <div
                      class="relative max-w-sm rounded overflow-hidden shadow-lg"
                      key={x.id}
                    >
                      <a href={`/product/${x.id}`}>
                        <img
                          class="w-full max-h-96"
                          src={`http://localhost:1337${img.toString()}`}
                          loading="lazy"
                          alt="IMG PRODUCT"
                        />
                        <div class="px-6 py-4">
                          <h2 class="font-bold text-xl mb-2">
                            {x.attributes.title}
                          </h2>
                          <p class="text-gray-700 text-base">
                            {x.attributes.description.length > 120
                              ? x.attributes.description.substring(0, 120) +
                                " . . ."
                              : x.attributes.description}
                          </p>
                          <h3>{x.attributes.price} DA</h3>
                        </div>
                      </a>
                      <AddtoCart class="absolute bottom-0" data={x} />
                    </div>
                  );
                }
              })
            : "Loading"}
        </div>
      </div>
    </div>
  );
}

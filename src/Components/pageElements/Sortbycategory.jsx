import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Sortbycategory() {
  const [categories, setCategories] = useState([]);
  var { x_id } = useParams();

  const getCategories = async () => {
    var call = await fetch("http://localhost:1337/api/categories/");
    var res = await call.json();
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div class="z-20 fixed w-full py-2 bg-black bottom-0  shadow-lg shadow-green-600/30  flex justify-evenly items-center ">
      <a href="./all" class="text-white">
        Tout
      </a>
      <div class="flex w-1/6 justify-evenly">
        {categories
          ? categories.map((x) => {
              if (x_id == x.id) {
                return (
                  <a href={`../store/${x.id}`} class="text-red-500 uppercase">
                    {x.attributes.title}
                  </a>
                );
              }
              return (
                <a href={`../store/${x.id}`} class="text-white">
                  {x.attributes.title}
                </a>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Sortbycategory;

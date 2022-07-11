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
    <div class="fixed w-1/5 h-1/4 bg-black flex flex-col justify-evenly items-center text-white">
      <a href="./all" class="">
        Tout
      </a>
      {categories.map((x) => {
        if (x_id == x.id) {
          return (
            <a href={`../store/${x.id}`} class="text-red-500">
              {x.attributes.title}
            </a>
          );
        }
        return (
          <a href={`../store/${x.id}`} class="">
            {x.attributes.title}
          </a>
        );
      })}
    </div>
  );
}

export default Sortbycategory;

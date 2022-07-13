import React from "react";

function Categories() {
  const [categories, setCategories] = React.useState([]);
  async function getCategories() {
    var getcate = await fetch(
      `http://localhost:1337/api/categories?populate=*`
    );
    var response = await getcate.json();
    setCategories(response.data);
  }
  React.useEffect(() => {
    getCategories();
  }, []);
  return (
    <div class="min-h-screen">
      <div>
        <h1 class="  text-3xl font-bold text-center py-6">Categories</h1>
      </div>
      <div class="pt-6 flex justify-around items-center">
        {categories
          ? categories.map((x) => {
              console.log(
                x.attributes.category_image.data.attributes.formats.thumbnail
                  .url
              );
              return (
                <div class="shadow-lg h-full hover:scale-110">
                  <a class="relative " href={`/store/${x.id}`}>
                    <img
                      class="max-h-56 rounded-lg"
                      src={`http://localhost:1337${x.attributes.category_image.data.attributes.formats.small.url}`}
                      alt=""
                    />
                    <h2 class="absolute top-0 rounded-b-xl text-blue-100 text-center bg-blue-900/80 w-full">
                      {x.attributes.title}
                    </h2>
                  </a>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Categories;

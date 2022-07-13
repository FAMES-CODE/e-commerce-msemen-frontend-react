import React from "react";

function Home() {
  const [categories, setcategories] = React.useState([]);
  const [products, setproducts] = React.useState([]);

  const getCategories = async () => {
    var call = await fetch("http://localhost:1337/api/categories?populate=*");
    var response = await call.json();
    setcategories(response.data);
  };

  const getProducts = async () => {
    var call = await fetch("http://localhost:1337/api/products?populate=*");
    var res = await call.json();
    setproducts(res.data);
    console.log(res.data);
  };

  React.useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  return (
    <div>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col2">
              <h1>Make Them Stop And Stare</h1>
              <p>
                Rashane offer ready to wear for veiled women, modern and chic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                libero quas facilis maxime deleniti, quam repudiandae aperiam
                nulla odit, sapiente ipsum voluptas tenetur eos reiciendis nihil
                adipisci ipsam, magnam dolorum?
              </p>
              <a href="store.html" class="btn">
                Buy Now
              </a>
            </div>
            <div class="col2">
              <img src="img/1.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="categories">
        <div class="small-con">
          <div class="a">
            <a href="categories">Categories</a>
          </div>
          <div class="row">
            {categories
              ? categories.slice(0 , 2).map((cate) => {
                  return (
                    <div class="col3">
                      <a href={`store/${cate.id}`}>
                        <h2>{cate.attributes.title}</h2>
                        <img
                        class="w-2/4"
                          src={`http://localhost:1337${cate.attributes.category_image.data.attributes.formats.medium.url}`}
                          alt="Erreur"
                          width
                          height="450px"
                        />
                      </a>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>

      <div class="small-con">
        <div class="a">
          <a href="store/all"> Products </a>
        </div>
        <div class="row">
          {products
            ? products.slice(0, 2).map((product) => {
              var product_image = product.attributes.product_image.data.map((x) => {
                return x.attributes.formats.small.url.toString();
              })
                return (
                  <div class="col4">
                    <a href={`/product/${product.id}`}>
                      <img src={`http://localhost:1337${product_image}`} />
                      <h4>{product.attributes.title}</h4>
                      <p>{product.attributes.price} DA</p>
                    </a>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

     
    </div>
  );
}

export default Home;

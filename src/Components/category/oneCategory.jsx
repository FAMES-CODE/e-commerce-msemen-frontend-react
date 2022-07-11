import React from "react";
import { useParams } from "react-router-dom";

export default function OneCategory() {
  const [category, setCategory] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const { cate_id } = useParams();

  async function getCategory() {
    var getcate = await fetch(
      `http://localhost:1337/api/categories/${cate_id}?populate=*`
    );
    var response = await getcate.json();
    setCategory(response.data.attributes.title);
  }

  async function getProducts() {
    var getproducts = await fetch(
      `http://localhost:1337/api/products/?populate=*`
    );
    var response = await getproducts.json();

    var mydata = response.data.map((x) => x);
    var filtreddata = mydata.filter((items) => {
      var checkcate = items.attributes.category.data.map(
        (x) => x.attributes.title
      );
      if (checkcate.toString() == category) {
        console.log(items);
        return setProducts([items]);
      }
    });
    return filtreddata;
  }

  React.useEffect(() => {
    getCategory();
  }, []);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div class="small-con">
        <div class="a">
          <a href="producta.html"> Products </a>
        </div>
        <div class="row">
          <div class="col4">
            {products
              ? products.map((x) => {
                  var img = x.attributes.product_image.data;
                  var link = img.map((a) =>
                    a.attributes.formats.medium.url.toString()
                  );
                  console.log(x.id);
                  return (
                    <a key={x.id} href={`../product/${x.id}`}>
                      <img src={`http://localhost:1337${link}`} />
                      <h4>{x.title}</h4>
                      <p>{x.price}</p>
                      <div href="panier.html" class="btn">
                        Buy Now
                      </div>
                    </a>
                  );
                })
              : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
}

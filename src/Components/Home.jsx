import React from "react";

function Home() {
  const [categories, setcategories] = React.useState([]);

  const getCategories = async () => {
    var call = await fetch("http://localhost:1337/api/categories?populate=*");
    var response = await call.json();
    setcategories(response.data);
    console.log(response.data);
  };

  React.useEffect(() => {
    getCategories();
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
            <a href="categories.html">Categories</a>
          </div>
          <div class="row">
            {categories
              ? categories.map((cate) => {
                  return (
                    <div class="col3">
                      <a href={`category/${cate.id}`}>
                        <h2>{cate.attributes.title}</h2>
                        <img
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
          <a href="store.html"> Products </a>
        </div>
        <div class="row">
          <div class="col4">
            <a href="">
              <img src="img/pr1.jpg" />
              <h4>Abaya Ramadan</h4>
              <p>4500 DA</p>
            </a>
          </div>
          <div class="col4">
            <a href="">
              <img src="img/pr1.jpg" />
              <h4>Abaya Ramadan</h4>
              <p>4500 DA</p>
            </a>
          </div>
          <div class="col4">
            <a href="">
              <img src="img/pr1.jpg" />
              <h4>Abaya Ramadan</h4>
              <p>4500 DA</p>
            </a>
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="fcol1">
              <img src="img/logo.png" width="150px" height="100px" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                assumenda ex dicta tempora, alias iusto laborum! Ducimus
                repudiandae possimus, est impedit sunt placeat nobis quae ea
                suscipit, alias aspernatur enim!
              </p>
            </div>
            <div class="fcol3">
              <h3>Follow us</h3>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/Rashane-106765908397461"
                    target="_blank"
                  >
                    <img
                      src="img/facebook.png"
                      alt="Facebook"
                      width="30px"
                      height="30px"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rashane.e/"
                    target="_blank"
                  >
                    <img
                      src="img/instagram.png"
                      alt="Instagram"
                      width="30px"
                      height="30px"
                    />
                  </a>
                </li>
                <li>
                  <a href="tel:+213552967147" target="_blank">
                    <img
                      src="img/phone-call.png"
                      alt="Telephone"
                      width="30px"
                      height="30px"
                    />
                  </a>
                </li>
                <li>
                  <a href="mailto:rashaneofficial@gmail.com" target="_blank">
                    <img
                      src="img/email.png"
                      alt="Email"
                      width="30px"
                      height="30px"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div class="fcol4">
              <h3>Usefull Links</h3>
              <ul>
                <li>
                  <a href="Shipping.html"> Shipping Policy</a>
                </li>
                <li>
                  <a href="payment.html"> Payment Policy</a>
                </li>
                <li>
                  <a href="about.html"> About us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <a href="">
            <img
              src="img/copy.png"
              alt="copyright"
              width="30px"
              height="30px"
            />
            Rashane 2022 Powerd by <b>SVILUPPO WEB</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;

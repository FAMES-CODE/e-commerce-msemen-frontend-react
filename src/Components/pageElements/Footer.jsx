import React from "react";

function Footer() {
  return (
    <div class="relative z-20 w-full bottom-0 footer">
      <div class="container">
        <div class="row">
          <div class="fcol1">
            <img src="assets/logo.png" width="150px" height="100px" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              assumenda ex dicta tempora, alias iusto laborum! Ducimus
              repudiandae possimus, est impedit sunt placeat nobis quae ea
              suscipit, alias aspernatur enim!
            </p>
          </div>
          <div class="fcol3">
            <h3>Follow us</h3>
            <ul class="flex flex-col items-center">
              <li>
                <a
                  href="https://www.facebook.com/Rashane-106765908397461"
                  target="_blank"
                >
                  <img src="assets/facebook.png" alt="Facebook" class="w-8" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/rashane.e/" target="_blank">
                  <img src="assets/instagram.png" alt="Instagram" class="w-8" />
                </a>
              </li>
              <li>
                <a href="tel:+213552967147" target="_blank">
                  <img
                    src="assets/phone-call.png"
                    alt="Telephone"
                    class="w-8"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:rashaneofficial@gmail.com" target="_blank">
                  <img src="assets/email.png" alt="Email" class="w-8" />
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
            src="assets/copy.png"
            alt="copyright"
            width="30px"
            height="30px"
          />
          Rashane 2022 Powerd by <b>SVILUPPO WEB</b>
        </a>
      </div>
      
    </div>
  );
}

export default Footer;

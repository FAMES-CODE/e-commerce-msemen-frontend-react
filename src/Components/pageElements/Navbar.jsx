import React from "react";

function Navbar() {
  return (
    <div class="flex flex-col md:flex-row py-12 shadow-lg border-b-2 h-16 flex justify-center items-center ">
      <div class="w-1/5 md:w-5/6  w-full">
        <img class=" md:ml-56 w-24" src="/assets/logo.png" alt="" />
      </div>
      <div class="font-bold flex justify-around w-4/6 md:justify-between items-center w-3/6  ">
        <div class="text-center flex items-center w-full md:w-3/6 ">
          <a class="w-full" href="/">
            Home
          </a>
          <a class="w-full" href="/store/all">
            Store
          </a>
          <a class="w-full" href="/about">
            About
          </a>
        </div>

        <div class="w-1/6 px-4 md:w-3/5">
          <a href="/order" class="text-lime-600">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

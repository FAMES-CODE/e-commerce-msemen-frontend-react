import React from "react";

function Navbar() {
  //
  return (
    <div class=" shadow-lg border-b-4 h-16 flex justify-center items-center ">
      <div class="px-16 w-full">
        LOGO
      </div>
      <div class="flex flex-row justify-around items-center w-screen  ">
        <div class="flex justify-evenly items-center w-3/6 ">
          <a class="text-black" href="/">
            Home
          </a>
          <a class="text-black" href="/store/all">
            Store
          </a>
          <a class="text-black" href="/about">
            About
          </a>
        </div>

        <div class=" flex flex-col w-3/6">
          <a href="/order" class="text-lime-600">Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

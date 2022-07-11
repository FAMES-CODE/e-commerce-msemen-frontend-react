import React from "react";

function Navbar() {
  return (
    <div class="bg-black h-16 flex justify-center items-center ">
      <div class="flex flex-row justify-around items-center w-screen  ">
        <div class="flex justify-evenly items-center w-3/6 ">
          <a class="text-sky-400" href="/">
            Home
          </a>
          <a class="text-sky-400" href="/store/all">
            Store
          </a>
          <a class="text-sky-400" href="/about">
            About
          </a>
        </div>

        <div class=" flex flex-col w-1/6">
          <a href="/cart" class="text-sky-600">Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

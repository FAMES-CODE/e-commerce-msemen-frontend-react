import React from "react";
import { useForm } from "react-hook-form";

function Order() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  var finalCart = [];

  var checkID = 0;
  var x = 0;
  cart.forEach((element) => {
    var newEl = { element, quant: 0 };
    for (let index = 0; index < cart.length; index++) {
      const el = cart[index];
      if (el.id == checkID) {
        newEl.quant++;
      }
    }
    finalCart.push(newEl);
    x = 0;
    checkID++;
  });

  finalCart = finalCart.filter((item) => item.quant !== 0);
  console.log(finalCart);
  var totalPrice = 0;
  const onSubmit = (data) => console.log(data);
  return (
    /* "handleSubmit" will validate your inputs before invoking
      "onSubmit" */
    <div>
      <form class="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div class="flex flex-col justify-center items-center">
          <div>
            <label htmlFor="">Nom : </label>
            <input
              type="text"
              defaultValue="test"
              {...register("example")}
            />{" "}
          </div>
          <br />
          <div>
            <label htmlFor="">Prénom : </label>
            {/* include validation with required or other standard HTML validation rules */}
            <input type="text" {...register("prenom", { required: true })} />{" "}
            {/* errors will return when field validation fails  */}
            {errors.prenom && <span>This field is required</span>}
          </div>
          <br />
          <div>
            <label htmlFor="">Numéro de téléphone : </label>
            <input
              type="number"
              {...register("phonenumber", { required: true })}
            />
            {errors.phonenumber && <span>Phone number is required</span>}
          </div>
          <br />
          <div>
            <label htmlFor="">Adresse e-mail : </label>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <span>E-mail address is required</span>}
          </div>
          <br />
          <div>
            <label htmlFor="">Adresse de livraison : </label>
            <input
              type="email"
              {...register("add_livraison", { required: true })}
            />
            {errors.email && <span>Delivery address is required</span>}
            <br />
          </div>
        </div>
        <div>
          <table class="w-fulltable-auto   border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr class="text-left border border-red-600">
                <th class="">ID</th>
                <th>Article</th>
                <th>Taille disponible</th>
                <th>Prix unitaire ( DA ) </th>
                <th>Quantité </th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody class="">
              {finalCart
                ? finalCart.map((x) => {
                    var priceEl = x.element.price * x.quant;
                    var sizeOf = x.element.size.split("-");
                    totalPrice = totalPrice + priceEl;
                    return (
                      <tr>
                        <td>{x.element.id}</td>
                        <td>{x.element.title}</td>
                        <select name="" id="">
                          {sizeOf.map((a) => {
                            return <option value={`${a}`}>{a}</option>;
                          })}
                        </select>

                        <td>{x.element.price}</td>
                        <td>{x.quant}</td>
                        <td>{priceEl}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
          <p class="">Le prix total est de {totalPrice} DA </p>
        </div>
        <input class="w-1/4" type="submit" />
      </form>
    </div>
  );
}

export default Order;

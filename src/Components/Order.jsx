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
    finalCart.push(newEl, { x });
    x = 0;
    checkID++;
  });

  finalCart = finalCart.filter((item) => item.quant > 0);

  var totalPrice = 0;

  const onSubmit = (data) => {
    var data = data;
    var ah = {
      confirmed: false,
      delivred: false,
      total_price: totalPrice,
      recap: finalCart.map((x) => {
        var sizeee = document.getElementById("selectedSize");
        var colorrr = document.getElementById("selectedColor");
        var sizee = sizeee.value.toString();
        var col = colorrr.value.toString();
        var stri =
          x.element.title +
          " | | En taille :  " +
          sizee +
          " | | La couleur :  " +
          col +
          " | | En quantitée : " +
          x.quant +
          "\n";

        return stri.toString();
      }),

      products: finalCart.map((x) => {
        return { id: x.element.id };
      }),
    };

    const sendDetailsToServer = async () => {
      // http://localhost:1337/api/orders

      fetch("http://localhost:1337/api/orders", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ah),
      })
        .then((res) => res.json)
        .catch((err) => console.log(err));
    };

    sendDetailsToServer();
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking
      "onSubmit" */
    <div class="min-h-screen">
      <form class="" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div class="flex flex-col justify-center ml-32 py-8">
          <div>
            <label htmlFor="">Nom : </label>
            <input
              class="rounded-lg mx-6 text-center font-bold focus:border-4 border-cyan-400 outline-none"
              type="text"
              {...register("Lastname")}
            />{" "}
          </div>
          <br />
          <div>
            <div class="flex">
              <label htmlFor="">Prénom : </label>
              {/* include validation with required or other standard HTML validation rules */}
              <input
                class="rounded-lg mx-6 text-center font-bold focus:border-4 border-cyan-400 outline-none"
                type="text"
                {...register("Firstname", { required: true })}
              />{" "}
              {/* errors will return when field validation fails  */}
            </div>
            {errors.Firstname && (
              <span class="text-sm font-bold text-red-500">
                This field is required
              </span>
            )}
          </div>
          <br />
          <div>
            <div class="flex">
              <label htmlFor="">Numéro de téléphone : </label>
              <input
                class="rounded-lg mx-6 text-center font-bold focus:border-4 border-cyan-400 outline-none"
                type="number"
                {...register("Phone_number", { required: true })}
              />
            </div>
            {errors.Phone_number && (
              <span class="text-sm font-bold text-red-500">
                Phone number is required
              </span>
            )}
          </div>
          <br />
          <div>
            <div class="flex">
              <label htmlFor="">Adresse e-mail : </label>
              <input
                class="rounded-lg mx-6 text-center font-bold focus:border-4 border-cyan-400 outline-none"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            {errors.email && (
              <span class="text-sm font-bold text-red-500">
                E-mail address is required
              </span>
            )}
          </div>
          <br />
          <div>
            <div class="flex">
              <label htmlFor="">Adresse de livraison : </label>
              <input
                class="rounded-lg mx-6 text-center font-bold focus:border-4 border-cyan-400 outline-none"
                type="text"
                {...register("delivery_adress", { required: true })}
              />
            </div>
            {errors.delivery_adress && (
              <span class="text-sm font-bold text-red-500">
                DELIVERY ADDRESS IS REQUIRED
              </span>
            )}
            <br />
          </div>
        </div>
        <div class="w-screen flex flex-col items-center">
          <table class="w-5/6 table-auto border-separate border-spacing-2 border border-slate-500">
            <thead>
              <tr class="text-center border border-red-600">
                <th class="">ID</th>
                <th>Article</th>
                <th>Couleur</th>
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
                    var colorOf = x.element.color.split("-");
                    totalPrice = totalPrice + priceEl;
                    return (
                      <tr class="text-center">
                        <td>{x.element.id}</td>
                        <td>{x.element.title}</td>
                        <td>
                          <select name="" id="selectedColor">
                            {colorOf.map((b) => {
                              return (
                                <option value={`${b.toString()}`}>{b}</option>
                              );
                            })}
                          </select>
                        </td>
                        <td>
                          <select name="" id="selectedSize">
                            {sizeOf.map((a) => {
                              return (
                                <option value={`${a.toString()}`}>{a}</option>
                              );
                            })}
                          </select>
                        </td>

                        <td>{x.element.price}</td>
                        <td>
                          <input
                            class="w-8 text-center"
                            min={1}
                            type="number"
                            defaultValue={x.quant}
                            name=""
                            id=""
                          />
                        </td>
                        <td>{priceEl}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
          <p class="">Le prix total est de {totalPrice} DA </p>
        </div>
        <input class="w-1/4 ml-32" type="submit" />
      </form>
    </div>
  );
}

export default Order;

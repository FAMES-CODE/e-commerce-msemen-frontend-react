import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { v1 as uuidv1 } from 'uuid';
function Order() {
  let navigate = useNavigate();
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
  var newOrder = finalCart;

  
  const onSubmit = (data) => {
    const v1options = {
      node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
      clockseq: 0x1234,
      msecs: new Date().getTime(),
      nsecs: 5678,
    };
    
    var oid = uuidv1(v1options);
   
    var ah = {
      Lastname: data.Lastname,
      Firstname: data.Firstname,
      Phone_number: data.Phone_number,
      email: data.email,
      oid: oid,
      delivery_adress: data.delivery_adress,
      confirmed: false,
      delivred: false,
      total_price: newOrder.map((x) => {
        return x.quant * x.element.price
      }).reduce((previousValue, currentValue) => previousValue + currentValue, 0),
      recap: newOrder.map((x) => {
        var el = x.element.title + ' Couleur : ' + x.element.color + ' ,  Quantité : ' + x.quant + ' ,  Prix unitaire : ' + x.element.price + ' || Total : ' + (x.quant * x.element.price)
        return el
      }).join("\n\n"), 
       
      

      products: newOrder.map((x) => {
        return { id: x.element.id };
      }),

    };
   
    const sendDetailsToServer = async () => {
      // http://localhost:1337/api/orders
      console.log({data: ah});
      fetch("http://localhost:1337/api/orders", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({data: ah}),
      })
        .then((res) => res.json)
        .catch((err) => console.log(err));
    };

    sendDetailsToServer();

    setTimeout(() => {
      navigate(`success/${oid}`);
    }, 400)

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
               
              </tr>
            </thead>
            <tbody class="">
              {finalCart
                ? finalCart.map((x) => {
                    
                    var sizeOf = x.element.size.split("-");
                    var colorOf = x.element.color.split("-");
                    var priceOf = x.quant * x.element.price;
                    
                    return (
                      <tr class="text-center">
                        <td>{x.element.id}</td>
                        <td>{x.element.title}</td>
                        <td>
                          <select
                            name=""
                            id="selectedColor"
                            onChange={(el) => {
                              for (
                                let index = 0;
                                index < newOrder.length;
                                index++
                              ) {
                                const element = newOrder[index];
                                const element_id = newOrder[index].element.id;
                                if (element_id == x.element.id) {
                                  element.element.color = el.target.value;
                                  console.log(
                                    element.element.color,
                                    " = ",
                                    el.target.value
                                  );
                                }
                                console.log(newOrder);
                              }
                            }}
                          >
                            {colorOf.map((b) => {
                              return (
                                <option value={`${b.toString()}`}>{b}</option>
                              );
                            })}
                          </select>
                        </td>
                        <td>
                          <select
                            name=""
                            id="selectedSize"
                            onChange={(el) => {
                              for (
                                let index = 0;
                                index < newOrder.length;
                                index++
                              ) {
                                const element = newOrder[index];
                                const element_id = newOrder[index].element.id;
                                if (element_id == x.element.id) {
                                  element.element.size = el.target.value;
                                  console.log(
                                    element.element.size,
                                    " = ",
                                    el.target.value
                                  );
                                }
                                console.log(newOrder);
                              }
                            }}
                          >
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
                            id="selectedQnt"
                            onChange={(el) => {
                              for (
                                let index = 0;
                                index < newOrder.length;
                                index++
                              ) {
                                const element = newOrder[index];
                                const element_id = newOrder[index].element.id;

                                console.log(element_id);
                                if (element_id == x.element.id) {
                                  element.quant = parseInt(el.target.value);
                                  priceOf = element.element.price * parseInt(el.target.value);
                                  element.totalUnitPrice = priceOf; 
                               
                                }
                                console.log(newOrder);
                              }
                            }}
                          />
                        </td>
                    
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
        <input class="w-1/4 ml-32 my-6" type="submit" />
      </form>
    </div>
  );
}

export default Order;

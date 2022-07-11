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
  const onSubmit = (data) => console.log(data);
  return (
    /* "handleSubmit" will validate your inputs before invoking
      "onSubmit" */
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="">Nom : </label>
        <input type="text" defaultValue="test" {...register("example")} />{" "}
        <br />
        <label htmlFor="">Prénom : </label>
        {/* include validation with required or other standard HTML validation rules */}
        <input type="text" {...register("prenom", { required: true })} />{" "}
        {/* errors will return when field validation fails  */}
        {errors.prenom && <span>This field is required</span>}
        <br />
        <label htmlFor="">Numéro de téléphone : </label>
        <input type="number" {...register("phonenumber", { required: true })} />
        {errors.phonenumber && <span>Phone number is required</span>}
        <br />
        <label htmlFor="">Adresse e-mail : </label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>E-mail address is required</span>}
        <br />
        <label htmlFor="">Adresse de livraison : </label>
        <input
          type="email"
          {...register("add_livraison", { required: true })}
        />
        {errors.email && <span>Delivery address is required</span>}
        <br />
        <div>
          <table class="w-5/6 table-auto   border-separate border-spacing-2 border border-slate-500">
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
              {cart
                ? cart.map((x) => {
                    var priceEl = x.price * x.quant;
                    var sizeOf = x.size.split("-");
                    return (
                      <tr>
                        <td>{x.id}</td>
                        <td>{x.title}</td>
                        <select name="" id="">
                          {sizeOf.map((a) => {
                            return <option value={`${a}`}>{a}</option>;
                          })}
                        </select>

                        <td>{x.price}</td>
                        <td>{x.quant}</td>
                        <td>{priceEl}</td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </table>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Order;

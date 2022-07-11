import React from "react";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  if (cart) {
    return (
      <div>
        <table class="w-5/6 table-auto   border-separate border-spacing-2 border border-slate-500">
          <thead>
            <tr class="text-left border border-red-600">
              <th class="">ID</th>
              <th>Article</th>
              <th>Prix unitaire ( DA ) </th>
              <th>Taille disponible</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="">
            {cart
              ? cart.map((x, props) => {
                  return (
                    <tr>
                      <td>{x.id}</td>
                      <td>{x.title}</td>
                      <td>{x.price}</td>
                      <td>{x.size}</td>
                      <td>
                        <button
                          onClick={() => {
                            const items = JSON.parse(
                              localStorage.getItem("cart")
                            );
                            console.log("firt items ", items);
                            console.log("props ", props);

                            const itemToDelete = items[props].id;
                            console.log("itemToDelete ", itemToDelete);

                            const filtered = items.filter(
                              (item) => item[props].id !== itemToDelete
                            );
                            localStorage.setItem(
                              "cart",
                              JSON.stringify(filtered)
                            );

                            const newitems = JSON.parse(
                              localStorage.getItem("cart")
                            );
                            console.log("newitems   ", newitems);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "Nuln"}
          </tbody>
        </table>

        <div>
          <p>
            Voulez-vous confirmer la commande et passer au formulaire de
            commander ?{" "}
          </p>
          <div class="flex justify-evenly items-center">
            <a href="/order">Oui</a>
            <a href="/store">Non</a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex flex-col items-center">
        Le panier est vide remplissez le depuis notre{" "}
        <a href="/store/all">Boutique</a>
      </div>
    );
  }
}

export default Cart;

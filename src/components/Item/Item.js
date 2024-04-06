import React, { useState } from "react";
import "./Item.css";

function Item({ item, currentUser, setUserCart, userCart, layout }) {
  return (
    <div className="item-container">
      <img
        src={item.images_url ? item.images_url : ""}
        alt={item.images ? item.images.altText : "Item image"}
      />
      <h3 className="item-name card-title">{item.fullName}</h3>
      <p>${item.price}</p>
      <div className="button-group">
        <div className="size-and-quantity">
          <select>
            {item.sizes &&
              item.sizes.map((size) => (
                <option key={size} value={size.toLowerCase()}>
                  {size}
                </option>
              ))}
          </select>
          <div className="button-group">
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => {
                fetch("https://dummyjson/add-", {
                  method: "Post",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    userName: currentUser,
                    itemId: item.id,
                  }),
                })
                  .then((response) => response.json())
                  .then((response) => {
                    if (
                      response?.message === "Item successfully added to cart"
                    ) {
                      setUserCart([...userCart, item.id]);
                    }
                    return response;
                  })
                  .catch((error) => console.error("Error:", error));
              }}
            >
              Add to Cart
            </button>

            {layout === "cart" ? <button> Delete </button> : ""}
          </div>
        </div>

        {layout === "cart" ? <button> Delete </button> : ""}
      </div>
    </div>
  );
}

export default Item;

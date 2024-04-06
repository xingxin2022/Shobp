import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({
  items,
  itemIndex,
  itemsPerPage,
  currentUser,
  setUserCart,
  userCart,
  layout,
}) {
  const uniqueItems = Array.from(
    new Map(items.map((item) => [item.id, item])).values()
  );
  const end = itemIndex + itemsPerPage;
  const currentItems = uniqueItems.slice(itemIndex, end);
  const containerClassName =
    layout === "home" ? "items-container" : "items-container-search";
  return (
    <div className={containerClassName}>
      {currentItems.map((item) => (
        <Item
          item={item}
          key={item.id}
          currentUser={currentUser}
          setUserCart={setUserCart}
          userCart={userCart}
          layout={layout}
        />
      ))}
    </div>
  );
}

export default ItemList;

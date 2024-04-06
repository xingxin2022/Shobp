// import "./Cart.css";
// import Header from "../../components/Header/Header";
// import { useState, useEffect } from "react";
// import ItemList from "../../components/ItemList/ItemList";
// //import Button from "react-bootstrap/Button";
// //import "bootstrap/dist/css/bootstrap.min.css";

// const mockData = [
//   {
//     id: "1",
//     fullName: "Shirt",
//     images_url:
//       "https://images.lululemon.com/is/image/lululemon/LW1EU0S_064717_1?wid=1800&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
//     inCart: "True",
//   },
//   {
//     id: "2",
//     fullName: "Shirt",
//     images_url:
//       "https://images.lululemon.com/is/image/lululemon/LW1EU0S_064717_1?wid=1800&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
//     inCart: "True",
//   },
//   {
//     id: "3",
//     fullName: "Shirt",
//     images_url:
//       "https://images.lululemon.com/is/image/lululemon/LW1EU0S_064717_1?wid=1800&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
//     inCart: "True",
//   },
// ];
// function Home() {
//   //   const [items, setItems] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [userCart, setUserCart] = useState([]);
//   const [items, setItems] = useState([]);

//   //fetch current user
//   useEffect(() => {
//     fetch("https://dummyjson.com/auth/users", {
//       method: "GET",
//       credentials: "include",
//     })
//       .then((response) => response.text())
//       .then((data) => {
//         setCurrentUser(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setCurrentUser(null);
//       });
//   }, []);

//   //fetch current user's cart
//   useEffect(() => {
//     const fetchUserCart = async () => {
//       if (currentUser) {
//         try {
//           const response = await fetch(
//             `https://dummyjson.com/auth/users&username=${currentUser}`,
//             {
//               method: "GET",
//               credentials: "include",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           );
//           const cart = await response.json();
//           setUserCart(cart || []);
//         } catch (error) {
//           console.error("Failed to fetch user cart", error);
//         }
//       }
//     };
//     fetchUserCart();
//   }, [currentUser]);

//   //fetch item details based on item id in  user's cart
//   useEffect(() => {
//     if (userCart.length > 0) {
//       const promises = userCart.map((itemId) =>
//         fetch(`https://example.com/api/items/${itemId}`, {
//           method: "GET",
//           credentials: "include",
//           headers: { "Content-Type": "application/json" },
//         }).then((response) => response.json())
//       );

//       Promise.all(promises)
//         .then((itemsDetails) => {
//           setItems(itemsDetails);
//         })
//         .catch((error) => {
//           console.error("Error fetching items details:", error);
//         });
//     }
//   }, [userCart]);

//   //for displaying purpose
//   useEffect(() => {
//     setItems(mockData);
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="recommendation-container mt-5">
//         <h3>Your Cart</h3>
//         <div className="recommendation-results">
//           <ItemList
//             items={items}
//             currentUser={currentUser}
//             setUserCart={setUserCart}
//             userCart={userCart}
//             layout="cart"
//           />
//           <h5>Subtotal Price: $100</h5>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from "react";
import "./Cart.css"; // Make sure to create a corresponding CSS file
import Header from "../../components/Header/Header";
import ItemList from "../../components/ItemList/ItemList";

const mockData = [
  {
    id: "1",
    fullName: "Shirt",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LW1EU0S_064717_1?wid=1800&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "2",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },

  {
    id: "4",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
];
function Cart() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userCart, setUserCart] = useState([]);
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: Math.max(0, newQuantity) };
      }
      return item;
    });
    setItems(updatedItems);
  };

  useEffect(() => {
    const newSubtotal = items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setSubtotal(newSubtotal);
  }, [items]);

  //fetch current user
  useEffect(() => {
    fetch("https://dummyjson.com/auth/users", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.text())
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setCurrentUser(null);
      });
  }, []);

  //fetch current user's cart
  useEffect(() => {
    const fetchUserCart = async () => {
      if (currentUser) {
        try {
          const response = await fetch(
            `https://dummyjson.com/auth/users&username=${currentUser}`,
            {
              method: "GET",
              credentials: "include",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const cart = await response.json();
          setUserCart(cart || []);
        } catch (error) {
          console.error("Failed to fetch user cart", error);
        }
      }
    };
    fetchUserCart();
  }, [currentUser]);

  //fetch item details based on item id in  user's cart
  useEffect(() => {
    if (userCart.length > 0) {
      const promises = userCart.map((itemId) =>
        fetch(`https://example.com/api/items/${itemId}`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }).then((response) => response.json())
      );

      Promise.all(promises)
        .then((itemsDetails) => {
          setItems(itemsDetails);
        })
        .catch((error) => {
          console.error("Error fetching items details:", error);
        });
    }
  }, [userCart]);

  //for displaying purpose
  useEffect(() => {
    setItems(mockData);
  }, []);

  return (
    <div>
      <Header />
      <div className="cart-page">
        <div className="cart-items">
          <h2>My Shopping Bag</h2>
          <div className="cart-details">
            {items
              .filter((item) => item.quantity > 0)
              .map((item) => (
                <div className="product-details" key={item.id}>
                  <img src={item.images_url} alt={item.fullname} />
                  <h2>{item.fullName}</h2>
                  <p className="price">${item.price}</p>
                  <div className="size-and-quantity">
                    <select>
                      {item.sizes.map((size) => (
                        <option key={size} value={size.toLowerCase()}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <div className="quantity-selector">
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        type="button"
                        class="btn btn-outline-dark"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="checkout-details">
          <h3>Subtotal</h3>
          <p>${subtotal.toFixed(2)} + Shipping</p>
          <p>Shipping Calculated in the next step</p>
          <h3>Total</h3>
          <p>${subtotal.toFixed(2)}</p>

          <button>GO TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

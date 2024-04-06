import "./Search.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { DownCircleFilled, UpCircleFilled } from "@ant-design/icons";

//import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.min.css";

const mockData = [
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
    id: "1",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "3",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
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
  {
    id: "5",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "6",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "7",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "8",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "9",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  //   const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userCart, setUserCart] = useState([]);
  let query = useQuery();
  const [searchResults, setSearchResults] = useState([]);
  const [itemIndex, setItemIndex] = useState(0);
  const itemsPerPage = 8;

  // Handlers for next and previous buttons
  const goToNextPage = () => {
    setItemIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const goToPreviousPage = () => {
    setItemIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  //fetch search reuslts
  useEffect(() => {
    const name = query.get("name");
    const categories = query.get("categories");
    const queryParams = new URLSearchParams();
    if (name) queryParams.append("name", name);
    if (categories) queryParams.append("categories", categories);
    fetch(`https://dummyjson.com/search?${queryParams.toString()}`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => setSearchResults(data))
      .catch((error) => {
        console.error("Error:", error);
        //for mocking purpose
        setSearchResults(mockData);
      });
  }, [query]);

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

  return (
    <div>
      <Header />
      <div className="recommendation-container ">
        <h2>Showing your search results</h2>
        <div className="recommendation-results">
          {itemIndex > 0 && (
            <UpCircleFilled
              onClick={goToPreviousPage}
              style={{ fontSize: "64px" }}
            />
          )}
          <ItemList
            items={searchResults.map((item) => ({
              ...item,
              inCart: userCart.includes(item.id),
            }))}
            itemIndex={itemIndex}
            itemsPerPage={itemsPerPage}
            currentUser={currentUser}
            setUserCart={setUserCart}
            userCart={userCart}
            layout="search"
          />
          <DownCircleFilled
            onClick={goToNextPage}
            style={{ fontSize: "64px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;

import "./Home.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { RightCircleFilled, LeftCircleFilled } from "@ant-design/icons";
//import Button from "react-bootstrap/Button";
//import "bootstrap/dist/css/bootstrap.min.css";

const key = "zAU4RYdbLdkC6aM98RBnYuu2mEP3THiadaGz3LTe";
const womensMockData = [
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
    id: "2",
    fullName: "Cream Blouse",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/RS24-034TA-C_RS24-816SK-BL_1.jpg?v=1697040846&width=2700",
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
    fullName: "Pant",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/AW23-132T-C-1.jpg?v=1708017277&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "5",
    fullName: "Pant",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/AW23-132T-C-1.jpg?v=1708017277&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "6",
    fullName: "Pant",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/AW23-132T-C-1.jpg?v=1708017277&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "7",
    fullName: "Pant",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/AW23-132T-C-1.jpg?v=1708017277&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "8",
    fullName: "Pant",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/AW23-132T-C-1.jpg?v=1708017277&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "9",
    fullName: "Pant",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/AW23-132T-C-1.jpg?v=1708017277&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "10",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "11",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "12",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "13",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "14",
    fullName: "Black Knit Top",
    images_url:
      "https://us.self-portrait.com/cdn/shop/files/SS24-212T-B_SS24-808P-B_1.jpg?v=1710323835&width=2700",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
];

const mensMockData = [
  {
    id: "6",
    fullName: "T-Shirt",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LM3FBSS_0002_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "7",
    fullName: "Long-Sleeve Shirt",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LM3FBTS_031382_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "8",
    fullName: "Relaxed Shirt",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LM3ER6S_038470_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "9",
    fullName: "Red Shirt",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LM3ER6S_033142_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 350,
  },
  {
    id: "10",
    fullName: "Jogger",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LM5AVSS_8206_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
];

const kidsMockData = [
  {
    id: "11",
    fullName: "Pant",
    images_url:
      "https://target.scene7.com/is/image/Target/GUEST_6b32381a-58aa-481e-ab54-478c75d557f6?wid=1200&hei=1200&qlt=80&fmt=webp",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "12",
    fullName: "Pant",
    images_url:
      "https://target.scene7.com/is/image/Target/GUEST_6b32381a-58aa-481e-ab54-478c75d557f6?wid=1200&hei=1200&qlt=80&fmt=webp",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "13",
    fullName: "Pant",
    images_url:
      "https://target.scene7.com/is/image/Target/GUEST_6b32381a-58aa-481e-ab54-478c75d557f6?wid=1200&hei=1200&qlt=80&fmt=webp",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "14",
    fullName: "Pant",
    images_url:
      "https://target.scene7.com/is/image/Target/GUEST_6b32381a-58aa-481e-ab54-478c75d557f6?wid=1200&hei=1200&qlt=80&fmt=webp",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "15",
    fullName: "Pant",
    images_url:
      "https://target.scene7.com/is/image/Target/GUEST_6b32381a-58aa-481e-ab54-478c75d557f6?wid=1200&hei=1200&qlt=80&fmt=webp",
    inCart: "False",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
];
const othersMockData = [
  {
    id: "16",
    fullName: "Bag",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LU9BSDS_064803_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "17",
    fullName: "Belt Bag",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LU9AX2S_056852_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "18",
    fullName: "Bottle",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LU9ALBS_0001_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "19",
    fullName: "Belt Bag",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LU9AX2S_056852_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
  {
    id: "20",
    fullName: "Belt Bag",
    images_url:
      "https://images.lululemon.com/is/image/lululemon/LU9AX2S_056852_1?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    inCart: "True",
    price: 360,
    quantity: 1,
    sizes: ["S", "M", "L"],
  },
];
function Home() {
  //   const [items, setItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userCart, setUserCart] = useState(["1"]);
  const [womensBestsellers, setWomensBestsellers] = useState([]);
  const [mensBestsellers, setMensBestsellers] = useState([]);
  const [kidsBestsellers, setKidsBestsellers] = useState([]);
  const [otherBestsellers, setOtherBestsellers] = useState([]);
  const [itemIndex, setItemIndex] = useState(0);
  const categories = [
    { title: "Women's Bestsellers", items: womensBestsellers },
    { title: "Men's Bestsellers", items: mensBestsellers },
    { title: "Kid's Bestsellers", items: kidsBestsellers },
    { title: "Other Bestsellers", items: otherBestsellers },
  ];
  const itemsPerPage = 4;
  const initialCategoryIndexes = categories.reduce(
    (acc, category) => ({
      ...acc,
      [category.title]: 0, // Initialize each category's index to 0
    }),
    {}
  );

  const [categoryIndexes, setCategoryIndexes] = useState(
    initialCategoryIndexes
  );

  const goToNextPage = (categoryTitle) => {
    setCategoryIndexes((prevIndexes) => ({
      ...prevIndexes,
      [categoryTitle]: prevIndexes[categoryTitle] + itemsPerPage,
    }));
  };

  const goToPreviousPage = (categoryTitle) => {
    setCategoryIndexes((prevIndexes) => ({
      ...prevIndexes,
      [categoryTitle]: Math.max(prevIndexes[categoryTitle] - itemsPerPage, 0),
    }));
  };
  //fetch recommendation items
  useEffect(() => {
    const categories = ["women", "men", "kids", "others"];

    categories.forEach((category) => {
      fetch(`https://dummyjson.com/products/search?q=${category}&limit=5`)
        .then((response) => response.json())
        .then((data) => {
          switch (category) {
            case "women":
              setWomensBestsellers(womensMockData);
              break;
            case "men":
              setMensBestsellers(mensMockData);
              break;
            case "kids":
              setKidsBestsellers(kidsMockData);
              break;
            case "others":
              setOtherBestsellers(othersMockData);
              break;
            default:
              console.log(`Unknown category: ${category}`);
          }
        })
        .catch((error) =>
          console.error(`Failed to fetch ${category} bestsellers`, error)
        );
    });
  }, []);

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
      <div className="recommendation-container">
        <h2>What's New</h2>
        <div>
          {categories.map((category) => (
            <div className="recommendation-results" key={category.title}>
              <h3>{category.title}</h3>
              <div className="recommendation-details">
                <div
                  className="circle-button"
                  onClick={() => goToPreviousPage(category.title)}
                >
                  <LeftCircleFilled
                    style={{
                      fontSize: "64px",
                      visibility:
                        categoryIndexes[category.title] > 0
                          ? `visible`
                          : `hidden`,
                    }}
                  />
                </div>
                <ItemList
                  items={category.items.map((item) => ({
                    ...item,
                    inCart: userCart.includes(item.id),
                  }))}
                  itemIndex={categoryIndexes[category.title]}
                  itemsPerPage={itemsPerPage}
                  currentUser={currentUser}
                  setUserCart={setUserCart}
                  userCart={userCart}
                  layout="home"
                />
                <div
                  className="circle-button"
                  onClick={() => goToNextPage(category.title)}
                >
                  {categoryIndexes[category.title] + itemsPerPage <
                    category.items.length && (
                    <RightCircleFilled style={{ fontSize: "64px" }} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

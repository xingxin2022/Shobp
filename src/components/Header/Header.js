import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState("Name");
  const [productName, setProductName] = useState("name");
  const [categories, setCategories] = useState({
    Women: false,
    Men: false,
    Kids: false,
    Accessories: false,
  });

  const navigateToSearch = () => navigate("/search");
  const navigateToHome = () => navigate("/");
  const navigateToCart = () => navigate("/cart");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchType === "Name") {
      navigate(`/search?name=${encodeURIComponent(productName)}`);
    } else {
      const selectedCategories = Object.entries(categories)
        .filter(([_, isSelected]) => isSelected)
        .map(([category]) => category)
        .join(",");
      navigate(`/search?categories=${encodeURIComponent(selectedCategories)}`);
    }
  };
  const handleCategoryChange = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" onClick={navigateToHome}>
          Shobp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                onClick={navigateToHome}
              >
                Home
              </a>
            </li>
          </ul>
          {/* <span class="navbar-text">Navbar text with an inline element</span> */}
          <div className="d-flex align-items-center">
            <select
              className="form-select me-3"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="Name">Search By Name</option>
              <option value="Category">Search By Category</option>
            </select>

            {searchType === "Name" ? (
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setProductName(e.target.value)}
              />
            ) : (
              <div className="me-2 btn-group">
                {Object.keys(categories).map((category) => (
                  <div
                    className="btn form-check form-check-inline"
                    key={category}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={category}
                      checked={categories[category]}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label className="form-check-label" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              class=" btn btn-light"
              onClick={handleSearchSubmit}
            >
              Search
            </button>
          </div>
          <div className="navbar-nav">
            <a className="nav-link" href="#" onClick={navigateToCart}>
              My Cart
            </a>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="navbar d-flex justify-content-between navbar-expand-lg bg-body-tertiary fixed-top">
    //   <div className="container-fluid ">
    //     <a className="navbar-brand" href="#">
    //       Shobp
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavAltMarkup"
    //       aria-controls="navbarNavAltMarkup"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
    //       <div className="navbar-nav align-center">
    //         <a
    //           className="nav-link active"
    //           aria-current="page"
    //           href="#"
    //           onClick={navigateToHome}
    //         >
    //           Home
    //         </a>
    //         <div className="d-flex align-items-center">
    //           <select
    //             className="form-select me-3"
    //             value={searchType}
    //             onChange={(e) => setSearchType(e.target.value)}
    //           >
    //             <option value="Name">Search By Name</option>
    //             <option value="Category">Search By Category</option>
    //           </select>

    //           {searchType === "Name" ? (
    //             <input
    //               type="search"
    //               className="form-control"
    //               placeholder="Search"
    //               aria-label="Search"
    //               onChange={(e) => setProductName(e.target.value)}
    //             />
    //           ) : (
    //             <div className="me-2 btn-group">
    //               {Object.keys(categories).map((category) => (
    //                 <div
    //                   className="btn form-check form-check-inline"
    //                   key={category}
    //                 >
    //                   <input
    //                     className="form-check-input"
    //                     type="checkbox"
    //                     id={category}
    //                     checked={categories[category]}
    //                     onChange={() => handleCategoryChange(category)}
    //                   />
    //                   <label className="form-check-label" htmlFor={category}>
    //                     {category}
    //                   </label>
    //                 </div>
    //               ))}
    //             </div>
    //           )}

    //           <button
    //             type="button"
    //             class=" btn btn-primary"
    //             onClick={handleSearchSubmit}
    //           >
    //             Search
    //           </button>
    //         </div>
    //         <div className="navbar-nav">
    //           <a className="nav-link" href="#" onClick={navigateToCart}>
    //             Cart
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;

import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Poducts.js/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input Filter
  const [query, setQuery] = useState("");
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filtredItems = products.filter(product =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  //Radio Filter
  const handleChange = event => {
    setSelectedCategory(event.target.value);
  }

  //Buttons Filter
  const handleClick = event => {
    setSelectedCategory(event.target.value);
  }

  
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;

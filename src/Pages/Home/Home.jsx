import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import AppDownload from "../../components/App Download/AppDownload";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
        <ProductDisplay category={category} />
        <AppDownload />
      </div>
    </>
  );
};

export default Home;

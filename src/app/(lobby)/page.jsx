import React from "react";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import Products from "../../components/Products";

const page = () => {
  return (
    <main>
      <Hero />
      <div className="max-w-7xl mx-auto">
        <Categories />
        <Products />
      </div>
    </main>
  );
};

export default page;

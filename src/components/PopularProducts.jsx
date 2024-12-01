import ProductCard from "@/components/card/ProductCard";

const products = [
  { id: 1, name: "New" },
  { id: 2, name: "New" },
  { id: 3, name: "New" },
  { id: 4, name: "New" },
  { id: 5, name: "New" },
  { id: 6, name: "New" },
];

const PopularProducts = async () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default PopularProducts;

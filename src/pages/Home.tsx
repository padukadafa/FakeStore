import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export const Home = () => {
  const { products, error } = useProducts();

  return (
    <div>
      <div className="bg-[#d4e33f] grid grid-cols-1 md:grid-cols-2 min-h-[60vh] items-center px-6 md:px-20 py-10">
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-wide">
            BLACK PHANTOM
          </h2>
          <p className="mt-2 text-gray-700">
            Air Jordan 1 Retro Low OG x Travis Scott
          </p>
          <Link to={"/products"}>
            <Button className="mt-4">Shop Now</Button>
          </Link>
        </div>
        <img
          src="https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Black-Phantom-Product.jpg"
          alt="Black Phantom"
          className="max-h-[250px] mx-auto"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">Latest Drops</h3>
        {error && <p className="text-red-500">{error}</p>}
        <div className="overflow-x-auto">
          <div className="flex gap-4">
            {products.map((p) => (
              <div key={p.id} className="min-w-[200px]">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

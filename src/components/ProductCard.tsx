import { motion } from "framer-motion";
import { Product } from "../context/CartContext";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }: { product: Product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast(`${product.title} has been added to your cart.`);
  };

  return (
    <motion.div
      className="border bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition text-center"
      whileHover={{ scale: 1.02 }}
    >
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain"
        />
        <h3 className="mt-2 font-medium text-sm line-clamp-2 min-h-[48px]">
          {product.title}
        </h3>
        <p className="text-sm font-semibold mt-1">FROM ${product.price} USD</p>
      </Link>
      <Button className="mt-2 w-full" size="sm" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </motion.div>
  );
};

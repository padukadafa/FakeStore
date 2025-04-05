import { useEffect, useState } from "react";
import { Product } from "../context/CartContext";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        const products = await res.json();
        console.log(products);
        return products;
      })
      .then(setProducts)
      .catch((err) => setError(err.message));
  }, []);

  return { products, error };
};

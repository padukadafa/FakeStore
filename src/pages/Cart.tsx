import { toast } from "sonner";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, dispatch } = useCart();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="h-16" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>${item.price}</p>
              </div>
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id });
                toast(`${item.title} has been removed from your cart.`);
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
  };

  return (
    <nav className="w-full shadow-sm border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="font-bold text-xl">FakeStore</h1>
          <div className="hidden md:flex gap-4 text-sm">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <form onSubmit={handleSearch} className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Find Your Pair"
            className="hidden md:block w-[200px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" variant="default" size="sm">
            Search
          </Button>
        </form>
      </div>
    </nav>
  );
};

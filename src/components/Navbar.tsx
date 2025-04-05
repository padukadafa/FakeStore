import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full shadow-sm border-b sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-xl">FakeStore</h1>
          <div className="hidden md:flex gap-4 text-sm">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-4"
        >
          <Input
            type="text"
            placeholder="Find Your Pair"
            className="w-[200px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit" size="sm">
            Search
          </Button>
          <Button variant="default" size="sm">
            Login/Register
          </Button>
        </form>
      </div>

      {/* Dropdown menu for mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4">
          <div className="flex flex-col gap-3 text-sm mb-4">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </div>
          <form onSubmit={handleSearch} className="flex flex-col gap-2">
            <Input
              type="text"
              placeholder="Find Your Pair"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" size="sm">
              Search
            </Button>
          </form>
        </div>
      )}
    </nav>
  );
};

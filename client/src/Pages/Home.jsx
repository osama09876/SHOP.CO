import { useState } from "react";
import { Range } from "react-range";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

// Sample product data with ratings
const productsData = [
  {
    id: 1,
    name: "Product 1",
    price: 1500,
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2500,
    rating: 3,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3500,
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product 4",
    price: 5500,
    rating: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Product 5",
    price: 7500,
    rating: 4,
    image: "https://via.placeholder.com/150",
  },
];

// Set minimum and maximum price in PKR
const MIN_PRICE = 500;
const MAX_PRICE = 10000;

const ProductListing = () => {
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [products, setProducts] = useState(productsData); // Make the products stateful for updating ratings

  // Filter products based on price range
  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // Function to handle user rating click
  const handleRating = (productId, newRating) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, rating: newRating };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  // Function to render stars and allow user to click to rate
  const renderStars = (productId, rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-5 w-5 cursor-pointer ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          onClick={() => handleRating(productId, i)} // Handle click to set rating
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto py-10 mt-10">
      {/* Page Header */}
      <div className="w-full px-4 pb-2 md:hidden block  ">
        <input
          type="text"
          className="w-full h-16 px-3 border border-black rounded-2xl"
          placeholder="search"
        />
      </div>
      <div className="flex justify-between items-center mb-8 px-2">
        <h1 className="text-3xl font-bold">Products</h1>
        <span className="text-lg">
          Showing {filteredProducts.length} products
        </span>
      </div>

      <div className="flex">
        {/* Sidebar Filter */}
        <div className="md:w-1/4 w-2/4 p-5 border-r">
          <h2 className="text-xl font-semibold mb-4">Filter by Price (PKR)</h2>

          {/* Price Range Slider */}
          <div className="mb-6">
            <Range
              step={100}
              min={MIN_PRICE}
              max={MAX_PRICE}
              values={priceRange}
              onChange={(range) => setPriceRange(range)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="w-full h-1 bg-gray-200 rounded-full"
                  style={{ background: "#ddd" }}
                >
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${(priceRange[1] / MAX_PRICE) * 100}%` }}
                  />
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer focus:outline-none"
                />
              )}
            />
            <div className="flex justify-between mt-2">
              <span>₨{priceRange[0]}</span>
              <span>₨{priceRange[1]}</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl">Category</h1>
            <h4 className="py-1 px-2">Mens</h4>
            <h4 className="py-1 px-2">Womens</h4>
            <h4 className="py-1 px-2">Kids</h4>
            <h4 className="py-1 px-2">Mens</h4>
            <hr />
            <h4 className="py-1 px-2">Boys</h4>
            <h4 className="py-1 px-2">Girls</h4>
            <h4 className="py-1 px-2">Accesseries</h4>
            <h4 className="py-1 px-2">Jewellery</h4>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:w-3/4 w-2/4 p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg flex flex-col items-center"
              >
                <Link to={`/product-detail/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-60 h-40 object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-2 pl-4  ">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mb-1 pl-4  ">Category</p>
                  <p className="text-gray-500 mb-1 pl-4  ">₨{product.price}</p>

                  {/* Rating */}
                  <div className="flex pl-4 py-2">
                    {renderStars(product.id, product.rating)}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

import { useState } from "react";
import { Star } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const images = [
    "https://via.placeholder.com/500?text=Image+1",
    "https://via.placeholder.com/500?text=Image+2",
    "https://via.placeholder.com/500?text=Image+3",
    "https://via.placeholder.com/500?text=Image+4",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(4.5);
  const { id } = useParams();

  const handleQuantityChange = (action) => {
    setQuantity((prevQuantity) =>
      action === "increase"
        ? prevQuantity + 1
        : prevQuantity - 1 >= 1
        ? prevQuantity - 1
        : 1
    );
  };

  return (
    <div className="container mx-auto py-10 mt-10">
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        {/* Left - Product Images */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center">
            {/* Main Image with Zoom */}
            <div className="border border-gray-200 p-2 rounded-lg mb-4">
              <TransformWrapper>
                <TransformComponent>
                  <img
                    src={selectedImage}
                    alt="Product"
                    className="w-96 h-96 object-cover cursor-zoom-in"
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 p-2 rounded-lg cursor-pointer ${
                    selectedImage === image ? "border-blue-500" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="w-16 h-16 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Product Details */}
        <div className="w-full md:w-1/2 px-3">
          <h1 className="text-4xl font-bold mb-4">Product { id}</h1>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-500">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    rating >= star ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-500">({rating} / 5)</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-red-500 mb-4">₨ 3500</div>

          {/* Product Description */}
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut
            dui dolor. Integer sit amet libero at libero fringilla vestibulum.
            In condimentum magna eget orci auctor vehicula.
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="text-lg font-semibold mr-4">Quantity:</span>
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-5 py-2 border-t border-b border-gray-300">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-200"
            >
              +
            </button>
          </div>

          {/* Add to Cart and Buy Now Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600">
              Buy Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-gray-500">
            <p>Free shipping on orders over ₨ 5000</p>
            <p>30-day return policy</p>
            <p>Secure payment methods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="w-full lg:w-2/3">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-5 border-b border-gray-200"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-xl font-medium">{item.name}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-3 py-1 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-3 py-1 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">Your cart is empty.</p>
            )}
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between py-2">
              <p className="text-gray-600">Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-gray-600">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between py-2 font-semibold text-lg">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 mt-4 rounded-lg hover:bg-indigo-700 transition duration-200">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

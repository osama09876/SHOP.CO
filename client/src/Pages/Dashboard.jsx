// import  { useState } from "react";
// import { Line, Pie } from "react-chartjs-2";
// import { IoIosAddCircle, IoIosArrowDown } from "react-icons/io";
// import { IoClose } from "react-icons/io5";

import { ChevronDown, Layers3, LayoutDashboardIcon, Logs, ShoppingCart, User2 } from "lucide-react";
import { RiMenuFold3Line2 } from "react-icons/ri";
// import { TbCategory } from "react-icons/tb";

const AdminDashboard = () => {
  // const [selectedImages, setSelectedImages] = useState([]);

  // const chartData = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //   datasets: [
  //     {
  //       label: "Total Sales",
  //       data: [12000, 19000, 30000, 50000, 60000, 70000],
  //       fill: true,
  //       backgroundColor: "rgba(75,192,192,0.2)",
  //       borderColor: "rgba(75,192,192,1)",
  //     },
  //   ],
  // };

  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setSelectedImages([
  //     ...selectedImages,
  //     ...files.slice(0, 4 - selectedImages.length),
  //   ]);
  // };

  // const handleRemoveImage = (index) => {
  //   setSelectedImages(selectedImages.filter((_, i) => i !== index));
  // };

  // Adding categories functionality (example for categories management)

  return (
    <div className="w-full min-h-screen bg-red-600">
      {/* <div className="mb-3">
              <label className="block mb-2">Upload Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500"
              />
              <div className="flex mt-4 space-x-4">
                {selectedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Selected"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <IoClose
                      className="absolute top-0 right-0 text-white bg-red-500 rounded-full p-1 cursor-pointer"
                      onClick={() => handleRemoveImage(index)}
                    />
                  </div>
                ))}
              </div> */}

      {/* Orders */}
      <div className="w-1/5 bg-white min-h-screen px-6 pt-20 flex flex-col  gap-3">
        <div className="w-full h-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">SHOP</span>.CO
          </h1>
          <RiMenuFold3Line2 className="size-6" />
        </div>
        <hr />
        <div className="flex flex-col gap-7">
          <div className="flex gap-1 items-center hover:text-blue-600">
            <LayoutDashboardIcon />
            <h1>DashBoard</h1>
          </div>
          <div className="flex gap-1 items-center justify-between hover:text-blue-600">
            <div className="flex gap-1 items-center">
              <ShoppingCart />
              <h1>Ecommerce</h1>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between hover:text-blue-600">
            <div className="flex gap-1 items-center">
              <Layers3/>
              <h1>Category</h1>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between hover:text-blue-600">
            <div className="flex gap-1 items-center">
              <Logs />
              <h1>Orders</h1>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between hover:text-blue-600">
            <div className="flex gap-1 items-center">
              <User2 />
              <h1>Users</h1>
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

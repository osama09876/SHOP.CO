import { useState } from "react";
// import { IoIosArrowDown } from "react.-icons/io";
import { IoClose, IoSearch } from "react-icons/io5";
import {
  CreditCard,
  LifeBuoy,
  LogIn,
  LogOut,
  MenuIcon,
  Settings,
  ShoppingCart,
  User,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AvatarIcon } from "@radix-ui/react-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "@/redux/authSlice";
import Alert from "./Alert";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [showSearchBar, setShowSearchBar] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
  const isLogin = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLogout());
  };

  const handleCartClick = () => {
    if (!isLogin) {
      setShowAlert(true); // Show alert if not logged in
    }
  };

  return (
    <>
      <nav className="w-full flex md:justify-evenly justify-between items-center py-3 fixed top-0 bg-white px-5">
        <div className="flex items-center gap-2">
          {toggle ? (
            <IoClose
              className="md:hidden flex size-7"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />
          ) : (
            <MenuIcon
              className="md:hidden flex"
              onClick={() => setToggle((prev) => !prev)}
            />
          )}
          <div className="uppercase font-bold text-2xl">
            <Link to="/">Shop.Co</Link>
          </div>
        </div>
        <ul className="gap-10 items-center md:flex hidden">
          <li>
            <Link to="/" className="flex items-center gap-1">
              Shop
            </Link>
          </li>
          <li>
            <a href="">On Sale</a>
          </li>
          <li>
            <a href="">New Arrivals</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
          <div className="relative border px-3 rounded-full">
            <IoSearch className="text-gray-400 absolute top-3" />
            <input
              type="text"
              className="w-96 h-10 pl-7 text-sm font-light focus:outline-none"
              placeholder="Search for products"
            />
          </div>
        </ul>
        <div className="icons flex gap-4 text-xl items-center">
          <div
            className="relative"
            onClick={handleCartClick} // Use the handler
          >
            <Link to={isLogin ? "/cart" : "#"}>
              {" "}
              {/* Conditional link */}
              <ShoppingCart />
              <p className="text-xs text-red-700 font-bold absolute top-[-10px] right-[-5px]">
                0
              </p>
            </Link>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <AvatarIcon className="size-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {isLogin ? (
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <div onClick={() => logout()}>
                    <Link to={"/"}>Log out</Link>
                  </div>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem>
                  <LogIn className="mr-2 h-4 w-4" />
                  <Link to="/login">Login</Link>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {toggle && (
        <div className="w-full h-screen md:hidden flex flex-col justify-center transition ease-in-out duration-500 px-5">
          <div>
            <ul className="gap-10 items-center flex flex-col">
              <li>
                <a href="" className="flex items-center gap-1">
                  Shop
                </a>
              </li>
              <li>
                <a href="">On Sale</a>
              </li>
              <li>
                <a href="">New Arrivals</a>
              </li>
              <li>
                <a href="">Brands</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {showAlert && ( // Render Alert based on the alert state
        <Alert
          message="You need to log in first!"
          onClose={() => setShowAlert(false)}
          bgColor={"bg-red-500"}
          progressColor={"bg-red-600"}
        />
      )}
    </>
  );
};

export default Navbar;

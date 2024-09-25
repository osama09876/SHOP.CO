import { useState } from "react";
import login from "../assets/login.png";
import { userLogin } from "../redux/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLoggedIn);

  const submitHanddler = (e) => {
    e.preventDefault();
    dispatch(userLogin());
    setEmail("");
    setPassword("");
    console.log("login successful");

    // redirect to dashboard
  };
  console.log(isLogin);
  return (
    <div className="w-[70%] h-[80vh] shadow-lg bg-white rounded-3xl border mx-auto my-20 z-50 flex flex-wrap">
      <div className="md:w-[50%] w-full flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-semibold">Welcome Back</h1>
        <h1>Manage your shop efficiently on SHOP.CO</h1>
        <img src={login} alt="" className="w-40" />
      </div>
      <div className="md:w-[50%] w-full  flex justify-center items-center">
        <div className="w-[80%]">
          <h1 className="text-2xl text-center py-5">login</h1>
          <form onSubmit={submitHanddler}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-transparent my-2  focus:outline-none border-b-2"
              placeholder="email"
              required={true}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-transparent my-2  focus:outline-none border-b-2"
              placeholder="password"
              required={true}
            />
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="flex justify-between py-2">
              <Link to="/forgot-password" className="text-sm text-gray-600">
                Forgot password?
              </Link>
              <Link to="/register" className="text-sm text-blue-500">
                Create an account
              </Link>
            </div>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600"
            >
              <Link to={"/"}>Login</Link>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

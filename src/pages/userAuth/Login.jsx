import React from "react";
import { useState } from "react";
import { Header } from "../../components/index";
import { authActionsConstants } from "../../reducer/authActionsConstant";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";

export const Login = () => {
  const { authDispatch } = useAuthContext();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const postLoginData = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/auth/login`, {
        email: userInfo.email,
        password: userInfo.password,
      });

      localStorage.setItem("token", data.encodedToken);
      localStorage.setItem("firstName", data.foundUser.firstName);

      authDispatch({
        type: authActionsConstants.GET_USER_DETAILS,
        payload: data.user,
      });
      navigate("/home");
    } catch (error) {
      authDispatch({
        type: authActionsConstants.USER_LOGIN_FAILURE,
        payload: `Invalid email or password, please signup if you dont have an ccount ${error.message}`,
      });
    }
  };

  return (
    <main className="main-container">
      <div className="form-container">
        <h4 className="secondary-text-color  text-center">LOG IN</h4>
        <div className="title-underline"></div>

        <form className="form-col">
          <div className="row">
            <input
              className="form-field"
              type="email"
              placeholder="Enter your email here"
              name="email"
              required
              onChange={onChangeHandler}
            />
          </div>

          <div className="row">
            <input
              className="form-field"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              onChange={onChangeHandler}
            />
          </div>
          <a href="" className="link-btn my-8">
            Forgot password?
          </a>
          <button
            className="btn primary-btn text-center"
            type="submit"
            onClick={postLoginData}
          >
            LOGIN
          </button>

          <div className="py-16">
            Not a user yet?
            <Link to="/signup" className="link-btn">
              Create your account
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

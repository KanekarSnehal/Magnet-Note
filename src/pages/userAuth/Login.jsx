import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context";
import axios from "axios";
import toast from "react-hot-toast";

export function Login() {
  const { authState, setAuthState } = useAuthContext();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const postLoginData = async (e) => {
    e.preventDefault();
    if (userInfo.email.length === 0 || userInfo.password.length === 0) {
      setLoginError("Email or/and password cannot be empty");
      return;
    }
    try {
      setAuthState({
        ...authState,
        loading: true,
      });
      const { data } = await axios.post(`/api/auth/login`, {
        email: userInfo.email,
        password: userInfo.password,
      });
      localStorage.setItem("magnetNoteToken", data.encodedToken);
      localStorage.setItem("magnetNoteUser", data.foundUser);
      setAuthState({
        ...authState,
        authToken: data.encodedToken,
        authUser: data.foundUser,
        loading: false,
      });
      navigate("/home");
      toast.success(`Welcome back, ${data.foundUser.firstName}`);
    } catch (e) {
      setLoginError(
        `Please signup if you don't have an account, ${e?.response?.data?.errors[0]}`
      );
      toast.error(e?.response?.data?.errors[0]);
    }
  };
  const handleTestLogin = async (e) => {
    e.preventDefault();
    try {
      setAuthState({
        ...authState,
        loading: false,
      });
      const { data } = await axios.post(`/api/auth/login`, {
        email: "karenbrewer12@gmail.com",
        password: "karen@123",
      });
      localStorage.setItem("magnetNoteToken", data.encodedToken);
      localStorage.setItem("magnetNoteUser", JSON.stringify(data.foundUser));
      setAuthState({
        ...authState,
        authToken: data.encodedToken,
        authUser: data.foundUser,
        loading: false,
      });
      navigate("/home");
      toast.success(`Welcome back, ${data.foundUser.firstName}`);
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };

  return (
    <>
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
                onChange={onChangeHandler}
                onFocus={() => setLoginError(null)}
                required
              />
            </div>

            <div className="row">
              <input
                className="form-field"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={onChangeHandler}
                onFocus={() => setLoginError(null)}
                required
              />
            </div>
            <button
              className="btn outline-primary-btn text-center"
              type="submit"
              onClick={handleTestLogin}
            >
              LOGIN WITH TEST CREDENTIALS
            </button>
            <button
              className="btn primary-btn text-center"
              type="submit"
              onClick={postLoginData}
            >
              LOGIN
            </button>
            {loginError && (
              <div className="form-validation-msg">
                <span>
                  <i className="fas fa-exclamation-circle mx-8"></i>
                </span>
                {loginError}
              </div>
            )}

            <div className="py-16">
              Not a user yet?
              <Link to="/signup" className="link-btn">
                Create your account
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

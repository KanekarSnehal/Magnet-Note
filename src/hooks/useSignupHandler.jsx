import { useState, useReducer } from "react";
import axios from "axios";
import { useAuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignupHandler = () => {
  const { authState, setAuthState } = useAuthContext();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const postSignupData = async () => {
    const { firstName, lastName, email, password, confirmPassword } = userInfo;
    try {
      setAuthState({
        ...authState,
        loading: true,
      });
      const { data } = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      localStorage.setItem("magnetNoteToken", data.encodedToken);

      localStorage.setItem(
        "magnetNoteUser",
        JSON.stringify({
          firstName: data.createdUser.firstName,
          lastName: data.createdUser.lastName,
          email: data.createdUser.email,
        })
      );

      setAuthState({
        ...authState,
        authToken: data.encodedToken,
        authUser: data.createdUser,
        loading: false,
      });

      navigate("/home");
      toast.success(`Welcome, ${data.createdUser.firstName}`);
    } catch (e) {
      toast.error(`Please try again, ${e?.response?.data?.message}`);
    }
  };

  const errorsInitialState = {
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
    firstnameError: "",
    lastnameError: "",
  };

  const errorReducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_FIRSTNAME_ERROR":
        return { ...state, firstnameError: payload };

      case "SET_LASTNAME_ERROR":
        return { ...state, lastnameError: payload };

      case "SET_EMAIL_ERROR":
        return { ...state, emailError: payload };

      case "SET_PASSWORD_ERROR":
        return { ...state, passwordError: payload };

      case "SET_RE_PASSWORD_ERROR":
        return { ...state, confirmPasswordError: payload };

      case "CLEAR_ERRORS_ERROR":
        return { errorsInitialState };

      default:
        return state;
    }
  };

  const [fieldErrors, errorsDispatch] = useReducer(
    errorReducer,
    errorsInitialState
  );

  const onFocusClearError = (type) => {
    errorsDispatch({ type, payload: "" });
  };

  const checkFormValidity = () => {
    let error = false;
    if (
      userInfo.firstName === "" ||
      !/^[a-zA-Z]+(\s*\w*)*$/.test(userInfo.firstName)
    ) {
      errorsDispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "Please enter valid name",
      });
      error = true;
    }
    if (
      userInfo.lastName === "" ||
      !/^[a-zA-Z]+(\s*\w*)*$/.test(userInfo.lastName)
    ) {
      errorsDispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "Please enter valid surname",
      });
      error = true;
    }

    if (userInfo.email === "" || !/^.+@.+\.com$/.test(userInfo.email)) {
      errorsDispatch({
        type: "SET_EMAIL_ERROR",
        payload: "Please enter valid email id",
      });
      error = true;
    }

    if (
      userInfo.password === "" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(
        userInfo.password
      )
    ) {
      errorsDispatch({
        type: "SET_PASSWORD_ERROR",
        payload:
          "Password length should contain minimum 8 characters (at least one capital, small letter and number)",
      });
      error = true;
    }
    if (
      userInfo.confirmPassword === "" ||
      userInfo.password !== userInfo.confirmPassword
    ) {
      errorsDispatch({
        type: "SET_RE_PASSWORD_ERROR",
        payload: "Password does not match",
      });
      error = true;
    }
    return error;
  };

  const submitSignupForm = (e) => {
    e.preventDefault();
    if (!checkFormValidity()) {
      postSignupData();
    }
  };

  return {
    onChangeHandler,
    fieldErrors,
    errorsDispatch,
    onFocusClearError,
    submitSignupForm,
  };
};

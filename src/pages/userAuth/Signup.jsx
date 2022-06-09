import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import { useSignupHandler } from "../../hooks";
import { BiShow, BiHide } from "react-icons/bi";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { onChangeHandler, fieldErrors, onFocusClearError, submitSignupForm } =
    useSignupHandler();

  return (
    <>
      <main className="main-container">
        <div className="form-container">
          <h4 className="secondary-text-color  text-center">SIGN UP</h4>
          <div className="title-underline"></div>

          <form className="form-col">
            <div className="row">
              <div className="column-30-pc">
                <label
                  htmlFor="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  First Name
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  onChange={onChangeHandler}
                  onFocus={() => {
                    onFocusClearError("SET_FIRSTNAME_ERROR");
                  }}
                  required
                />
                {fieldErrors.firstnameError && (
                  <div className="form-validation-msg">
                    <span>
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                    {fieldErrors.firstnameError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  htmlFor="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Last Name
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="text"
                  placeholder="Enter your last name"
                  name="lastName"
                  onChange={onChangeHandler}
                  onFocus={() => {
                    onFocusClearError("SET_LASTNAME_ERROR");
                  }}
                  required
                />
                {fieldErrors.lastnameError && (
                  <div className="form-validation-msg">
                    <span>
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                    {fieldErrors.lastnameError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  htmlFor="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Email
                </label>
              </div>
              <div className="column-70-pc">
                <input
                  className="form-field"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={onChangeHandler}
                  onFocus={() => {
                    onFocusClearError("SET_EMAIL_ERROR");
                  }}
                  required
                />
                {fieldErrors.emailError && (
                  <div className="form-validation-msg">
                    <span>
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                    {fieldErrors.emailError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  htmlFor="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Password
                </label>
              </div>
              <div className="column-70-pc">
                <span className="input-with-eye-container">
                  <input
                    className="form-field"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    name="password"
                    onChange={onChangeHandler}
                    onFocus={() => {
                      onFocusClearError("SET_PASSWORD_ERROR");
                    }}
                    required
                  />
                  {showPassword ? (
                    <BiShow
                      className="eye-container"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <BiHide
                      className="eye-container"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </span>

                {fieldErrors.passwordError && (
                  <div className="form-validation-msg">
                    <span>
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                    {fieldErrors.passwordError}
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="column-30-pc">
                <label
                  htmlFor="first-name"
                  className="form-label text-bold-weight form-label-required-field"
                >
                  Confirm Password
                </label>
              </div>
              <div className="column-70-pc">
                <span className="input-with-eye-container">
                  <input
                    className="form-field"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-type password"
                    name="confirmPassword"
                    onChange={onChangeHandler}
                    onFocus={() => {
                      onFocusClearError("SET_RE_PASSWORD_ERROR");
                    }}
                    required
                  />
                  {showConfirmPassword ? (
                    <BiShow
                      className="eye-container"
                      onClick={() => setShowConfirmPassword(false)}
                    />
                  ) : (
                    <BiHide
                      className="eye-container"
                      onClick={() => setShowConfirmPassword(true)}
                    />
                  )}
                </span>

                {fieldErrors.confirmPasswordError && (
                  <div className="form-validation-msg">
                    <span>
                      <i className="fas fa-exclamation-circle"></i>
                    </span>
                    Password does not match
                  </div>
                )}
              </div>
            </div>

            <button
              className="btn primary-btn text-center"
              type="submit"
              onClick={submitSignupForm}
            >
              REGISTER
            </button>
            <div className="py-16">
              Already registered?
              <Link to="/login" className="link-btn">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

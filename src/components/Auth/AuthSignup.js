import { useRef } from "react";
import { useAuth } from "../../context";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateNumber,
} from "../../utils";
import "./Auth.css";

export const AuthSignup = () => {
  const { authState, authDispatch } = useAuth();

  const number = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmitClick = (e) => {
    const isValidNumber = validateNumber(number.current.value);
    const isValidName = validateName(username.current.value);
    const isValidEmail = validateEmail(email.current.value);
    const isValidPassword = validatePassword(password.current.value);
    const isValidConfirmPassword =
      password.current.value === confirmPassword.current.value;
    e.preventDefault();

    const data = {
      number: number.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };
    if (
      isValidNumber &&
      isValidName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      authDispatch({
        type: "ADD_USER_INFO",
        payload: data,
      });
    }

    // console.log(data);
    console.log({ authState });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmitClick}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>
          </label>
          <input
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter mobile number"
            required
            ref={number}
            // autoComplete="on"
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            type="text"
            className="auth-input"
            placeholder="Enter your name"
            required
            ref={username}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>
          </label>
          <input
            type="email"
            className="auth-input"
            placeholder="Enter email"
            required
            ref={email}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>
          </label>
          <input
            type="password"
            className="auth-input"
            placeholder="Enter password"
            required
            ref={password}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>
          </label>
          <input
            type="password"
            className="auth-input"
            placeholder="Re-enter password"
            required
            ref={confirmPassword}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

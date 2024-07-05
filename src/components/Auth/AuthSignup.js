import { useRef } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateNumber,
} from "../../utils";
import "./Auth.css";
import { signupHandler } from "../../services";
import { useDispatch } from "react-redux";
import { clearUserInfo, handleLogin } from "../../Redux/actions/authActions";

export const AuthSignup = () => {
  const dispatch = useDispatch();

  const number = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmitClick = (e) => {
    e.preventDefault();

    const data = {
      number: number.current.value,
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };

    dispatch(handleLogin());

    const isValidNumber = validateNumber(data.number);
    const isValidName = validateName(data.username);
    const isValidEmail = validateEmail(data.email);
    const isValidPassword = validatePassword(data.password);
    const isValidConfirmPassword =
      data.password.toString() === data.confirmPassword.toString();

    if (
      isValidNumber &&
      isValidName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      signupHandler(data.username, data.number, data.email, data.password);
      dispatch(clearUserInfo());
    }
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

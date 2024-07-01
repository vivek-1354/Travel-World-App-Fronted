import { useRef } from "react";
import "./Auth.css";
import { loginHandler } from "../../services";
import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../context";

export const AuthLogin = () => {
  const number = useRef();
  const password = useRef();

  const { authDispatch } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      number: number.current.value,
      password: password.current.value,
    };
    const isNumberValid = validateNumber(data.number);
    const isPasswordValid = validatePassword(data.password);
    if (isNumberValid && isPasswordValid) {
      loginHandler(data.number, data.password).then((res) => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("accessToken", res.data.accessToken);
        authDispatch({
          type: "SET_USER_NAME",
          payload: res.data.username,
        });
        authDispatch({
          type: "SET_ACCESS_TOKEN",
          payload: res.data.accessToken,
        });
        authDispatch({
          type: "OPEN_AUTH_MODAL",
        });
      });
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>
          </label>
          <input
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            ref={number}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>
          </label>
          <input
            type="password"
            className="auth-input"
            // maxLength="10"
            placeholder="Enter Password"
            required
            ref={password}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor-pointer">
            Login
          </button>
        </div>
      </form>
      <div className="cta">
        <button className="button btn-outline-primary btn-login cursor-pointer">
          Login as Guest
        </button>
      </div>
    </div>
  );
};

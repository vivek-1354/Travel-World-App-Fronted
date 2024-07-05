import { useRef } from "react";
import "./Auth.css";
import { loginHandler } from "../../services";
import { validateNumber, validatePassword } from "../../utils";
import { useDispatch } from "react-redux";
import {
  handleSingup,
  openAuthModal,
  setAccessToken,
  setUserName,
} from "../../Redux/actions/authActions";

export const AuthLogin = () => {
  const dispatch = useDispatch();
  const number = useRef(8210651798);
  const password = useRef("Viv@123");

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      number: number.current,
      password: password.current,
    };
    const isNumberValid = validateNumber(data.number);
    const isPasswordValid = validatePassword(data.password);
    console.log("loginnnnnn");
    console.log(data);
    if (isNumberValid && isPasswordValid) {
      loginHandler(data.number, data.password).then((res) => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("accessToken", res.data.accessToken);

        dispatch(setUserName(res.data.username));
        dispatch(setAccessToken(res.data.accessToken));
        dispatch(openAuthModal());
      });
    }
  };

  const handleGuestLogin = (e) => {
    const data = {
      number: 8210651798,
      password: "Viv@1234",
    };
    const isNumberValid = validateNumber(data.number);
    const isPasswordValid = validatePassword(data.password);
    console.log("loginnnnnn guest");
    if (isNumberValid && isPasswordValid) {
      loginHandler(data.number, data.password).then((res) => {
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("accessToken", res.data.accessToken);

        dispatch(setUserName(res.data.username));
        dispatch(setAccessToken(res.data.accessToken));
        dispatch(openAuthModal());
      });
    }
  };

  const handleCreateNewAccount = () => {
    dispatch(handleSingup());
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>
          </label>
          <input
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
            placeholder="Enter Password"
            required
            ref={password}
          />
        </div>
        <div>
          <button
            className="button btn-primary btn-login cursor-pointer"
            name="login"
          >
            Login
          </button>
        </div>
      </form>
      <center>
        <strong>Or</strong>
      </center>
      <hr />
      <div className="cta">
        <button
          className="button btn-outline-primary btn-login cursor-pointer"
          onClick={handleGuestLogin}
          name="guest-login"
        >
          Login as Guest
        </button>
      </div>
      <center>
        <strong>Or</strong>
      </center>
      <hr />
      <div className="cta">
        <button
          className="button btn-outline-primary btn-login cursor-pointer"
          onClick={handleCreateNewAccount}
          name="guest-login"
        >
          Create a new account
        </button>
      </div>
    </div>
  );
};

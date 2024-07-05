import { AuthLogin, AuthSignup } from "../index";
import "./AuthModal.css";
import { useDispatch, useSelector } from "react-redux";
import {
  openAuthModal,
  handleLogin,
  handleSingup,
} from "../../Redux/actions/authActions";

export const AuthModal = () => {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(handleLogin());
  };

  const handleSignupClick = () => {
    dispatch(handleSingup());
  };

  const handleCloseClick = () => {
    dispatch(openAuthModal());
  };

  return (
    <div className="auth-modal-container fixed">
      <div className="auth-modal absolute shadow right-0">
        <div className="d-flex align-center shadow">
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              authState.selectedTab === "login" ? "btn-primary" : ""
            }`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={`button btn-auth grow-shrink-basis cursor-pointer ${
              authState.selectedTab === "signup" ? "btn-primary" : ""
            }`}
            onClick={handleSignupClick}
          >
            Signup
          </button>
          <button
            className="button btn-auth btn-close d-flex align-center justify-center cursor-pointer"
            onClick={handleCloseClick}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div>
          {authState.selectedTab === "login" ? <AuthLogin /> : <AuthSignup />}
        </div>
      </div>
    </div>
  );
};

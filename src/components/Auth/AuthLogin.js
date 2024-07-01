import "./Auth.css";

export const AuthLogin = () => {
  return (
    <div className="auth-container">
      <form action="">
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

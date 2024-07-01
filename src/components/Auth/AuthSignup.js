import "./Auth.css";

export const AuthSignup = () => {
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
            placeholder="Enter mobile number"
            required
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

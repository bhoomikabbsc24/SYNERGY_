import { Link } from "react-router-dom";
import "./auth.css";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          SYNERGY
        </div>

        <h1>Create your account</h1>

        <p className="auth-subtitle">
          Join your community and start helping.
        </p>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label>Campus</label>
            <input
              type="text"
              placeholder="Enter your campus"
            />
          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
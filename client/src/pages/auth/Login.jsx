import { Link } from "react-router-dom";
import "./auth.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">SYNERGY</div>

        <h1>Welcome back</h1>
        <p className="auth-subtitle">
          Log in to connect with your community.
        </p>

        <form>
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
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4 px-4">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-calendar-alt me-2"></i>
        <span>User Name</span>
      </Link>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt me-2"></i>
        <span>Sign out</span>
      </button>
    </nav>
  );
};

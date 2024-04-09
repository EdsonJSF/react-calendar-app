import { Link } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {
  const { user, startLogout } = useAuthStore();
  const { name } = user;

  return (
    <nav className="navbar navbar-dark bg-dark mb-4 px-4">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-calendar-alt me-2"></i>
        <span>{name}</span>
      </Link>

      <button className="btn btn-outline-danger" onClick={startLogout}>
        <i className="fas fa-sign-out-alt me-2"></i>
        <span>Sign out</span>
      </button>
    </nav>
  );
};

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "64px", color: "#2563eb" }}>
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="details-btn"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
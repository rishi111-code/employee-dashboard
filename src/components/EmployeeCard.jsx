import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaBuilding,
  FaBriefcase,
  FaTrash,
  FaEye,
} from "react-icons/fa";

import "./EmployeeCard.css";

function EmployeeCard({
  employee,
  onDelete,
}) {
  return (
    <div className="employee-card">

      <img
        src={employee.image}
        alt={employee.firstName}
        className="employee-image"
      />

      <h2>

        {employee.firstName} {employee.lastName}

      </h2>

      <div className="employee-info">

        <p>

          <FaEnvelope />

          {employee.email}

        </p>

        <p>

          <FaBuilding />

          {employee.department}

        </p>

        <p>

          <FaBriefcase />

          {employee.position}

        </p>

      </div>

      <span
        className={
          employee.status === "Active"
            ? "status active"
            : "status inactive"
        }
      >
        {employee.status}
      </span>

      <div className="employee-actions">

        <Link
          className="details-btn"
          to={`/employee/${employee.id}`}
        >
          <FaEye />

          View
        </Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(employee)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;
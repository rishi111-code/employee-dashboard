import "./ConfirmModal.css";

function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  employee,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="confirm-modal">

        <h2>Delete Employee?</h2>

        <p>

          Are you sure you want to delete

          <strong>

            {" "}
            {employee?.firstName} {employee?.lastName}

          </strong>

          ?

        </p>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-confirm-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;
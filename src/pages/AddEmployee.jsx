import Navbar from "../components/Navbar";

function AddEmployee() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#f4f7fb",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="container"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "650px",
              background: "#fff",
              borderRadius: "15px",
              padding: "35px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "10px",
                color: "#2c3e50",
              }}
            >
              Add Employee
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#666",
                marginBottom: "30px",
              }}
            >
              Fill in the employee details below.
            </p>

            <form>
              {/* Employee Name */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  Employee Name
                </label>

                <input
                  type="text"
                  placeholder="Enter employee name"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter email"
                  style={inputStyle}
                />
              </div>

              {/* Department */}
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  Department
                </label>

                <select style={inputStyle}>
                  <option>Select Department</option>
                  <option>Human Resources</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                  <option>IT</option>
                  <option>Operations</option>
                </select>
              </div>

              {/* Post */}
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "600",
                  }}
                >
                  Post
                </label>

                <input
                  type="text"
                  placeholder="Enter employee designation"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              >
                Add Employee
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer
          style={{
            background: "#1f2937",
            color: "#fff",
            textAlign: "center",
            padding: "18px",
            fontSize: "14px",
          }}
        >
          © {new Date().getFullYear()} Employee Management System |
          Designed for efficient employee management.
        </footer>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};

export default AddEmployee;
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getEmployees } from "../services/employeeService";

const EmployeeContext = createContext();

const STORAGE_KEY = "customEmployees";

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch API + Merge Local Employees
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const apiUsers = await getEmployees();

      const apiEmployees = apiUsers.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        age: user.age,
        phone: user.phone,
        image: user.image,
        address: user.address,
        company: user.company,
        department:
          user.company?.department || "Development",
        position:
          user.company?.title || "Employee",
        status:
          Math.random() > 0.5
            ? "Active"
            : "Inactive",
      }));

      const localEmployees =
        JSON.parse(
          localStorage.getItem(STORAGE_KEY)
        ) || [];

      setEmployees([
        ...apiEmployees,
        ...localEmployees,
      ]);

      setError("");
    } catch (err) {
      console.error(err);

      setError("Unable to load employees.");
    } finally {
      setLoading(false);
    }
  };

  // Add Employee
  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      id: Date.now(),
      status: "Active",
      image:
        employee.image ||
        "https://i.pravatar.cc/150?img=8",
    };

    const updated = [...employees, newEmployee];

    setEmployees(updated);

    const custom = updated.filter(
      (emp) => emp.id > 20
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(custom)
    );
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    const updated = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updated);

    const custom = updated.filter(
      (emp) => emp.id > 20
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(custom)
    );
  };

  // Update Employee
  const updateEmployee = (updatedEmployee) => {
    const updated = employees.map((employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
    );

    setEmployees(updated);

    const custom = updated.filter(
      (emp) => emp.id > 20
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(custom)
    );
  };

  const value = {
    employees,
    loading,
    error,
    fetchEmployees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
  };

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployeeContext() {
  return useContext(EmployeeContext);
}
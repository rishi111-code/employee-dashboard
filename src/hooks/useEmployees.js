import { useEmployeeContext } from "../context/EmployeeContext";

/**
 * Backward-compatible hook.
 * Existing components can continue using:
 *
 * const {
 *   employees,
 *   loading,
 *   error,
 *   fetchEmployees,
 *   addEmployee,
 *   deleteEmployee,
 *   updateEmployee
 * } = useEmployees();
 */

export default function useEmployees() {
  return useEmployeeContext();
}
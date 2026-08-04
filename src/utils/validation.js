export function validateEmployee(employee) {
  const errors = {};

  if (!employee.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!employee.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!employee.email.trim()) {
    errors.email = "Email is required.";
  } else {
    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(employee.email)) {
      errors.email = "Invalid email.";
    }
  }

  if (!employee.department.trim()) {
    errors.department = "Department is required.";
  }

  if (!employee.position.trim()) {
    errors.position = "Position is required.";
  }

  return errors;
}
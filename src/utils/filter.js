export function filterEmployees(
  employees,
  search,
  gender,
  ageFilter
) {
  return employees.filter((employee) => {
    const fullName =
      `${employee.firstName} ${employee.lastName}`.toLowerCase();

    const email = employee.email.toLowerCase();

    const searchMatch =
      fullName.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase());

    const genderMatch =
      gender === "All"
        ? true
        : employee.gender.toLowerCase() === gender.toLowerCase();

    let ageMatch = true;

    if (ageFilter === "Above30") {
      ageMatch = employee.age > 30;
    }

    if (ageFilter === "Below30") {
      ageMatch = employee.age <= 30;
    }

    return searchMatch && genderMatch && ageMatch;
  });
}
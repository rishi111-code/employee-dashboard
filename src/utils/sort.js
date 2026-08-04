export function sortEmployees(employees, sortType) {
  const sorted = [...employees];

  if (sortType === "A-Z") {
    sorted.sort((a, b) =>
      `${a.firstName} ${a.lastName}`.localeCompare(
        `${b.firstName} ${b.lastName}`
      )
    );
  }

  if (sortType === "Z-A") {
    sorted.sort((a, b) =>
      `${b.firstName} ${b.lastName}`.localeCompare(
        `${a.firstName} ${a.lastName}`
      )
    );
  }

  return sorted;
}
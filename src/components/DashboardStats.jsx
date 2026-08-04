import StatisticsCard from "./StatisticsCard";

function DashboardStats({ employees }) {
  const total = employees.length;

  const active = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const inactive = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const male = employees.filter(
    (emp) => emp.gender === "male"
  ).length;

  const female = employees.filter(
    (emp) => emp.gender === "female"
  ).length;

  return (
    <div className="stats-grid">
      <StatisticsCard
        title="Total Employees"
        value={total}
        color="#2563eb"
      />

      <StatisticsCard
        title="Active"
        value={active}
        color="#16a34a"
      />

      <StatisticsCard
        title="Inactive"
        value={inactive}
        color="#dc2626"
      />

      <StatisticsCard
        title="Male"
        value={male}
        color="#7c3aed"
      />

      <StatisticsCard
        title="Female"
        value={female}
        color="#ec4899"
      />
    </div>
  );
}

export default DashboardStats;
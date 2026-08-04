import "./FilterBar.css";

function FilterBar({
  gender,
  setGender,
  age,
  setAge,
}) {
  return (
    <div className="filter-container">

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option>All</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        value={age}
        onChange={(e) => setAge(e.target.value)}
      >
        <option value="All">All Ages</option>
        <option value="Above30">Above 30</option>
        <option value="Below30">30 & Below</option>
      </select>

    </div>
  );
}

export default FilterBar;
import "./SortDropdown.css";

function SortDropdown({
  sort,
  setSort,
}) {
  return (
    <select
      className="sort-dropdown"
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="">Sort</option>

      <option value="A-Z">
        Name A-Z
      </option>

      <option value="Z-A">
        Name Z-A
      </option>
    </select>
  );
}

export default SortDropdown;
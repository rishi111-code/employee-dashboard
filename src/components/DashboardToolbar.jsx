import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropdown";

function DashboardToolbar({
  search,
  setSearch,
  gender,
  setGender,
  age,
  setAge,
  sort,
  setSort,
}) {
  return (
    <div className="toolbar">

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <FilterBar
        gender={gender}
        setGender={setGender}
        age={age}
        setAge={setAge}
      />

      <SortDropdown
        sort={sort}
        setSort={setSort}
      />

    </div>
  );
}

export default DashboardToolbar;
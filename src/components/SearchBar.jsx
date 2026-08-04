import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search by name or email..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
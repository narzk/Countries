import "../style/Search.css";

function Search() {
  return (
    <div className="search-container">
      <input placeHolder="Search for a country..." />

      <select>
        <option>Filter by Region</option>
        <option>Asia</option>
        <option>Africa</option>

        <option>Americas</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
}

export default Search;

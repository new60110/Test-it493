function FilterBar({ query, onQueryChange }) {
  return (
    <div className="search">
      <label className="visually-hidden" htmlFor="search">
        ค้นหาสินค้า
      </label>
      <span className="search__icon" aria-hidden="true" />
      <input
        className="search__input"
        id="search"
        type="search"
        placeholder="ค้นหาสินค้า..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
    </div>
  );
}

export default FilterBar;
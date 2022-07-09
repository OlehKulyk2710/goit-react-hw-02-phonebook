import './Filter.css';

const Filter = ({ onFilterChange, filter }) => {
  const handleChange = event => {
    onFilterChange(event.currentTarget.value);
  };

  return (
    <div className="filter__container">
      <p className="filter__title">Find contacts by name</p>
      <label className="filter__label">
        <input
          type="text"
          name="filter"
          value={filter}
          className="filter__input"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;

import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Filter = ({ filterLabel, filterValue, onClose, onChangeFilter }) => {
  const location = useLocation();
  const history = useNavigate();
  
  const searchParams = new URLSearchParams(location.search);
  
  const filter = searchParams.get('filter');

  const [value, setValue] = useState(filterValue);
  const [urlFilterParams, setFilterUrlParams] = useState(filter);

  useEffect(() => {
    onChangeFilter(value);

    setFilterUrlParams(value);
    searchParams.set('filter', urlFilterParams);
    history({search: searchParams.toString()})
  }, [value, urlFilterParams]);

  const handleCleanField = () => {
    setValue('');
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    setValue(value);
  };

  return (
    <div className="filter-menu-container">
      <div className="btn-clean" onClick={handleCleanField}>
        x
      </div>
      <div className="filter-label">{filterLabel}</div>
      <div className="filter-operator">equal</div>
      <input
        type="text"
        className="filter-value"
        placeholder="Filter value"
        value={value}
        onChange={handleInputChange}
      />
      <div className="btn-exit" onClick={onClose}>
        x
      </div>
    </div>
  );
};

export default Filter;

import { React, useState } from 'react';
import { ActionsContainer } from './ActionsContainer';
import '../../style.css';

const HeaderCell = ({
  setShowFilter,
  setDataKey,
  setOrderAsc,
  isOrderAsc,
  column,
  countriesTableColumnsConfig,
  setCountriesTableColumnsConfig,
}) => {
  const [arrowPosition, setArrowPosition] = useState('south');

  const sortHandler = (key) => {
    if (isOrderAsc === null) {
      setOrderAsc('asc');
      setDataKey(key);
      setArrowPosition('north');
    } else if (isOrderAsc === 'asc') {
      setOrderAsc('desc');
      setDataKey(key);
      setArrowPosition('south');
    } else {
      setOrderAsc(null);
      setDataKey(null);
    }
  };

  return (
    column.key && (
      <div className="table-header__cell">
        <div className="header-sort-btn" onClick={() => sortHandler(column.key)}>
          {column.label}
        </div>
        <ActionsContainer
          isSortable={column.sortable}
          dataKey={column.key}
          setDataKey={setDataKey}
          setShowFilter={setShowFilter}
          sortHandler={sortHandler}
          setOrderAsc={setOrderAsc}
          isOrderAsc={isOrderAsc}
          arrowPosition={arrowPosition}
          column={column}
          countriesTableColumnsConfig={countriesTableColumnsConfig}
          setCountriesTableColumnsConfig={setCountriesTableColumnsConfig}
        />
      </div>
    )
  );
};

export { HeaderCell };

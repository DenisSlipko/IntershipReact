import { React, useState } from 'react';
import { ActionsContainer } from './ActionsContainer';
import '../style.css';

const HeaderCell = ({ setShowFilter, setDataKey, setOrderAsc, isOrderAsc, column }) => {
  const [arrowPosition, setArrowPosition] = useState('south');
  const [showColumn, setShowColumn] = useState(true);

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
    showColumn && (
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
          setShowColumn={setShowColumn}
        />
      </div>
    )
  );
};

export { HeaderCell };

import { React, useRef, useState } from 'react';
import { ActionsContainer } from './ActionsContainer';
import '../style.css';

const Header = ({ columnsConfig, setShowFilter, setDataKey, setOrderAsc, isOrderAsc }) => {
  const [arrowPosition, setArrowPosition] = useState('south');
  const headerCellRef = useRef(null);
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
    <div className="table-header">
      <div className="table-header-row">
        {columnsConfig.map((col) => (
          <div className="table-header__cell" ref={headerCellRef} key={col.key}>
            <div className="header-sort-btn" onClick={() => sortHandler(col.key)}>
              {col.label}
            </div>
            <ActionsContainer
              isSortable={col.sortable}
              dataKey={col.key}
              setDataKey={setDataKey}
              headerCellRef={headerCellRef}
              setShowFilter={setShowFilter}
              sortHandler={sortHandler}
              setOrderAsc={setOrderAsc}
              isOrderAsc={isOrderAsc}
              arrowPosition={arrowPosition}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Header };

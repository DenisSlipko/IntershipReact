import { React } from 'react';
import '../../style.css';

const MenuElMap = {
  UNSORT: 'UNSORT',
  SORT_BY_ASC: 'SORT BY ASC',
  SORT_BY_DESC: 'SORT BY DESC',
  FILTER: 'FILTER',
  HIDE: 'HIDE',
};

const DropDownMenu = ({ isSortable, handleShowFilter, handleSort, dataKey, handleHideColumn, handleShowMenu }) => {
  const handleMenuSort = (isAsc, dataKey) => {
    handleShowMenu(false);
    handleSort(isAsc, dataKey);
  };
  const handleMenuShowFilter = () => {
    handleShowMenu(false);
    handleShowFilter(dataKey);
  };

  const handleMenuHideColumn = () => {
    handleShowMenu(false);
    handleHideColumn();
  };

  return (
    <div className="drop-down__menu">
      <div className="menu-item" onClick={() => handleMenuSort(null, null)}>
        {MenuElMap.UNSORT}
      </div>
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort('asc', dataKey)}>
          {MenuElMap.SORT_BY_ASC}
        </div>
      )}
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort('desc', dataKey)}>
          {MenuElMap.SORT_BY_DESC}
        </div>
      )}
      <div className="menu-item" onClick={handleMenuShowFilter}>
        {MenuElMap.FILTER}
      </div>
      <div className="menu-item" onClick={handleMenuHideColumn}>
        {MenuElMap.HIDE}
      </div>
    </div>
  );
};

export { DropDownMenu };

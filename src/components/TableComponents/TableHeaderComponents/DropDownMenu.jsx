import { React } from 'react';
import '../../style.css';

const DropDownMenu = ({ isSortable, onShowFilter, onSortChange, columnName, onHideColumn, onShowMenu, sortValue }) => {
  const handleMenuSort = (isAsc, columnName) => {
    onShowMenu(false);
    onSortChange(isAsc, columnName);
  };
  const handleMenuShowFilter = () => {
    onShowMenu(false);
    onShowFilter(columnName);
  };

  const handleMenuHideColumn = () => {
    onShowMenu(false);
    onHideColumn();
  };

  return (
    <div className="drop-down__menu">
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(null, null)}>
          UNSORT
        </div>
      )}
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(sortValue.asc, columnName)}>
          SORT BY ASC
        </div>
      )}
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(sortValue.desc, columnName)}>
          SORT BY DESC
        </div>
      )}
      <div className="menu-item" onClick={handleMenuShowFilter}>
        FILTER
      </div>
      <div className="menu-item" onClick={handleMenuHideColumn}>
        HIDE
      </div>
    </div>
  );
};

export default DropDownMenu;

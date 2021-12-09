import { React } from 'react';

import { SortValue } from '../constants';

const DropDownMenu = ({ isSortable, columnName, onHideColumn, onClose, onShowFilter, onSortChange }) => {
  const handleMenuSort = (isAsc, columnName) => {
    onClose();
    onSortChange(isAsc, columnName);
  };
  const handleMenuShowFilter = () => {
    onClose();
    onShowFilter(columnName);
  };

  const handleMenuHideColumn = () => {
    onClose();
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
        <div className="menu-item" onClick={() => handleMenuSort(SortValue.asc, columnName)}>
          SORT BY ASC
        </div>
      )}
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(SortValue.desc, columnName)}>
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

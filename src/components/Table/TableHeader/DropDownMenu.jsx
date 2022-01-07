import { React } from 'react';

import { SortValueMap } from '../../../constants/constants';

const DropDownMenu = ({ isSortable, columnHeaderKey, onClose, onHideColumn, onShowFilter, onSortChange }) => {
  const handleMenuSort = (isAsc, columnHeaderKey) => () => {
    onSortChange(isAsc, columnHeaderKey);
    onClose();
  };

  const handleMenuShowFilter = () => {
    onShowFilter(columnHeaderKey);
    onClose();
  };

  const handleMenuHideColumn = () => {
    onHideColumn(columnHeaderKey);
    onClose();
  };

  return (
    <div className="drop-down__menu">
      {isSortable && (
        <>
          <div className="menu-item" onClick={handleMenuSort(null, null)}>
            Unsort
          </div>
          <div className="menu-item" onClick={handleMenuSort(SortValueMap.ASC, columnHeaderKey)}>
            Sort by ASC
          </div>
          <div className="menu-item" onClick={handleMenuSort(SortValueMap.DESC, columnHeaderKey)}>
            Sort by DESC
          </div>
        </>
      )}
      <div className="menu-item" onClick={handleMenuShowFilter}>
        Filter
      </div>
      <div className="menu-item" onClick={handleMenuHideColumn}>
        Hide
      </div>
    </div>
  );
};

export default DropDownMenu;

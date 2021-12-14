import { React, useState } from 'react';

import DropDownMenu from './DropDownMenu';
import { ArrowType, SortValue } from '../constants';

const HeaderCell = ({
  columnHeaderKey,
  label,
  isSortable,
  isOrderAsc,
  onHideColumn,
  onSort,
  onShowFilter,
  onSortChange,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="table-header__cell">
      <div className="header-sort-btn" onClick={() => isSortable && onSort(columnHeaderKey)}>
        {label}
      </div>
      <div className="actions-container">
        {isSortable && (
          <span className="material-icons arrow" onClick={() => onSort(columnHeaderKey)}>
            {isOrderAsc === SortValue.ASC ? ArrowType.UP : ArrowType.DOWN}
          </span>
        )}
        <span className="material-icons menuBtn" onClick={() => setShowMenu(true)}>
          more_vert
        </span>
        {showMenu && (
          <DropDownMenu
            isSortable={isSortable}
            columnHeaderKey={columnHeaderKey}
            onHideColumn={onHideColumn}
            onClose={handleClose}
            onSortChange={onSortChange}
            onShowFilter={onShowFilter}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderCell;

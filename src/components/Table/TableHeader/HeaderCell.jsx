import { React, useState } from 'react';

import DropDownMenu from './DropDownMenu';
import { ArrowType } from '../constants';
import { SortValue } from '../constants';

const HeaderCell = ({
  columnName,
  label,
  isSortable,
  isOrderAsc,
  onHideColumn,
  onShowFilter,
  onSortChange,
  onSort,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="table-header__cell">
      <div className="header-sort-btn" onClick={() => onSort(columnName)}>
        {label}
      </div>
      <div className="actions-container">
        <span className="material-icons arrow" onClick={() => onSort(columnName)}>
          {isOrderAsc === SortValue.asc ? ArrowType.up : ArrowType.down}
        </span>
        <span className="material-icons menuBtn" onClick={() => setShowMenu(true)}>
          more_vert
        </span>
        {showMenu && (
          <DropDownMenu
            isSortable={isSortable}
            columnName={columnName}
            onClose={handleClose}
            onShowFilter={onShowFilter}
            onSortChange={onSortChange}
            onHideColumn={onHideColumn}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderCell;

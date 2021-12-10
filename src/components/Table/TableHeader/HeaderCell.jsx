import { React, useState } from 'react';

import DropDownMenu from './DropDownMenu';
import { ArrowType } from '../constants';
import { SortValue } from '../constants';

const HeaderCell = ({ columnHeader, label, isSortable, isOrderAsc, onHideColumn, onSort, onShow }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="table-header__cell">
      <div className="header-sort-btn" onClick={() => onSort(columnHeader)}>
        {label}
      </div>
      <div className="actions-container">
        <span className="material-icons arrow" onClick={() => onSort(columnHeader)}>
          {isOrderAsc === SortValue.ASC ? ArrowType.UP : ArrowType.DOWN}
        </span>
        <span className="material-icons menuBtn" onClick={() => setShowMenu(true)}>
          more_vert
        </span>
        {showMenu && (
          <DropDownMenu
            isSortable={isSortable}
            columnHeader={columnHeader}
            onHideColumn={onHideColumn}
            onClose={handleClose}
            onShow={onShow}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderCell;

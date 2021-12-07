import { React, useState } from 'react';
import DropDownMenu from './DropDownMenu';
import '../../style.css';

const HeaderCell = ({
  onShowFilter,
  onSortChange,
  columnName,
  label,
  isSortable,
  countriesTableColumnsConfig,
  onHideColumn,
  onSort,
  arrow,
  sortValue,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const onShowMenu = (isShow) => {
    setShowMenu(isShow);
  };

  return (
    <div className="table-header__cell">
      <div className="header-sort-btn" onClick={() => onSort(columnName)}>
        {label}
      </div>
      <div className="actions-container">
        <span className="material-icons arrow" onClick={() => onSort(columnName)}>
          {arrow}
        </span>
        <span className="material-icons menuBtn" onClick={() => onShowMenu(true)}>
          more_vert
        </span>
        {showMenu && (
          <DropDownMenu
            isSortable={isSortable}
            onShowFilter={onShowFilter}
            columnName={columnName}
            onShowMenu={onShowMenu}
            onSortChange={onSortChange}
            countriesTableColumnsConfig={countriesTableColumnsConfig}
            onHideColumn={onHideColumn}
            sortValue={sortValue}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderCell;

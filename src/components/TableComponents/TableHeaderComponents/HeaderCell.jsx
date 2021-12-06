import { React, useState } from 'react';
import { DropDownMenu } from './DropDownMenu';
import '../../style.css';

const HeaderCell = ({
  handleShowFilter,
  handleSort,
  isOrderAsc,
  dataKey,
  label,
  isSortable,
  countriesTableColumnsConfig,
  handleHideColumn,
}) => {
  const [arrow, setArrowPosition] = useState('south');
  const [showMenu, setShowMenu] = useState(false);

  const sortHandler = (key) => {
    if (isOrderAsc === null) {
      handleSort('asc', key);
      setArrowPosition('north');
    } else if (isOrderAsc === 'asc') {
      handleSort('desc', key);
      setArrowPosition('south');
    } else {
      handleSort(null, null);
    }
  };

  const handleShowMenu = (isShow) => {
    setShowMenu(isShow);
  };
  const handleArrow = () => {
    sortHandler(dataKey);
  };

  return (
    <div className="table-header__cell">
      <div className="header-sort-btn" onClick={() => sortHandler(dataKey)}>
        {label}
      </div>
      <div className="actions-container">
        <span className="material-icons arrow" onClick={handleArrow}>
          {arrow}
        </span>
        <span className="material-icons menuBtn" onClick={() => handleShowMenu(true)}>
          more_vert
        </span>
        {showMenu && (
          <DropDownMenu
            isSortable={isSortable}
            handleShowFilter={handleShowFilter}
            dataKey={dataKey}
            handleShowMenu={handleShowMenu}
            handleSort={handleSort}
            countriesTableColumnsConfig={countriesTableColumnsConfig}
            handleHideColumn={handleHideColumn}
          />
        )}
      </div>
    </div>
  );
};

export { HeaderCell };

import { React, useState } from 'react';
import { DropDownMenu } from './DropDownMenu';
import '../style.css';

const ActionsContainer = ({
  setShowFilter,
  dataKey,
  setDataKey,
  isSortable,
  headerCellRef,
  sortHandler,
  setOrderAsc,
  arrowPosition,
  setShowColumn,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const sortArrowHandler = () => {
    sortHandler(dataKey);
  };

  return (
    <div className="actions-container">
      <span className="material-icons arrow" onClick={sortArrowHandler}>
        {arrowPosition}
      </span>
      <span className="material-icons menuBtn" onClick={showMenuHandler}>
        more_vert
      </span>
      {showMenu && (
        <DropDownMenu
          isSortable={isSortable}
          setShowFilter={setShowFilter}
          dataKey={dataKey}
          headerCellRef={headerCellRef}
          setShowMenu={setShowMenu}
          setOrderAsc={setOrderAsc}
          setDataKey={setDataKey}
          setShowColumn={setShowColumn}
        />
      )}
    </div>
  );
};

export { ActionsContainer };

import { React, useRef, useState } from 'react';
import { DropDownMenu } from './DropDownMenu';
import './style.css';

const Header = ({ columnsConfig, setShowFilter, setdataKey, dataKey }) => {
  const [showMenu, setShowMenu] = useState(false);
  const headerCell = useRef(null);
  const sortCallback = () => {};

  const showMenuHandler = (attKey) => {
    setShowMenu(true);
    setdataKey(attKey);
  };

  return (
    <div className="table-header">
      <div className="table-header-row">
        {columnsConfig.map((col) => (
          <div className="table-header__cell" ref={headerCell} key={col.key}>
            <div className="header-sort-btn" onClick={sortCallback}>
              {col.label}
            </div>
            <div className="actions-container">
              <span className="material-icons arrow">south</span>
              <span className="material-icons menuBtn" onClick={() => showMenuHandler(col.key)}>
                more_vert
                {showMenu && (
                  <DropDownMenu
                    isSortable={col.sortable}
                    setShowFilter={setShowFilter}
                    dataKey={dataKey}
                    headerCell={headerCell}
                  />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Header };

import { React, useState } from 'react';
import { MenuElMap, menuConfig } from '../dataStore/menuConfig';
import './style.css';

const DropDownMenu = ({ isSortable, setShowFilter, dataKey, headerCell }) => {
  const getMenuItem = (menuElement) => {
    switch (menuElement.key) {
      case MenuElMap.UNSORT:
        break;
      case MenuElMap.SORT_BY_ASC:
        break;
      case MenuElMap.SORT_BY_DESC:
        break;
      case MenuElMap.FILTER:
        setShowFilter(true);
        break;
      case MenuElMap.HIDE:
        console.log(headerCell.current.children[0].innerHTML);
        headerCell.current.style.display = 'none';
        break;
      default:
        break;
    }
  };

  return (
    <div className="drop-down__menu">
      {menuConfig
        .filter((elConfig) => {
          const isSortEl = elConfig.key === MenuElMap.SORT_BY_ASC || elConfig.key === MenuElMap.SORT_BY_DESC;
          return isSortEl ? isSortable : true;
        })
        .map((menuElement) => (
          <div className="menu-item" key={menuElement.key} onClick={() => getMenuItem(menuElement)}>
            {menuElement.label}
          </div>
        ))}
    </div>
  );
};

export { DropDownMenu };

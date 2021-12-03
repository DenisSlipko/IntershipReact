import { React } from 'react';
import '../../style.css';

const MenuElMap = {
  UNSORT: 'unsort',
  SORT_BY_ASC: 'sortByAsc',
  SORT_BY_DESC: 'sortByDesc',
  FILTER: 'filter',
  HIDE: 'hide',
};

const menuConfig = [
  {
    label: 'Unsort',
    key: MenuElMap.UNSORT,
  },
  {
    label: 'Sort by ASC',
    key: MenuElMap.SORT_BY_ASC,
  },
  {
    label: 'Sort by DESC',
    key: MenuElMap.SORT_BY_DESC,
  },
  {
    label: 'Filter',
    key: MenuElMap.FILTER,
  },
  {
    label: 'Hide',
    key: MenuElMap.HIDE,
  },
];

const DropDownMenu = ({
  isSortable,
  setShowFilter,
  setShowMenu,
  setOrderAsc,
  setDataKey,
  dataKey,
  setCountriesTableColumnsConfig,
  countriesTableColumnsConfig,
}) => {
  const getMenuHandler = (menuElement) => {
    setShowMenu(false);
    switch (menuElement.key) {
      case MenuElMap.UNSORT:
        setOrderAsc(null);
        setDataKey(null);
        break;
      case MenuElMap.SORT_BY_ASC:
        setOrderAsc('asc');
        setDataKey(dataKey);
        break;
      case MenuElMap.SORT_BY_DESC:
        setOrderAsc('desc');
        setDataKey(dataKey);
        break;
      case MenuElMap.FILTER:
        setDataKey(dataKey);
        setShowFilter(true);
        break;
      case MenuElMap.HIDE:
        const filteredConfig = countriesTableColumnsConfig.filter((el) => el.key !== dataKey);
        setCountriesTableColumnsConfig(filteredConfig);
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
          <div className="menu-item" key={menuElement.key} onClick={() => getMenuHandler(menuElement)}>
            {menuElement.label}
          </div>
        ))}
    </div>
  );
};

export { DropDownMenu };

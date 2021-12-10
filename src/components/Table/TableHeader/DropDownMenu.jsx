import { React } from 'react';
import { useDispatch } from 'react-redux';
import { setColumnHeader, setSortFlag } from '../../../store/ActionsCreator';

import { SortValue } from '../constants';

const DropDownMenu = ({ isSortable, columnHeader, onClose, onHideColumn, onShow }) => {
  const dispatch = useDispatch();

  const handleMenuSort = (isAsc, columnHeader) => {
    onClose();
    dispatch(setSortFlag(isAsc));
    dispatch(setColumnHeader(columnHeader));
  };
  const handleMenuShowFilter = () => {
    onClose();
    onShow();
    dispatch(setColumnHeader(columnHeader));
  };
  const handleMenuHideColumn = () => {
    onClose();
    onHideColumn(columnHeader);
  };

  return (
    <div className="drop-down__menu">
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(null, null)}>
          UNSORT
        </div>
      )}
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(SortValue.ASC, columnHeader)}>
          SORT BY ASC
        </div>
      )}
      {isSortable && (
        <div className="menu-item" onClick={() => handleMenuSort(SortValue.DESC, columnHeader)}>
          SORT BY DESC
        </div>
      )}
      <div className="menu-item" onClick={handleMenuShowFilter}>
        FILTER
      </div>
      <div className="menu-item" onClick={handleMenuHideColumn}>
        HIDE
      </div>
    </div>
  );
};

export default DropDownMenu;

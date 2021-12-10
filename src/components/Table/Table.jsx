import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SortValue } from './constants';
import Pagination from './PaginationComponents/Pagination';
import HeaderCell from './TableHeader/HeaderCell';
import TableRows from './TableRows';
import Filter from './Filter';
import { setColumnHeader, setSortFlag } from '../../store/ActionsCreator';
import { TableColumnsConfig } from '../../App';

const Table = ({ amountElOnPage, isOrderAsc, columnHeader, filterValue, data, totalAmount }) => {
  const dispatch = useDispatch();
  const [countriesTableColumnsConfig, setCountriesTableColumnsConfig] = useState(TableColumnsConfig);
  const [showFilter, setShowFilter] = useState(false);

  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  const handleChangeSort = (isAsc, columnHeader) => {
    dispatch(setSortFlag(isAsc));
    dispatch(setColumnHeader(columnHeader));
  };

  const handleSort = (columnHeader) => {
    if (isOrderAsc === null) {
      handleChangeSort(SortValue.ASC, columnHeader);
    } else if (isOrderAsc === SortValue.ASC) {
      handleChangeSort(SortValue.DESC, columnHeader);
    } else {
      handleChangeSort(null, null);
    }
  };

  const handleShowFilter = () => {
    setShowFilter(true);
  };
  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleHideColumn = (columnHeader) => {
    const filteredConfig = TableColumnsConfig.filter(({ key }) => key !== columnHeader);
    setCountriesTableColumnsConfig(filteredConfig);
  };

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-row">
          {countriesTableColumnsConfig.map(({ key, label, sortable }) => (
            <HeaderCell
              key={key}
              label={label}
              columnHeader={key}
              isSortable={sortable}
              isOrderAsc={isOrderAsc}
              onSort={handleSort}
              onHideColumn={handleHideColumn}
              onShow={handleShowFilter}
            />
          ))}
        </div>
      </div>
      <TableRows data={data} columnsConfig={countriesTableColumnsConfig} />
      <Pagination pagesAmount={pagesAmount} />
      {showFilter && <Filter filterLabel={columnHeader} filterValue={filterValue} onClose={handleCloseFilter} />}
    </div>
  );
};

export default Table;

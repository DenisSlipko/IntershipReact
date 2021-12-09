import { React, useState, useEffect } from 'react';

import { DEFAULT_CURRENT_PAGE, DEFAULT_AMOUNT_EL, SortValue } from './constants';
import Pagination from './PaginationComponents/Pagination';
import HeaderCell from './TableHeader/HeaderCell';
import { TableColumsConfig } from './constants';
import { loadingData } from '../../App';
import TableRows from './TableRows';
import Filter from './Filter';

const Table = () => {
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filterValue, setFilterValue] = useState(localStorage.getItem('filter'));
  const [columnName, setColumnName] = useState(localStorage.getItem('data-key'));
  const [isOrderAsc, setOrderAsc] = useState(localStorage.getItem('is-asc'));
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [amountElOnPage, setAmountElOnPage] = useState(DEFAULT_AMOUNT_EL);
  const [countriesTableColumnsConfig, setCountriesTableColumnsConfig] = useState(TableColumsConfig);

  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  useEffect(() => {
    loadingData(amountElOnPage, currentPage, isOrderAsc, columnName, filterValue, setData, setTotalAmount);
  }, [amountElOnPage, currentPage, isOrderAsc, columnName, filterValue]);

  const handleCloseFilter = () => {
    setShowFilter(false);
  };
  const handleChangeFilter = (value) => {
    setFilterValue(value);
  };

  const handleChangeAmountEl = (event) => {
    const parseValue = parseInt(event.target.value, 10);
    if (amountElOnPage !== parseValue) {
      setAmountElOnPage(parseValue);
    }
  };

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleHideColumn = () => {
    const filteredConfig = countriesTableColumnsConfig.filter(({ key }) => key !== columnName);
    setCountriesTableColumnsConfig(filteredConfig);
  };

  const handleChangeSort = (isAsc, columnName) => {
    setOrderAsc(isAsc);
    setColumnName(columnName);
  };

  const handleShowFilter = (columnName) => {
    setColumnName(columnName);
    setShowFilter(true);
  };

  const handleSort = (columnName) => {
    if (isOrderAsc === null) {
      handleChangeSort(SortValue.asc, columnName);
    } else if (isOrderAsc === SortValue.asc) {
      handleChangeSort(SortValue.desc, columnName);
    } else {
      handleChangeSort(null, null);
    }
  };

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-row">
          {countriesTableColumnsConfig.map(({ key, label, sortable }) => (
            <HeaderCell
              key={key}
              label={label}
              columnName={key}
              isSortable={sortable}
              isOrderAsc={isOrderAsc}
              onSort={handleSort}
              onSortChange={handleChangeSort}
              onHideColumn={handleHideColumn}
              onShowFilter={handleShowFilter}
            />
          ))}
        </div>
      </div>
      <TableRows data={data} columnsConfig={countriesTableColumnsConfig} />
      <Pagination pagesAmount={pagesAmount} onPageChange={handleChangePage} onChangeAmountEl={handleChangeAmountEl} />
      {showFilter && (
        <Filter
          filterLabel={columnName}
          filterValue={filterValue}
          onChangeFilter={handleChangeFilter}
          onCloseFilter={handleCloseFilter}
        />
      )}
    </div>
  );
};

export default Table;

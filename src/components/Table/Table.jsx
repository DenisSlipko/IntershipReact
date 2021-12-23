import { React, useEffect, useState } from 'react';

import { DEFAULT_AMOUNT_EL, DEFAULT_CURRENT_PAGE, SortValue } from './constants';
import Pagination from './PaginationComponents/Pagination';
import HeaderCell from './TableHeader/HeaderCell';
import TableRows from './TableRows';
import Filter from './Filter';

const Table = ({ columnsConfig, data, totalAmount, onShowModal, onDataUpdate }) => {
  const [filterValue, setFilterValue] = useState(localStorage.getItem('filter'));
  const [columnHeaderKey, setColumnHeaderKey] = useState(localStorage.getItem('data-key'));
  const [isOrderAsc, setOrderAsc] = useState(localStorage.getItem('is-asc'));
  const [currentPage, setCurrentPage] = useState(DEFAULT_CURRENT_PAGE);
  const [amountElOnPage, setAmountElOnPage] = useState(DEFAULT_AMOUNT_EL);
  const [countriesConfig, setCountriesConfig] = useState(columnsConfig);
  const [showFilter, setShowFilter] = useState(false);

  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  useEffect(() => {
    onDataUpdate(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue);

    // setOrderAsc(localStorage.getItem('is-asc'));
    // setColumnHeaderKey(localStorage.getItem('data-key'));
    // setFilterValue(localStorage.getItem('filter'));
  }, [amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue]);

  const handleChangeSort = (isAsc, columnHeaderKey) => {
    setOrderAsc(isAsc);
    setColumnHeaderKey(columnHeaderKey);
  };

  const handleSort = (columnHeaderKey) => {
    if (isOrderAsc === null) {
      handleChangeSort(SortValue.ASC, columnHeaderKey);
    } else if (isOrderAsc === SortValue.ASC) {
      handleChangeSort(SortValue.DESC, columnHeaderKey);
    } else {
      handleChangeSort(null, null);
    }
  };

  const handleChangeAmountEl = (event) => {
    const amount = parseInt(event.target.value, 10);

    if (amountElOnPage !== amount) {
      setAmountElOnPage(amount);
    }
  };

  const handleShowFilter = (columnHeaderKey) => {
    setColumnHeaderKey(columnHeaderKey);
    setShowFilter(true);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  const handleHideColumn = (columnHeaderKey) => {
    const filteredConfig = countriesConfig.filter(({ key }) => key !== columnHeaderKey);

    setCountriesConfig(filteredConfig);
  };

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-row">
          {countriesConfig.map(({ key, label, sortable }) => (
            <HeaderCell
              key={key}
              label={label}
              columnHeaderKey={key}
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
      <TableRows data={data} columnsConfig={countriesConfig} onShowModal={onShowModal} />
      <Pagination pagesAmount={pagesAmount} onPageChange={setCurrentPage} onChangeAmountEl={handleChangeAmountEl} />
      {showFilter && (
        <Filter
          filterLabel={columnHeaderKey}
          filterValue={filterValue}
          onClose={handleCloseFilter}
          onChangeFilter={setFilterValue}
        />
      )}
    </div>
  );
};

export default Table;

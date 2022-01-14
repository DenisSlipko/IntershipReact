import { React, useEffect, useState } from 'react';

import { DEFAULT_AMOUNT_EL, SortValueMap } from '../../constants/constants';
import Pagination from '../Pagination/Pagination';
import HeaderCell from './TableHeader/HeaderCell';
import TableRows from './TableRows';
import Filter from './Filter';

const Table = ({ 
  columnsConfig,
  data, 
  totalAmount, 
  initialParams,
  onDataRefresh,
  onClickRow, 
  }) => {
  const [filterValue, setFilterValue] = useState(initialParams?.filter);
  const [columnHeaderKey, setColumnHeaderKey] = useState(initialParams?.columnName);
  const [isOrderAsc, setOrderAsc] = useState(initialParams?.order);
  const [currentPage, setCurrentPage] = useState(initialParams?.page || 1);
  const [amountElOnPage, setAmountElOnPage] = useState(initialParams?.amount || DEFAULT_AMOUNT_EL);
  const [dataConfig, setDataConfig] = useState(columnsConfig);
  const [showFilter, setShowFilter] = useState(false);
  
  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  useEffect(() => {
    onDataRefresh(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue)
  }, [amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue]);

  const handleChangeSort = (isAsc, columnHeaderKey) => {
    setOrderAsc(isAsc);
    setColumnHeaderKey(columnHeaderKey);
  };

  const handleSort = (columnHeaderKey) => {
    if (isOrderAsc === null) {
      handleChangeSort(SortValueMap.ASC, columnHeaderKey);
    } else if (isOrderAsc === SortValueMap.ASC) {
      handleChangeSort(SortValueMap.DESC, columnHeaderKey);
    } else {
      handleChangeSort(null, null);
    }
  };

  const handleChangeAmountEl = (value) => {
    if (amountElOnPage !== value) {
      setAmountElOnPage(value);
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
    const filteredConfig = dataConfig.filter(({ key }) => key !== columnHeaderKey);

    setDataConfig(filteredConfig);
  };

  return (
    <div className="table">
      <div className="table-header">
        <div className="table-header-row">
          {dataConfig.map(({ key, label, sortable }) => (
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
      <TableRows data={data} columnsConfig={dataConfig} onClickRow={onClickRow} />
      <Pagination 
        pagesAmount={pagesAmount} 
        onPageChange={setCurrentPage} 
        onChangeAmountEl={handleChangeAmountEl} 
      />
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

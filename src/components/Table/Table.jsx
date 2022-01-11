import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { SortValueMap } from '../../constants/constants';
import Pagination from '../Pagination/Pagination';
import HeaderCell from './TableHeader/HeaderCell';
import TableRows from './TableRows';
import Filter from './Filter';

const Table = ({ 
  columnsConfig,
  data, 
  totalAmount, 
  filter, 
  columnName, 
  order, 
  amount, 
  page, 
  searchParams, 
  onClickRow }) => {

  const [filterValue, setFilterValue] = useState(filter);
  const [columnHeaderKey, setColumnHeaderKey] = useState(columnName);
  const [isOrderAsc, setOrderAsc] = useState(order);
  const [currentPage, setCurrentPage] = useState(page);
  const [amountElOnPage, setAmountElOnPage] = useState(amount);
  const [dataConfig, setDataConfig] = useState(columnsConfig);
  const [showFilter, setShowFilter] = useState(false);
  
  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  const history = useHistory();

  useEffect(() => {
    if (searchParams) {
      if (isOrderAsc !== order) {
        searchParams.set('sort', isOrderAsc);
        searchParams.set('column', columnHeaderKey);
        history.push({ search: searchParams.toString() })
      }
    } 

  }, [amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue, order]);

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
        searchParams={searchParams} 
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

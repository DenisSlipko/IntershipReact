import { React, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { SortValueMap, DEFAULT_AMOUNT_EL } from '../../constants/constants';
import Pagination from '../Pagination/Pagination';
import HeaderCell from './TableHeader/HeaderCell';
import TableRows from './TableRows';
import Filter from './Filter';

const Table = ({ columnsConfig, data, totalAmount, onClickRow, onDataRefresh }) => {
  const location = useLocation();
  const history = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  
  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');
  const name = searchParams.get('column');

  const [filterValue, setFilterValue] = useState(filter);
  const [columnHeaderKey, setColumnHeaderKey] = useState('');
  const [isOrderAsc, setOrderAsc] = useState(localStorage.getItem('is-asc'));
  const [currentPage, setCurrentPage] = useState(1);
  const [amountElOnPage, setAmountElOnPage] = useState(DEFAULT_AMOUNT_EL);
  const [countriesConfig, setCountriesConfig] = useState(columnsConfig);
  const [showFilter, setShowFilter] = useState(false);
  const [urlAscParams, setAscUrlParams] = useState(sort);
  const [urlNameParams, setNameUrlParams] = useState(name);
  
  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  useEffect(() => {
    onDataRefresh(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue);

    if( urlAscParams !== sort ){
      searchParams.set('sort', urlAscParams);
      searchParams.set('column', urlNameParams);
      history({search: searchParams.toString()})
    }

    if( urlAscParams === 'asc') {
      handleChangeSort(SortValueMap.ASC, urlNameParams);
    } else if(urlAscParams === 'desc') {
      handleChangeSort(SortValueMap.DESC, urlNameParams);
    } else {
      handleChangeSort(null, null);
    }
  }, [amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue, urlAscParams, urlNameParams, sort]);

  const handleChangeSort = (isAsc, columnHeaderKey) => {
    setOrderAsc(isAsc);
    setColumnHeaderKey(columnHeaderKey);
  };

  const handleSort = (columnHeaderKey) => {
    setNameUrlParams(columnHeaderKey)
    if (isOrderAsc === null) {
      setAscUrlParams('asc')
    } else if (isOrderAsc === SortValueMap.ASC) {
      setAscUrlParams('desc')
    } else {
      setAscUrlParams('default')
    }
  };

  const handleChangeAmountEl = (value) => {
    if (amountElOnPage !== value) {
      setAmountElOnPage(value);
    }
  };

  const handleShowFilter = (columnHeaderKey) => {
    setColumnHeaderKey(columnHeaderKey);
    setNameUrlParams(columnHeaderKey)
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
      <TableRows data={data} columnsConfig={countriesConfig} onClickRow={onClickRow} />
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

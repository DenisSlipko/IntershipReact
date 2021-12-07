import { React, useState, useEffect } from 'react';
import { getData } from '../../api/requests';
import Pagination from './PaginationComponents/Pagination';
import HeaderCell from './TableHeaderComponents/HeaderCell';
import TableRows from './TableRows';
import Filter from './Filter';
import '../style.css';

const tableColumsConfig = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'Iso',
    key: 'iso3',
    sortable: true,
  },
  {
    label: 'Phone сode',
    key: 'phone_code',
    sortable: false,
  },
  {
    label: 'Currency',
    key: 'currency',
    sortable: false,
  },
  {
    label: 'Capital',
    key: 'capital',
    sortable: false,
  },
];

const defaultAmountEl = 20;
const defaultCurrentPage = 1;

const sortValue = {
  asc: 'asc',
  desc: 'desc',
};

const arrowPosition = {
  down: 'north',
  up: 'south',
};

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filterValue, setFilterValue] = useState(localStorage.getItem('filter'));
  const [columnName, setColumnName] = useState(localStorage.getItem('data-key'));
  const [isOrderAsc, setOrderAsc] = useState(localStorage.getItem('is-asc'));
  const [currentPage, setCurrentPage] = useState(defaultCurrentPage);
  const [amountElOnPage, setAmountElOnPage] = useState(defaultAmountEl);
  const [countriesTableColumnsConfig, setCountriesTableColumnsConfig] = useState(tableColumsConfig);
  const [arrow, setArrowPosition] = useState(arrowPosition.up);

  const pagesAmount = Math.ceil(totalAmount / amountElOnPage);

  const loadingData = (amountElOnPage, currentPage, isOrderAsc, columnName, filterValue) => {
    setLoading(true);
    const fetchData = async () => {
      const [data, amount] = await getData(amountElOnPage, currentPage, isOrderAsc, columnName, filterValue);
      setData(data);
      setTotalAmount(amount);
    };
    fetchData();
    localStorage.setItem('is-asc', isOrderAsc);
    localStorage.setItem('data-key', columnName);
    setLoading(false);
  };

  useEffect(() => {
    loadingData(amountElOnPage, currentPage, isOrderAsc, columnName, filterValue);
  }, [amountElOnPage, currentPage, isOrderAsc, columnName, filterValue]);

  const onCloseFilter = () => {
    setShowFilter(false);
  };
  const onFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const onAmountElChanges = (event) => {
    const parseValue = parseInt(event.target.value, 10);
    if (amountElOnPage !== parseValue) {
      setAmountElOnPage(parseValue);
    }
  };

  const onPageChanges = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onHideColumn = () => {
    const filteredConfig = countriesTableColumnsConfig.filter(({ key }) => key !== columnName);
    setCountriesTableColumnsConfig(filteredConfig);
  };

  const onSortChange = (isAsc, columnName) => {
    setOrderAsc(isAsc);
    setColumnName(columnName);
  };

  const onShowFilter = (columnName) => {
    setColumnName(columnName);
    setShowFilter(true);
  };

  const onSort = (columnName) => {
    if (isOrderAsc === null) {
      onSortChange(sortValue.asc, columnName);
      setArrowPosition(arrowPosition.down);
    } else if (isOrderAsc === sortValue.asc) {
      onSortChange(sortValue.desc, columnName);
      setArrowPosition(arrowPosition.up);
    } else {
      onSortChange(null, null);
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
              isSortable={sortable}
              onShowFilter={onShowFilter}
              isOrderAsc={isOrderAsc}
              onSortChange={onSortChange}
              columnName={key}
              countriesTableColumnsConfig={countriesTableColumnsConfig}
              onHideColumn={onHideColumn}
              arrow={arrow}
              onSort={onSort}
              sortValue={sortValue}
            />
          ))}
        </div>
      </div>
      <TableRows data={data} loading={loading} columnsConfig={countriesTableColumnsConfig} />
      <Pagination onPageChanges={onPageChanges} onAmountElChanges={onAmountElChanges} pagesAmount={pagesAmount} />
      {showFilter && <Filter onCloseFilter={onCloseFilter} filterLabel={columnName} onFilterChange={onFilterChange} />}
    </div>
  );
};

export { Table };

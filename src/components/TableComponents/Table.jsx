import { React, useState, useEffect, useCallback } from 'react';
import { Pagination } from './PaginationComponents/Pagination';
import { HeaderCell } from './TableHeaderComponents/HeaderCell';
import { getData } from '../../api/requests';
import { TableRows } from './TableRows';
import { Filter } from './Filter';
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

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [filterValue, setFilterValue] = useState(localStorage.getItem('filter'));
  const [dataKey, setDataKey] = useState(localStorage.getItem('data-key'));
  const [isOrderAsc, setOrderAsc] = useState(localStorage.getItem('is-asc'));
  const [currentPage, setCurrentPage] = useState(1);
  const [amountElOnPage, setAmountElOnPage] = useState(20);
  const [countriesTableColumnsConfig, setCountriesTableColumnsConfig] = useState(tableColumsConfig);

  const loadingData = useCallback(() => {
    setLoading(true);
    const fetchData = async () => {
      const [data, amount] = await getData(amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue);
      setData(data);
      setTotalAmount(amount);
    };
    fetchData();
    localStorage.setItem('is-asc', isOrderAsc);
    localStorage.setItem('data-key', dataKey);
    setLoading(false);
  }, [amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue]);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

  const handleCloseFilter = () => {
    setShowFilter(false);
  };
  const handleFilterValue = (event) => {
    setFilterValue(event.target.value);
  };

  const handleAmountElChanges = (event) => {
    const parseValue = parseInt(event.target.value, 10);
    if (amountElOnPage !== parseValue) {
      setAmountElOnPage(parseValue);
    }
  };

  const handlePageChanges = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleHideColumn = () => {
    const filteredConfig = countriesTableColumnsConfig.filter((el) => el.key !== dataKey);
    setCountriesTableColumnsConfig(filteredConfig);
  };

  const handleSort = (isAsc, dataKey) => {
    setOrderAsc(isAsc);
    setDataKey(dataKey);
  };

  const handleShowFilter = (dataKey) => {
    setDataKey(dataKey);
    setShowFilter(true);
  };

  return (
    <div className="table" id="table">
      <div className="table-header">
        <div className="table-header-row">
          {countriesTableColumnsConfig.map(({ key, label, sortable }) => (
            <HeaderCell
              key={key}
              label={label}
              isSortable={sortable}
              handleShowFilter={handleShowFilter}
              isOrderAsc={isOrderAsc}
              handleSort={handleSort}
              dataKey={key}
              countriesTableColumnsConfig={countriesTableColumnsConfig}
              handleHideColumn={handleHideColumn}
            />
          ))}
        </div>
      </div>
      <TableRows data={data} loading={loading} columnsConfig={countriesTableColumnsConfig} dataKey={dataKey} />
      <Pagination
        handlePageChanges={handlePageChanges}
        handleAmountElChanges={handleAmountElChanges}
        amountElOnPage={amountElOnPage}
        totalAmount={totalAmount}
      />
      {showFilter && (
        <Filter handleCloseFilter={handleCloseFilter} filterLabel={dataKey} handleFilterValue={handleFilterValue} />
      )}
    </div>
  );
};

export { Table };

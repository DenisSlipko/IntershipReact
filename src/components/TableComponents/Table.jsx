import { Pagination } from './PaginationComponents/Pagination';
import { HeaderCell } from './TableHeaderComponents/HeaderCell';
import { getData } from '../../api/requests';
import { useState, useEffect } from 'react';
import { TableRows } from './TableRows';
import { Filter } from './Filter';
import { React } from 'react';
import '../style.css';

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [totalAmount, setTotalAmount] = useState(null);
  const [filterValue, setFilterValue] = useState(localStorage.getItem('filter'));
  const [dataKey, setDataKey] = useState(localStorage.getItem('data-key'));
  const [isOrderAsc, setOrderAsc] = useState(localStorage.getItem('is-asc'));
  const [currentPage, setCurrentPage] = useState(1);
  const [amountElOnPage, setAmountElOnPage] = useState(20);

  const [countriesTableColumnsConfig, setCountriesTableColumnsConfig] = useState([
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
  ]);

  useEffect(() => {
    setLoading(true);
    getData(amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue, setData, setTotalAmount);
    localStorage.setItem('is-asc', isOrderAsc);
    localStorage.setItem('data-key', dataKey);
    //
    setLoading(false);
  }, [amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue]);

  return (
    <div className="table" id="table">
      <div className="table-header">
        <div className="table-header-row">
          {countriesTableColumnsConfig.map((column) => (
            <HeaderCell
              key={column.key}
              column={column}
              setShowFilter={setShowFilter}
              setDataKey={setDataKey}
              isOrderAsc={isOrderAsc}
              setOrderAsc={setOrderAsc}
              dataKey={dataKey}
              countriesTableColumnsConfig={countriesTableColumnsConfig}
              setCountriesTableColumnsConfig={setCountriesTableColumnsConfig}
            />
          ))}
        </div>
      </div>
      <TableRows data={data} loading={loading} columnsConfig={countriesTableColumnsConfig} dataKey={dataKey} />
      <Pagination
        setCurrentPage={setCurrentPage}
        setAmountElOnPage={setAmountElOnPage}
        amountElOnPage={amountElOnPage}
        totalAmount={totalAmount}
      />
      {showFilter && <Filter setShowFilter={setShowFilter} dataKey={dataKey} setFilterValue={setFilterValue} />}
    </div>
  );
};

export { Table };

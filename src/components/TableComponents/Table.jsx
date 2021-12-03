import { React } from 'react';
import { useState, useEffect } from 'react';
import { HeaderCell } from '../HeaderComponents/HeaderCell';
import { TableRows } from './TableRows';
import { Filter } from './Filter';
import { Pagination } from '../PaginationComponents/Pagination';
import { getData } from '../../api/requests';
import '../style.css';

const Table = () => {
  const [isOrderAsc, setOrderAsc] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [dataKey, setDataKey] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [amountElOnPage, setAmountElOnPage] = useState(20);
  const [filterValue, setFilterValue] = useState(null);
  const [showColumn, setShowColumn] = useState(true);
  const [totalAmount, setTotalAmount] = useState(null);

  const countriesTableColumnsConfig = [
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

  useEffect(() => {
    getData(amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue, setData, setTotalAmount);
    setLoading(false);
  }, [amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue]);

  const showColumnHandler = () => {
    setShowColumn(false);
  };

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
              showColumnHandler={showColumnHandler}
              showColumn={showColumn}
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

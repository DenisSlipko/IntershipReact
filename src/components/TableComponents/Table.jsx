import { React } from 'react';
import { useState, useEffect } from 'react';
import { Header } from '../HeaderComponents/Header';
import { TableRows } from './TableRows';
import { Filter } from './Filter';
import { Pagination } from '../PaginationComponents/Pagination';
import axios from 'axios';
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
    const getData = async () => {
      setLoading(true);
      const response = await axios(`http://localhost:4000/countries?`, {
        params: {
          _limit: amountElOnPage,
          _page: currentPage,
          _order: isOrderAsc,
          _sort: dataKey,
          [`${dataKey}_like`]: filterValue,
        },
      });
      setData(response.data);
    };
    getData();
    setLoading(false);
  }, [amountElOnPage, currentPage, isOrderAsc, dataKey, filterValue]);

  return (
    <div className="table" id="table">
      <Header
        columnsConfig={countriesTableColumnsConfig}
        setShowFilter={setShowFilter}
        setDataKey={setDataKey}
        isOrderAsc={isOrderAsc}
        setOrderAsc={setOrderAsc}
        dataKey={dataKey}
      />
      <TableRows
        data={data}
        loading={loading}
        columnsConfig={countriesTableColumnsConfig}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        dataKey={dataKey}
      />
      <Pagination
        setCurrentPage={setCurrentPage}
        setAmountElOnPage={setAmountElOnPage}
        amountElOnPage={amountElOnPage}
      />
      {showFilter && <Filter setShowFilter={setShowFilter} dataKey={dataKey} setFilterValue={setFilterValue} />}
    </div>
  );
};

export { Table };

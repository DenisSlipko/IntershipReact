import './style.css';
import { countriesTableColumnsConfig } from '../dataStore/config';
import { React } from 'react';
import { useState, useEffect } from 'react';
import { Header } from './Header';
import { BodyTable } from './BodyTable';
import { Pagination } from './Pagination';
import axios from 'axios';

const PaginationConfigList = [{ pageSize: '20' }, { pageSize: '50' }, { pageSize: '100' }];
const DefaultAmountEl = PaginationConfigList[0].pageSize;

const Table = () => {
  const [isOrderAsc, setOrderAsc] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [dataKey, setdataKey] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await axios('http://localhost:4000/countries');
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="table" id="table">
      <Header
        columnsConfig={countriesTableColumnsConfig}
        setShowFilter={setShowFilter}
        setdataKey={setdataKey}
        dataKey={dataKey}
      />
      <BodyTable
        data={data}
        loading={loading}
        columnsConfig={countriesTableColumnsConfig}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        dataKey={dataKey}
      />
      <Pagination />
    </div>
  );
};

export { Table };

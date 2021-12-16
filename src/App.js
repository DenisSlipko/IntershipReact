import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import { getCountries, getTotalAmount } from './store/redusers/countries.reducer';
import { COUNTRIES_LOADING } from './store/actions/types/countries.types';

const TableColumnsConfig = [
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
    label: 'Phone code',
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

const App = () => {
  const countries = useSelector(getCountries);
  const totalAmount = useSelector(getTotalAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    handleDataUpdate();
  }, []);

  const handleDataUpdate = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
    dispatchData(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue);
  };

  const dispatchData = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
    dispatch({
      type: COUNTRIES_LOADING,
      amountElOnPage: amountElOnPage,
      currentPage: currentPage,
      isOrderAsc: isOrderAsc,
      columnHeaderKey: columnHeaderKey,
      filterValue: filterValue,
    });
  };

  return (
    <Table
      columnsConfig={TableColumnsConfig}
      data={countries}
      totalAmount={totalAmount}
      onDataUpdate={handleDataUpdate}
    />
  );
};

export default App;

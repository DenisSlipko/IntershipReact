import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import { getCountries, getTotalAmount } from './store/reducers/countries.reducer';
import { fetchCountries, changeCountry } from './store/actions/countries.actions';

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
    dispatch(fetchCountries(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  };

  const handleDataChange = (country, id) => {
    dispatch(changeCountry(country, id));
  };

  return (
    <Table
      columnsConfig={TableColumnsConfig}
      data={countries}
      totalAmount={totalAmount}
      onDataUpdate={handleDataUpdate}
      onCountryChange={handleDataChange}
    />
  );
};

export default App;

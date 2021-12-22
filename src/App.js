import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import { getCountries, getTotalAmount } from './store/reducers/countries.reducer';
import { fetchCountries, updateCountry } from './store/actions/countries.actions';

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

const ValidationConfig = {
  name: {
    rules: {
      isValid: (value) => value.length < 10,
      message: 'Need less than 10 characters',
    },
    pattern: {
      value: '^[A-Za-z]*$',
      message: "You're not allowed to use special characters or numbers in your name.",
    },
  },
  iso3: {
    rules: {
      isValid: (value) => value.length <= 3,
      message: 'Need less than 4 characters.',
    },
    pattern: {
      value: '^[A-Z]*$',
      message: "You're not allowed to use special characters or numbers in your iso.",
    },
  },
  phone_code: {
    rules: {
      isValid: (value) => value.length < 10,
      message: 'Need less than 10 characters',
    },
    pattern: {
      value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,}(\s*)?$/,
      message: "You're not allowed to use special characters or numbers in your phone code.",
    },
  },
  currency: {
    rules: {
      isValid: (value) => value.length <= 3,
      message: 'Need less than 4 characters',
    },
    pattern: {
      value: '^[A-Z]*$',
      message: "You're not allowed to use special characters or numbers in your currency.",
    },
  },
  capital: {
    rules: {
      isValid: (value) => value.length < 10,
      message: 'Need less than 10 characters',
    },
    pattern: {
      value: '^[A-Za-z]*$',
      message: "You're not allowed to use special characters or numbers in your capital.",
    },
  },
};

const App = () => {
  const countries = useSelector(getCountries);
  const totalAmount = useSelector(getTotalAmount);

  const [showModal, setShowModal] = useState(false);
  const [tableRowId, setTableRowId] = useState();
  const [tableRow, setTableRow] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    handleDataRefresh();
  }, []);

  const handleDataRefresh = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
    dispatch(fetchCountries(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  };

  const handleDataChange = (country, id) => {
    dispatch(updateCountry(country, id));
  };

  const handleShowModal = (country) => {
    setTableRowId(country.id);
    const countryObject = {
      name: country.name,
      iso3: country.iso3,
      phone_code: country.phone_code,
      currency: country.currency,
      capital: country.capital,
    };
    setTableRow(countryObject);
    setShowModal(!showModal);
  };

  return (
    <Table
      columnsConfig={TableColumnsConfig}
      data={countries}
      totalAmount={totalAmount}
      validationConfig={ValidationConfig}
      tableFieldId={tableRowId}
      tableField={tableRow}
      showModal={showModal}
      onShowModal={handleShowModal}
      onDataUpdate={handleDataRefresh}
      onDataChange={handleDataChange}
    />
  );
};

export default App;

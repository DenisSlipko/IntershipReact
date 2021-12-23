import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';

import Table from './components/Table/Table';
import Modal from './components/Modal/Modal';
import { getCountries, getTotalAmount } from './store/reducers/countries.reducer';
import { fetchCountries, updateCountry } from './store/actions/countries.actions';
import { validator } from './components/Modal/validator';

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

const validationConfig = {
  name: {
    isValid: (value) => validator(value, 16, 3),
    message: 'Need more than 3 and less than 16 characters.',
    required: 'This field is required!',
  },
  iso3: {
    isValid: (value) => validator(value, 3, 2),
    message: 'Need more than 2 and less than 3 characters.',
    required: 'This field is required!',
  },
  phone_code: {
    isValid: (value) => validator(value, 12, 3),
    message: 'Need more than 3 and less than 12 characters.',
  },
  currency: {
    isValid: (value) => validator(value, 3, 2),
    message: 'Need more than 2 and less than 3 characters.',
  },
  capital: {
    isValid: (value) => validator(value, 16, 3),
    message: 'Need more than 3 and less than 16 characters.',
  },
};

const App = () => {
  const countries = useSelector(getCountries);
  const totalAmount = useSelector(getTotalAmount);

  const [showModal, setShowModal] = useState(false);
  const [tableRowId, setTableRowId] = useState();
  const [tableRow, setTableRow] = useState({});

  const rootSelector = document.getElementById('root');

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

  const handleUpdateData = (country, id) => {
    handleDataChange(country, id);
    handleShowModal(false);
  };

  return (
    <>
      <Table
        columnsConfig={TableColumnsConfig}
        data={countries}
        totalAmount={totalAmount}
        onShowModal={handleShowModal}
        onDataUpdate={handleDataRefresh}
      />
      {showModal &&
        ReactDOM.createPortal(
          <Modal
            country={tableRow}
            countryId={tableRowId}
            columnsConfig={TableColumnsConfig}
            validationConfig={validationConfig}
            onClose={handleShowModal}
            onUpdateData={handleUpdateData}
          />,
          rootSelector
        )}
    </>
  );
};

export default App;

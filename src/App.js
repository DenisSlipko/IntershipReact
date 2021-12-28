import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import ModalTableEditForm from './components/Table/ModalTableEditForm';
import { getCountries, getTotalAmount } from './store/reducers/countries.reducer';
import { fetchCountries, updateCountry } from './store/actions/countries.actions';
import { maxValue, minValue, required } from './components/hooks/useForm';
import ToastMessage from './components/ToastMessage/ToastMessage';
import { getToast } from './store/reducers/toast.reducer';

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
  const message = useSelector(getToast);

  const [countryObject, setCountryObject] = useState(null);
  const [countryId, setCountryId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    handleCountriesRefresh();
  }, []);

  const handleCountriesRefresh = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
    dispatch(fetchCountries(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  };

  const handleShowModal = (country, id) => {
    const countryObject = {
      name: {
        value: country.name,
        validators: [maxValue(16), minValue(2), required('Field required!')],
      },
      iso3: {
        value: country.iso3,
        validators: [maxValue(3), minValue(2), required('Field required!')],
      },
      phone_code: {
        value: country.phone_code,
        validators: [maxValue(11), minValue(2), required('Field required!')],
      },
      currency: {
        value: country.currency,
        validators: [maxValue(3), minValue(2), required('Field required!')],
      },
      capital: {
        value: country.capital,
        validators: [maxValue(16), minValue(2), required('Field required!')],
      },
    };

    setCountryObject(countryObject);
    setCountryId(id);
  };

  const handleCloseModal = () => {
    setCountryObject(null);
  };

  const handleCountryUpdate = (country, id) => {
    dispatch(updateCountry(country, id));
    handleCloseModal();
  };

  return (
    <>
      <Table
        columnsConfig={TableColumnsConfig}
        data={countries}
        totalAmount={totalAmount}
        onClickRow={handleShowModal}
        onDataRefresh={handleCountriesRefresh}
      />
      {countryObject && (
        <ModalTableEditForm
          dataObject={countryObject}
          dataId={countryId}
          columnsConfig={TableColumnsConfig}
          onClose={handleCloseModal}
          onUpdateData={handleCountryUpdate}
        />
      )}
      {Object.keys(message).length !== 0 && <ToastMessage />}
    </>
  );
};

export default App;

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '../components/Table/Table';
import ModalTableEditDialog from '../components/Modal/ModalTableEditDialog';
import { getCountries, getTotalAmount } from '../store/reducers/countries.reducer';
import { fetchCountries, updateCountry } from '../store/actions/countries.actions';
import { maxValue, minValue, required } from '../hooks/useForm';

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
  },
  {
    label: 'Currency',
    key: 'currency',
  },
  {
    label: 'Capital',
    key: 'capital',
  },
];

const Countries = () => {
  const dispatch = useDispatch();

  const countries = useSelector(getCountries);
  const totalAmount = useSelector(getTotalAmount);

  const [countryObject, setCountryObject] = useState(null);
  const [countryId, setCountryId] = useState(null);

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
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      iso3: {
        value: country.iso3,
        validators: [minValue(2), required('Iso field is required!')],
      },
      phone_code: {
        value: country.phone_code,
        validators: [maxValue(11), minValue(2)],
      },
      currency: {
        value: country.currency,
      },
      capital: {
        value: country.capital,
        validators: [maxValue(16)],
      },

    };

    setCountryObject(countryObject);
    setCountryId(id);
  };

  const handleCloseModal = () => {
    setCountryObject(null);
    setCountryId(null);
  };

  const handleCountryUpdate = (updatedCountry) => {
    dispatch(updateCountry(updatedCountry, countryId));
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
        <ModalTableEditDialog
          dataObject={countryObject}
          columnsConfig={TableColumnsConfig}
          onClose={handleCloseModal}
          onUpdateData={handleCountryUpdate}
        />
      )}
    </>
  );
};

export default Countries;
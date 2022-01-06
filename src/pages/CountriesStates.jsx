import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '../components/Table/Table';
import { getCountriesStates, getTotalAmount } from '../store/reducers/countriesStates.reducer';
import { fetchCountriesStates, updateCountryState } from '../store/actions/countriesStates.actions';
import ModalEditDialog from '../components/TableEditDialog/TableEditDialog';
import { maxValue, minValue, required } from '../hooks/useForm';

const TableColumnsConfig = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'Country code',
    key: 'country_code',
    sortable: true,
  },
  {
    label: 'Country name',
    key: 'country_name',
  },
  {
    label: 'State code',
    key: 'state_code',
  },
];

const CountriesStates = () => {
  const dispatch = useDispatch();

  const countriesStates = useSelector(getCountriesStates);
  const totalAmount = useSelector(getTotalAmount);

  const [countriesStatesObject, setCountriesStatesObject] = useState(null);
  const [countriesStatesId, setCountriesStatesId] = useState(null);

  useEffect(() => {
    handleCountriesStatesRefresh();
  }, []);

  const handleCountriesStatesRefresh = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
   dispatch(fetchCountriesStates(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  };

  const handleShowModal = (countryStates, id) => {
    const countryStatesObject = {
      name: {
        value: countryStates.name,
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      country_code: {
        value: countryStates.country_code,
        validators: [minValue(2), required('Country code field is required!')],
      },
      country_name: {
        value: countryStates.country_name,
        validators: [maxValue(11), minValue(2)],
      },
      state_code: {
        value: countryStates.state_code,
      },
    };
    setCountriesStatesObject(countryStatesObject);
    setCountriesStatesId(id);
  };

  const handleCloseModal = () => {
    setCountriesStatesObject(null);
    setCountriesStatesId(null);
  };

  const handleCountriesStatesUpdate = (updatedCountriesStates) => {
    dispatch(updateCountryState(updatedCountriesStates, countriesStatesId));
    handleCloseModal();
  };

  return (
    <>
      <Table
        columnsConfig={TableColumnsConfig}
        data={countriesStates}
        totalAmount={totalAmount}
        onClickRow={handleShowModal}
        onDataRefresh={handleCountriesStatesRefresh}
      />
      {countriesStatesObject && (
        <ModalEditDialog
          dataObject={countriesStatesObject}
          columnsConfig={TableColumnsConfig}
          onClose={handleCloseModal}
          onUpdateData={handleCountriesStatesUpdate}
        />
      )}
    </>
  );
};


export default CountriesStates;

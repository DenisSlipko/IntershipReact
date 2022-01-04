import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '../components/Table/Table';
import { getCountriesState, getTotalAmount } from '../store/reducers/countriesState.reducer';
import { fetchCountriesState, updateCountryState } from '../store/actions/countriesState.actions';
import ModalTableEditDialog from '../components/Modal/ModalTableEditDialog';
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

const CountriesState = () => {
  const dispatch = useDispatch();

  const countriesState = useSelector(getCountriesState);
  const totalAmount = useSelector(getTotalAmount);

  const [countriesStateObject, setCountriesStateObject] = useState(null);
  const [countriesStateId, setCountriesStateId] = useState(null);

  useEffect(() => {
    handleCountriesStateRefresh();
  }, []);

  const handleCountriesStateRefresh = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
   dispatch(fetchCountriesState(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  };

  const handleShowModal = (countryState, id) => {
    const countryStateObject = {
      name: {
        value: countryState.name,
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      country_code: {
        value: countryState.country_code,
        validators: [minValue(2), required('Country code field is required!')],
      },
      country_name: {
        value: countryState.country_name,
        validators: [maxValue(11), minValue(2)],
      },
      state_code: {
        value: countryState.state_code,
      },
    };
    console.log(id)
    setCountriesStateObject(countryStateObject);
    setCountriesStateId(id);
  };

  const handleCloseModal = () => {
    setCountriesStateObject(null);
    setCountriesStateId(null);
  };

  const handleCountriesStateUpdate = (updatedCountriesState) => {
    dispatch(updateCountryState(updatedCountriesState, countriesStateId));
    handleCloseModal();
  };

  return (
    <>
      <Table
        columnsConfig={TableColumnsConfig}
        data={countriesState}
        totalAmount={totalAmount}
        onClickRow={handleShowModal}
        onDataRefresh={handleCountriesStateRefresh}
      />
      {countriesStateObject && (
        <ModalTableEditDialog
          dataObject={countriesStateObject}
          columnsConfig={TableColumnsConfig}
          onClose={handleCloseModal}
          onUpdateData={handleCountriesStateUpdate}
        />
      )}
    </>
  );
};


export default CountriesState;

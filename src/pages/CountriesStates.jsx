import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCountriesStates, getLoading, getTotalAmount } from '../store/reducers/countriesStates.reducer';
import { fetchCountriesStates, updateCountryState } from '../store/actions/countriesStates.actions';
import DialogForm from '../components/TableEditDialog/DialogForm';
import { maxValue, minValue, required } from '../hooks/useForm';
import Table from '../components/Table/Table';

const TableColumnsConfig = [
  { 
    field: "name", 
    headerName: "Name",
    flex: 1, 
  },
  { 
    field: "country_code", 
    headerName: "Country code", 
    flex: 1, 
  },
  { 
    field: "country_name", 
    headerName: "Country name",
    sortable: false, 
    flex: 1, 
  },
  { 
    field: "state_code",
    headerName: "State code",
    sortable: false, 
    flex: 1, 
  },
];

const CountriesStates = () => {
  const dispatch = useDispatch();

  const countriesStates = useSelector(getCountriesStates);
  const totalAmount = Number(useSelector(getTotalAmount));
  const isLoading = useSelector(getLoading);

  const [countryStateObject, setCountryStateObject] = useState();
  const [countryStateId, setCountryStateId] = useState();
  
  const [open, setOpen] = useState(false)

  useEffect(() => {
    handleCountriesStatesRefresh(); 
  },[]);

  const handleCountriesStatesRefresh = (amount, page, order, columnKey, filter) => {  
    dispatch(fetchCountriesStates(amount, page, order, columnKey, filter));
  }

  const handleClickRow = ({ row,id }) => {
    modalOpen()
    const countryStatesObject = {
      name: {
        value: row.name,
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      country_code: {
        value: row.country_code,
        validators: [minValue(2), required('Country code field is required!')],
      },
      country_name: {
        value: row.country_name,
        validators: [maxValue(11), minValue(2)],
      },
      state_code: {
        value: row.state_code,
      },
    };
    setCountryStateObject(countryStatesObject);
    setCountryStateId(id);
  }

  const modalOpen = () => {
    setOpen(true)
  }

  const modalClose = () => {
    setOpen(false)
  }

  const handleCountryStateUpdate = (countryState) => {
    dispatch(updateCountryState(countryState, countryStateId));
    setCountryStateObject(null)
  };

  return (
    <>
      <div style={{ width: "100%", display:'flex' }}>
        <Table
          data={countriesStates}
          totalAmount={totalAmount}
          columnsConfig={TableColumnsConfig}
          isLoading={isLoading}
          onDataRefresh={handleCountriesStatesRefresh}
          onRowClick={handleClickRow}
        />
        {countryStateObject && <DialogForm 
          dataObject={countryStateObject}
          dataConfig={TableColumnsConfig}
          openDialog={open}
          onUpdateData={handleCountryStateUpdate}
          onCloseDialog={modalClose}
        />}
      </div>
    </>
  );
};

export default CountriesStates;

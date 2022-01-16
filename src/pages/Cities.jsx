import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCities, getLoading, getTotalAmount } from '../store/reducers/cities.reducer';
import { fetchCities, updateCity } from '../store/actions/cities.actions';
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
    field: "state_code", 
    headerName: "State code", 
    flex: 1,
  },
  { 
    field: "country_code", 
    headerName: "Country code",
    sortable: false,
    flex: 1, 
  },
  { 
    field: "country_name",
    headerName: "Country name",
    sortable: false, 
    flex: 1,
  },
];

const Cities = () => {
  const dispatch = useDispatch();

  const cities = useSelector(getCities);
  const totalAmount = parseFloat(useSelector(getTotalAmount), 10);
  const isLoading = useSelector(getLoading);

  const [cityObject, setCityObject] = useState();
  const [cityId, setCityId] = useState();

  const [open, setOpen] = useState(false)

  useEffect(() => {
    handleCitiesRefresh(); 
  },[]);

  const handleCitiesRefresh = (amount, page, order, columnKey, filter) => {  
    dispatch(fetchCities(amount, page, order, columnKey, filter));
  }

  const handleClickRow = ({ row,id }) => {
    modalOpen()
    const cityObject = {
      name: {
        value: row.name,
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      state_code: {
        value: row.state_code,
        validators: [minValue(2), required('State code field is required!')],
      },
      country_code: {
        value: row.country_code,
        validators: [maxValue(11), minValue(2)],
      },
      country_name: {
        value: row.country_name,
      },
    };

    setCityObject(cityObject);
    setCityId(id);
  };

  const modalOpen = () => {
    setOpen(true)
  }

  const modalClose = () => {
    setOpen(false)
  }

  const handleCityUpdate = (countryState) => {
    dispatch(updateCity(countryState, cityId));
    setCityObject(null)
  };

  return (
    <>
      <div style={{ width: "100%", display:'flex' }}>
        <Table
          data={cities}
          totalAmount={totalAmount}
          columnsConfig={TableColumnsConfig}
          isLoading={isLoading}
          onDataRefresh={handleCitiesRefresh}
          onRowClick={handleClickRow}
        />
        {cityObject && <DialogForm 
          dataObject={setCityObject}
          dataConfig={TableColumnsConfig}
          openDialog={open}
          onUpdateData={handleCityUpdate}
          onCloseDialog={modalClose}
        />}
      </div>
    </>
  );
};

export default Cities;
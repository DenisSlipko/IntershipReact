import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '../components/Table/Table';
import { getCities, getTotalAmount } from '../store/reducers/cities.reducer';
import { fetchCities, updateCity } from '../store/actions/cities.actions';
import TableEditDialog from '../components/TableEditDialog/TableEditDialog';
import { maxValue, minValue, required } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { DEFAULT_AMOUNT_EL } from '../constants/constants';

const TableColumnsConfig = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
  },
  {
    label: 'State code',
    key: 'state_code',
    sortable: true,
  },
  {
    label: 'Country code',
    key: 'country_code',
  },
  {
    label: 'Country name',
    key: 'country_name',
  },
];

const Cities = () => {
  const dispatch = useDispatch();

  const cities = useSelector(getCities);
  const totalAmount = useSelector(getTotalAmount);

  const [cityObject, setCityObject] = useState(null);
  const [cityId, setCityId] = useState(null);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const amountElOnPage = searchParams.get('amount') || DEFAULT_AMOUNT_EL;
  const currentPage = searchParams.get('page') || 1;
  const isOrderAsc = searchParams.get('sort');
  const columnHeaderKey = searchParams.get('column');
  const filterValue = searchParams.get('filter');

  useEffect(() => {
    dispatch(fetchCities(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  }, [amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue]);

  const handleShowModal = (city, id) => {
    const cityObject = {
      name: {
        value: city.name,
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      state_code: {
        value: city.state_code,
        validators: [minValue(2), required('State code field is required!')],
      },
      country_code: {
        value: city.country_code,
        validators: [maxValue(11), minValue(2)],
      },
      country_name: {
        value: city.country_name,
      },
    };

    setCityObject(cityObject);
    setCityId(id);
  };

  const handleCloseModal = () => {
    setCityObject(null);
    setCityId(null);
  };

  const handleCityUpdate = (updatedCity) => {
    dispatch(updateCity(updatedCity, cityId));
    handleCloseModal();
  };

  return (
    <>
      <Table
        columnsConfig={TableColumnsConfig}
        data={cities}
        totalAmount={totalAmount}
        filter={filterValue}
        order={isOrderAsc}
        columnName={columnHeaderKey}
        amount={amountElOnPage}
        page={currentPage}
        searchParams={searchParams}
        onClickRow={handleShowModal}
      />
      {cityObject && (
        <TableEditDialog
          dataObject={cityObject}
          columnsConfig={TableColumnsConfig}
          onClose={handleCloseModal}
          onUpdateData={handleCityUpdate}
        />
      )}
    </>
  );
};

export default Cities;
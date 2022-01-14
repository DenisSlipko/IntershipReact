import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import Table from '../components/Table/Table';
import TableEditDialog from '../components/TableEditDialog/TableEditDialog';
import { getCountries, getTotalAmount } from '../store/reducers/countries.reducer';
import { fetchCountries, updateCountry } from '../store/actions/countries.actions';
import { maxValue, minValue, required } from '../hooks/useForm';
import { getIsLogin } from '../store/reducers/authorization.reducer';
import { DEFAULT_AMOUNT_EL } from '../constants/constants';

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

  const history = useHistory();

  const location = useLocation();

  const countries = useSelector(getCountries);
  const totalAmount = useSelector(getTotalAmount);
  const isLogin = useSelector(getIsLogin)

  const [countryObject, setCountryObject] = useState(null);
  const [countryId, setCountryId] = useState(null);

  const urlParamsObject = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);

    const amount = searchParams.get('amount') || DEFAULT_AMOUNT_EL;
    const page = searchParams.get('page') || 1;
    const order = searchParams.get('sort');
    const columnName = searchParams.get('column');
    const filter = searchParams.get('filter');

    return { amount, page, order, columnName, filter }
  }, [location])

  useEffect(() => {
    handleCountriesRefresh(
      urlParamsObject.amount, 
      urlParamsObject.page, 
      urlParamsObject.order, 
      urlParamsObject.columnName, 
      urlParamsObject.filter
    ); 
  }, []);

  const handleCountriesRefresh = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set('sort', isOrderAsc);
    searchParams.set('column', columnHeaderKey);
    searchParams.set('amount', amountElOnPage);
    searchParams.set('page', currentPage);
    if (filterValue !== null) {
      searchParams.set('filter', filterValue);
    }
    history.push({ search: searchParams.toString() })

    dispatch(fetchCountries(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue)); 
  }

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
        urlParamsObject={urlParamsObject}
        onDataRefresh={handleCountriesRefresh}
        onClickRow={handleShowModal}
      />
      {countryObject && isLogin && (
        <TableEditDialog
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
import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { getCountries, getLoading, getTotalAmount } from '../store/reducers/countries.reducer';
import { fetchCountries, updateCountry } from '../store/actions/countries.actions';
import { maxValue, minValue, required } from '../hooks/useForm';
import { getIsLogin } from '../store/reducers/authorization.reducer';
import { DEFAULT_AMOUNT_EL } from '../constants/constants';
import TableEditDialog from '../components/TableEditDialog/TableEditDialog';
import Table from '../components/Table/Table';

const TableColumnsConfig = [
  { 
    field: "name", 
    headerName: "Name", 
    flex: 1, 
  },
  { 
    field: "iso3", 
    headerName: "Iso", 
    flex: 1, 
  },
  { 
    field: "phone_code", 
    headerName: "Phone code",
    sortable: false, 
    flex: 1, 
  },
  { 
    field: "currency",
    headerName: "Currency",
    sortable: false, 
    flex: 1, 
  },
  { 
    field: "capital", 
    headerName: "Capital", 
    sortable: false, 
    flex: 1, 
  }
];

const Countries = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  
  const countries = useSelector(getCountries);
  const totalAmount = parseFloat(useSelector(getTotalAmount), 10);
  const isLogin = useSelector(getIsLogin);
  const isLoading = useSelector(getLoading);

  const [countryObject, setCountryObject] = useState();
  const [countryId, setCountryId] = useState();
  const [open, setOpen] = useState(false)

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

  const handleCountriesRefresh = (amount, page, order, columnKey, filter) => {
    const searchParams = new URLSearchParams(location.search);
    
    if (order) {
    searchParams.set('sort', order);
    } else {
      searchParams.delete('sort');
    }
    if (columnKey) {
    searchParams.set('column', columnKey);
    } else {
      searchParams.delete('column');
    }
    searchParams.set('amount', amount);
    searchParams.set('page', page);
    if (filter) {
      searchParams.set('filter', filter);
    } else {
      searchParams.delete('filter');
    }

    history.push({ search: searchParams.toString() })
    
    dispatch(fetchCountries(amount, page, order, columnKey, filter));
  }

  const handleClickRow = ({ row,id }) => {
    modalOpen();

    const countryStatesObject = {
      name: {
        value: row.name,
        validators: [maxValue(16), minValue(2), required('Name field is required!')],
      },
      iso3: {
        value: row.iso3,
        validators: [minValue(2), required('Country code field is required!')],
      },
      phone_code: {
        value: row.phone_code,
        validators: [maxValue(11), minValue(2)],
      },
      currency: {
        value: row.currency,
      },
      capital: {
        value: row.capital,
      },
    };

    setCountryObject(countryStatesObject);
    setCountryId(id);
  }

  const modalOpen = () => {
    setOpen(true)
  }

  const modalClose = () => {
    setOpen(false)
  }

  const handleCountryUpdate = (values) => {
    dispatch(updateCountry(values, countryId));

    setCountryObject(null)
  };

  return (
    <div style={{ width: "100%", display:'flex' }}>
      <Table
        data={countries}
        totalAmount={totalAmount}
        columnsConfig={TableColumnsConfig}
        initialParams={urlParamsObject}
        isLoading={isLoading}
        onDataRefresh={handleCountriesRefresh}
        onRowClick={handleClickRow}
      />
          
      {countryObject && isLogin && <TableEditDialog 
        dataObject={countryObject}
        dataConfig={TableColumnsConfig}
        openDialog={open}
        onUpdateData={handleCountryUpdate}
        onCloseDialog={modalClose}
      />}
    </div>
  );
};

export default Countries;
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './components/Table/Table';
import { countriesData } from './api/requests';

export const TableColumnsConfig = [
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
    label: 'Phone сode',
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
  const columnHeader = useSelector(({ reduxState }) => reduxState.columnHeader);
  const isOrderAsc = useSelector(({ reduxState }) => reduxState.isAsc);
  const currentPage = useSelector(({ reduxState }) => reduxState.page);
  const amountElOnPage = useSelector(({ reduxState }) => reduxState.amount);
  const filterValue = useSelector(({ reduxState }) => reduxState.filterValue);
  const data = useSelector(({ reduxState }) => reduxState.countries);
  const totalAmount = useSelector(({ reduxState }) => reduxState.total);
  const dispatch = useDispatch();

  localStorage.setItem('is-asc', isOrderAsc);
  localStorage.setItem('data-key', columnHeader);

  useEffect(() => {
    dispatch(countriesData(amountElOnPage, currentPage, isOrderAsc, columnHeader, filterValue));
  }, [amountElOnPage, currentPage, isOrderAsc, columnHeader, filterValue]);

  return (
    <Table
      columnHeader={columnHeader}
      isOrderAsc={isOrderAsc}
      amountElOnPage={amountElOnPage}
      filterValue={filterValue}
      data={data}
      totalAmount={totalAmount}
    />
  );
};

export default App;

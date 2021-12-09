import Table from './components/Table/Table';
import { countriesData } from './api/requests';

export const loadingData = async (
  amountElOnPage,
  currentPage,
  isOrderAsc,
  columnName,
  filterValue,
  setData,
  setTotalAmount
) => {
  const [data, amount] = await countriesData(amountElOnPage, currentPage, isOrderAsc, columnName, filterValue);
  setData(data);
  setTotalAmount(amount);
  localStorage.setItem('is-asc', isOrderAsc);
  localStorage.setItem('data-key', columnName);
};

const App = () => {
  return <Table />;
};

export default App;

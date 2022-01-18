import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { DEFAULT_AMOUNT_EL } from '../../constants/constants';
import useDidUpdate from '../../hooks/useDidUpdate';

const Table = ({ data, totalAmount, columnsConfig, initialParams, isLoading, onDataRefresh, onRowClick }) => {
  const [columnHeaderKey, setColumnHeaderKey] = useState(initialParams?.headerName);
  const [isOrderAsc, setIsOrderAsc] = useState(initialParams?.order);
  const [filterValue, setFilterValue] = useState(initialParams?.filter);
  const [currentPage, setCurrentPage] = useState((parseInt(initialParams?.page, 10 )) || 1);
  const [amountElOnPage, setAmountElOnPage] = useState((parseInt(initialParams?.amount, 10 )) || DEFAULT_AMOUNT_EL);

  useDidUpdate(() => {
    onDataRefresh(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue);
  }, [amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue]);

  const handleSortModelChange = (sortModel) => {
    if (sortModel.length === 0) {
      setColumnHeaderKey(null)
      setIsOrderAsc(null);
    } else {
      setColumnHeaderKey(sortModel[0].field);
      setIsOrderAsc(sortModel[0].sort);
    }
  }

  const handleFilterValueChange = (filter) => {
    setFilterValue(filter.items[0].value)
    setColumnHeaderKey(filter.items[0].columnField)  
  } 

  const handlePageChange = (page) => { 
    setCurrentPage(page + 1);
  };

  const handlePageSizeChange = (amount) => {
    setAmountElOnPage(amount);
  };

  return (
    <DataGrid  
      autoHeight
      rows={data}
      columns={columnsConfig}
      pageSize={amountElOnPage}
      rowCount={totalAmount}
      loading={isLoading}
      rowsPerPageOptions={[20, 50, 100]}
      page={currentPage - 1}
      filterValueMode="server"
      sortingMode="server"
      paginationMode="server"
      onRowClick={onRowClick}
      onFilterModelChange={handleFilterValueChange}
      onSortModelChange={handleSortModelChange}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
    />
  );
};

export default Table;

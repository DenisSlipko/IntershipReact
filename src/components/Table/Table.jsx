import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { DEFAULT_AMOUNT_EL } from '../../constants/constants';

const Table = ({ data, totalAmount, columnsConfig, initialParams, onDataRefresh, onRowClick }) => {
  const [columnHeaderKey, setColumnHeaderKey] = useState(initialParams?.headerName);
  const [isOrderAsc, setIsOrderAsc] = useState(initialParams?.order);
  const [filterValue, setFilterValue] = useState(initialParams?.filter);
  const [currentPage, setCurrentPage] = useState(parseFloat((initialParams?.page) || 1), 10);
  const [amountElOnPage, setAmountElOnPage] = useState(parseFloat((initialParams?.amount) || DEFAULT_AMOUNT_EL), 10);

  useEffect(() => {
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

  const onfilterValueChange = (filter) => {
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
      rows={data}
      columns={columnsConfig}
      pageSize={amountElOnPage}
      rowsPerPageOptions={[20, 50, 100]}
      autoHeight={true}
      page={currentPage - 1}
      checkboxSelection={true}
      filterValueMode="server"
      onfilterValueModelChange={onfilterValueChange}
      sortingMode="server"
      onSortModelChange={handleSortModelChange}
      paginationMode="server"
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
      onRowClick={onRowClick}
      rowCount={totalAmount}
    />
  );
};

export default Table;

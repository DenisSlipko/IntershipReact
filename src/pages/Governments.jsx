import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Table from '../components/Table/Table';
import { getGovernments, getTotalAmount } from '../store/reducers/governments.reducer';
import { fetchGovernments, updateGovernment } from '../store/actions/governments.actions';
import ModalTableEditDialog from '../components/Table/ModalTableEditDialog';
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
    sortable: false,
  },
  {
    label: 'State code',
    key: 'state_code',
    sortable: false,
  },
];

const Governments = () => {
  const governments = useSelector(getGovernments);
  const totalAmount = useSelector(getTotalAmount);

  const [governmentObject, setGovernmentObject] = useState(null);
  const [governmentId, setGovernmentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    handleGovernmentsRefresh();
  }, []);

  const handleGovernmentsRefresh = (amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue) => {
    dispatch(fetchGovernments(amountElOnPage, currentPage, isOrderAsc, columnHeaderKey, filterValue));
  };

  const handleShowModal = (government, id) => {
    const governmentObject = {
      name: {
        value: government.name,
        validators: [maxValue(16), minValue(2), required('Field required!')],
      },
      country_code: {
        value: government.country_code,
        validators: [minValue(2), required('Field required!')],
      },
      country_name: {
        value: government.country_name,
        validators: [maxValue(11), minValue(2)],
      },
      state_code: {
        value: government.state_code,
      },
    };

    setGovernmentObject(governmentObject);
    setGovernmentId(id);
  };

  const handleCloseModal = () => {
    setGovernmentObject(null);
    setGovernmentId(null);
  };

  const handleGovernmentUpdate = (updatedGovernment) => {
    dispatch(updateGovernment(updatedGovernment, governmentId));
    handleCloseModal();
  };

  return (
    <>
      <Table
        columnsConfig={TableColumnsConfig}
        data={governments}
        totalAmount={totalAmount}
        onClickRow={handleShowModal}
        onDataRefresh={handleGovernmentsRefresh}
      />
      {governmentObject && (
        <ModalTableEditDialog
          dataObject={governmentObject}
          columnsConfig={TableColumnsConfig}
          onClose={handleCloseModal}
          onUpdateData={handleGovernmentUpdate}
        />
      )}
    </>
  );
};


export default Governments;

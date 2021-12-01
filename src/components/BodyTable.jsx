import { React } from 'react';
import { Filter } from './Filter';

const BodyTable = ({ data, loading, columnsConfig, showFilter, setShowFilter, dataKey }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {data.map((element) => (
        <div className="table-row" key={element.id}>
          {columnsConfig.map((column) => (
            <div className="table-row__cell" key={element[column.key]}>
              {element[column.key]}
            </div>
          ))}
        </div>
      ))}
      {showFilter ? <Filter setShowFilter={setShowFilter} dataKey={dataKey} /> : null}
    </>
  );
};

export { BodyTable };

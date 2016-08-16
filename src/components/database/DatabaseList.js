import React, {PropTypes} from 'react';
import DatabaseListRow from './DatabaseListRow';

const DatabaseList = ({databases}) => {
  return (
    <table className="bordered highlight">
      <thead>
      <tr>
        <th>Name</th>
        <th>URL</th>
        <th>Vendor</th>
        <th>Domains</th>
      </tr>
      </thead>
      <tbody>
      {databases.map(database =>
        <DatabaseListRow database={database} />
      )}
      </tbody>
    </table>
  );
};

DatabaseList.propTypes = {
  databases: PropTypes.array.isRequired
};

export default DatabaseList;

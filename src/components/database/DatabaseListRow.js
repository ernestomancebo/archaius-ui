import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DatabaseListRow = ({database}) => {
  return (
    <tr>
      <td><Link to={'/database/' + database.id}>{database.name}</Link></td>
      <td>{database.url}</td>
      <td>{database.vendor}</td>
      <td>{database.associatedDomains}</td>
    </tr>
  );
};

DatabaseListRow.propTypes = {
  database: PropTypes.object.isRequired
};

export default DatabaseListRow;

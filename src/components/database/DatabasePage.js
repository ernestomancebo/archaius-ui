import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/databaseActions';
import DatabaseList from './DatabaseList';
import {browserHistory} from 'react-router';

class DatabasePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    let me = this;

    me.state = {
      database: {name: ""}
    };

    me.redirectToAddDatabasePage = me.redirectToAddDatabasePage.bind(me);
  }

  redirectToAddDatabasePage() {
    browserHistory.push('/database');
  }

  render() {
    let me = this;
    const {databases} = me.props;

    return (
      <div>
        <h1>Data Bases</h1>
        <input
          type="submit"
          value="Add Data Base"
          className="waves-effect waves-light btn"
          onClick={me.redirectToAddDatabasePage}
        />
        <DatabaseList databases={databases} />
      </div>
    );
  }
}

DatabasePage.propTypes = {
  databases:  PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    databases: state.databases
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DatabasePage);

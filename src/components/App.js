import React, {PropTypes} from 'react';
import Header from './common/Header';
import NavBar from './common/NavigationBar';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <main className="container">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);

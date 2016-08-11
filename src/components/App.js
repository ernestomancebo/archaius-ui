// import React, {PropTypes} from 'react';
import React from 'react';
import Header from './common/Header';
import NavBar from './common/NavigationBar';

// import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default App;

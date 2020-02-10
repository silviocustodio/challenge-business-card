import React, { Component } from 'react';
import Header from '../common/Header';
import PropTypes from 'prop-types';
// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
App.contextTypes = {
    store: PropTypes.object.isRequired
  }

export default App;
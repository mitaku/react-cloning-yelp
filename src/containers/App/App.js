import React, { PropTypes } from 'react';
import { Router } from 'react-router';

class App extends React.Component {
  content() {
    return (<Router />)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
  }
}


import React, { PropTypes } from 'react';
import { Router } from 'react-router';

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  content() {
    return (<Router
        history={this.props.history} />)
  }

  render() {
    return (
      <div style={{ height: '100%' }}>
        <h1>content</h1>
        {this.content}
      </div>
    )
  }
}

export default App;

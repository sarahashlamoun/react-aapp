import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "black"}}>Rainbow</h1>
 
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));




import logo from './logo.svg';
import './App.css';
import React from 'react';

import MyComponent from './components/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        Heloworld with reactjs
        <MyComponent></MyComponent>
      </div>
    );
  }
}



// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Heloworld with reactjs
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>


export default App;

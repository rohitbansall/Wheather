import React from 'react';
import Nav from './Components/Nav';
import Store from './Components/StorePrevdata';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Store />  
    </div>
  );
}

export default App;

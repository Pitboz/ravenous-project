import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar.js';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <div className="App">
      <div className='title'><h3>ravenous</h3></div>
      <header className="App-header">
        <SearchBar />
      </header>
      <BusinessList />
    </div>
  );
}

export default App;

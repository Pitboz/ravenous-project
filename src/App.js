import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar.js';
import BusinessList from './components/BusinessList';

function App() {

  const [currentBusinessList, setBusinessList] = useState("");
  
  function businessListHandler(businessList){
    setBusinessList(businessList);
  }

  return (
    <div className="App">
      <div className='title'><h3>ravenous</h3></div>
      <header className="App-header">
        <SearchBar businessList={businessListHandler}/>
      </header>
      <BusinessList array={currentBusinessList}/>
    </div>
  );
}

export default App;

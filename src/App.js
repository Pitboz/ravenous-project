import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar.js';
import BusinessList from './components/BusinessList';
import logo from './assets/media/pexels-faruk-tokluoğlu-16626497.jpg'

const testBusiness = {
  img: logo,
  name: 'MarginOtto Pizzeria',
  address: 'Somewhere in New York, 23',
  city: 'New York',
  state: 'NY', 
  zipcode: '12345',
  category: 'Test Category',
  rating: '4.5 stars',
  reviewCount: '90 reviews'
};

const testArray = new Array(6).fill(testBusiness);
console.log('Test Array');
console.log(testArray);

function App() {
  return (
    <div className="App">
      <div className='title'><h3>ravenous</h3></div>
      <header className="App-header">
        <SearchBar />
      </header>
      <BusinessList businesses={testArray}/>
    </div>
  );
}

export default App;

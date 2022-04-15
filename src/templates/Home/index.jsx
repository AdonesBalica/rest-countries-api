import './styles.css';
import React, { useEffect, useState } from 'react';
import consumApi from '../../consumApi';
import Header from '../../components/Header';
import Main from '../../components/Main';

function App() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      const response = await consumApi.getCountriesList();
      setAllCountries(response);
    };

    loadCountries();
  }, []);

  allCountries.length >= 1 && console.log(allCountries);
  return (
    <div className="App">
      <Header />
      <Main />
      <div>{allCountries.length >= 1 && allCountries[0].items[0].name}</div>
    </div>
  );
}

export default App;

import './styles.css';
import React, { useEffect, useState } from 'react';
import consumApi from '../../consumApi';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Home() {
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
      <Main allCountries={allCountries} />
    </div>
  );
}

export default Home;

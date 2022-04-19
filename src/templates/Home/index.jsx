import './styles.css';
import React, { useEffect, useState } from 'react';
import consumApi from '../../consumApi';
import Header from '../../components/Header';
import Main from '../../components/Main';

function Home() {
  const [allCountries, setAllCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const loadCountries = async () => {
      const response = await consumApi.getCountriesList();
      setAllCountries(response);
    };

    loadCountries();
  }, []);

  allCountries.length >= 1 && console.log(allCountries);
  return (
    <div className={`App ${darkMode ? 'darkModeBackgroung' : ''}`}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Main darkMode={darkMode} allCountries={allCountries} />
    </div>
  );
}

export default Home;

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
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const setTheme = () => {
      const flag = localStorage.getItem('darkMode');
      switch (flag) {
        case 'false':
          setDarkMode(false);
          break;
        case 'true':
          setDarkMode(true);
          break;
        default:
          break;
      }
    };
    setTheme();
  }, []);

  useEffect(() => {
    const loadCountries = async () => {
      const response = await consumApi.getCountriesList();
      setAllCountries(response);
    };
    loadCountries();
  }, []);

  return (
    <div className={`Home ${darkMode ? 'darkModeBackgroung' : ''}`}>
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Main darkMode={darkMode} allCountries={allCountries} />
    </div>
  );
}

export default Home;

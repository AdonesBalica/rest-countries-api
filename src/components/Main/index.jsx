import React, { useState } from 'react';
import './styles.css';
import CardCoutries from '../CardCountries/index';
import P from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

//eslint-disable-next-line
function Main({ allCountries, darkMode }) {
  const [filtersBySelectOrInputText, setFiltersBySelectOrInputText] = useState([]);

  const handleChange = (event) => {
    if (event.target.value === 'FilterByRegion') return setFiltersBySelectOrInputText(allCountries);
    const selectFilter = allCountries[0].items.filter((item) => item.region == event.target.value);
    // tentaremos fazer um filter aqui com base na option selecionada;
    setFiltersBySelectOrInputText([{ slug: 'select', items: [...selectFilter] }]);
  };

  const handleInputChange = (event) => {
    const searchTextInput = allCountries[0].items.filter((item) =>
      item.name.toLowerCase().includes(event.target.value.toLowerCase()),
    );
    setFiltersBySelectOrInputText([{ slug: 'searchTextInput', items: [...searchTextInput] }]);
  };

  return (
    <main className={`main--container ${darkMode ? 'darkModeBackgroung' : ''}`}>
      <div className="main--input--select">
        <div className="main--container--input">
          <AiOutlineSearch className={`main--icon--search ${darkMode ? 'darkModeInput' : ''}`} />
          <input
            className={`main--input ${darkMode ? 'darkModeInput' : ''}`}
            type="text"
            placeholder="Search for a country..."
            onChange={() => handleInputChange(event)}
          />
        </div>
        <div className="main--container--select">
          <select
            name="select-countries"
            className={`main--select ${darkMode ? 'darkModeInput' : ''}`}
            id="select-countries"
            onChange={(event) => handleChange(event)}
          >
            <option value="FilterByRegion" name="FilterByRegion">
              Filter By Region
            </option>
            <option value="Africa" name="africa">
              Africa
            </option>
            <option value="Americas" name="america">
              America
            </option>
            <option value="Asia" name="asia">
              Asia
            </option>
            <option value="Europe" name="europe">
              Europe
            </option>
            <option value="Oceania" name="oceania">
              Oceania
            </option>
          </select>
        </div>
      </div>
      {filtersBySelectOrInputText.length === 0 ? (
        <CardCoutries allCountries={allCountries} darkMode={darkMode} />
      ) : (
        <CardCoutries allCountries={filtersBySelectOrInputText} darkMode={darkMode} />
      )}
    </main>
  );
}

Main.propTypes = {
  allCountries: P.array,
  darkMode: P.bool,
};

export default Main;

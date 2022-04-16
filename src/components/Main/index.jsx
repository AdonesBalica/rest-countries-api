import React from 'react';
import './styles.css';
import CardCoutries from '../CardCountries/index';
import P from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';

function Main({ allCountries }) {
  return (
    <main className="main--container">
      <div className="main--input--select">
        <div className="main--container--input">
          <AiOutlineSearch className="main--icon--search" />
          <input className="main--input" type="text" placeholder="Search for a country..." />
        </div>
        <div className="main--container--select">
          <select name="select-countries" className="main--select" id="select-countries">
            <option value="value">Filter By Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>
      <CardCoutries allCountries={allCountries} />
    </main>
  );
}

Main.propTypes = {
  allCountries: P.array,
};

export default Main;

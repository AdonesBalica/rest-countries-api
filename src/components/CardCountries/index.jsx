import React from 'react';
import P from 'prop-types';
import './styles.css';

function CardCountries({ allCountries, darkMode }) {
  return (
    <section className={`cards--container ${darkMode ? 'darkModeCard' : ''}`}>
      {allCountries.length >= 1 &&
        allCountries[0].items.map((item, key) => (
          <div className="countrie--infor" key={key}>
            <div className="countrie--flag--container">
              <img src={item.flags.png} className="countrie--flag" alt={item.name} />
            </div>
            <div className="countries--details">
              <p className="countries--name">{item.name}</p>
              <p className="countries--population">
                <span>Population:</span> {item.population}
              </p>
              <p className="countries--region">
                <span>Region:</span> {item.region}
              </p>
              <p className="countries--capital">
                <span>Capital:</span> {item.capital}
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}

CardCountries.propTypes = {
  allCountries: P.array,
  items: P.shape({
    item: P.array,
  }),
  darkMode: P.bool,
};

export default CardCountries;

import React from 'react';
import P from 'prop-types';
import './styles.css';

function CardCountries({ allCountries }) {
  return (
    <>
      {allCountries.length >= 1 &&
        allCountries[0].items.map((item, key) => (
          <div key={key} className="card--container">
            <div className="card--content">
              <div className="card--flag--container">
                <img src={item.flag} alt={`flag ${item.name}`} />
              </div>
              <div className="card-countrie--info">
                <div className="card--name">{item.name}</div>
                <div className="card--population">
                  <span>Population:</span> {item.population}
                </div>
                <div className="card--region">
                  <span>Region: </span>
                  {item.region}
                </div>
                <div className="card--capital">
                  <span>Capital:</span> {item.capital}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

CardCountries.propTypes = {
  allCountries: P.array,
  items: P.shape({
    item: P.array,
  }),
};

export default CardCountries;

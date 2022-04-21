import React, { useEffect, useState } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import consumApi from '../../consumApi';
import Header from '../../components/Header/index';

function AboutFlag() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const code = window.location.hash.replace('#', '');
    const loadDetails = async () => {
      const response = await consumApi.getCountrieDetails(code);
      setDetails(response);
    };
    loadDetails();

    return () => {
      setDetails([]);
    };
  }, []);

  {
    details.length > 0 && console.log(details);
  }
  return (
    <section>
      <Header />
      <main>
        <div>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        {details.length > 0 && (
          <section>
            <div>
              <img src={details[0].items.flags.png} alt={details[0].items.name} />
            </div>
            <div>{details[0].items.name}</div>
            <div>
              <p>{details[0].items.nativeName}</p>
              <p>{details[0].items.population}</p>
              <p>{details[0].items.region}</p>
              <p>{details[0].items.subregion}</p>
              <p>{details[0].items.capital}</p>
            </div>
            <div>
              <p>{details[0].items.topLevelDomain}</p>
              <p>{details[0].items.currencies[0].name}</p>
              <p>{details[0].items.languages.map((item) => item.name)}</p>
            </div>
            <div>
              <p>Border Countries</p>
              <p>{details[0].items.currencies[0].name}</p>
            </div>
          </section>
        )}
      </main>
    </section>
  );
}

export default AboutFlag;

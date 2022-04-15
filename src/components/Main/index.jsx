import React from 'react';
import './styles.css';

import { AiOutlineSearch } from 'react-icons/ai';

function Main() {
  return (
    <main className="main--container">
      <div className="main--container--input">
        <AiOutlineSearch />
        <input className="main--input" type="text" placeholder="Search for a country..." />
      </div>
      {/* <select name="coutries">
        <option value="exempla"></option>
      </select> */}
      {/* dai aqui vai os componente de card */}
    </main>
  );
}

export default Main;

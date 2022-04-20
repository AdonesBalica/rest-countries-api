import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

function AboutFlag() {
  return (
    <section>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div>{window.location.hash.replace('#', '')}</div>
    </section>
  );
}

export default AboutFlag;

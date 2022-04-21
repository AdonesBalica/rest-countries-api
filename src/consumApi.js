const API_BASE = 'https://restcountries.com/v2';

async function basicFetch(endpoint) {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getCountriesList: async () => {
    return [
      {
        slug: 'all',
        items: await basicFetch(`/all`),
      },
    ];
  },
  getCountrieDetails: async (code) => {
    return [
      {
        slug: 'details',
        items: await basicFetch(`/alpha/${code}`),
      },
    ];
  },
};

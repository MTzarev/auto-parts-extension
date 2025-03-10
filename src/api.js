const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchPartDetails = (articleNumber) => {
    return fetch(`${API_URL}/articles/article-number-details/lang-id/4/country-filter-id/62/article-no/${articleNumber}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'auto-parts-catalog.p.rapidapi.com',
        'x-rapidapi-key': API_KEY
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching part details');
        }
        return response.json();
      })
      .then(data => data)
      .catch(error => {
        console.error('Error fetching part details:', error);
        return null;
      });
};
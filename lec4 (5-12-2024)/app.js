const axios = require('axios');

// Fetching data from an API
axios.get('https://api.github.com/users/octocat')
  .then(response => {
    console.log(response.data); // Display user data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

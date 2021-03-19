let APIURL = '';

switch (window.location.localhost) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3000';
    break;
  case 'tourney2021.herokuapp.com':
    APIURL = 'https://tourney2021-server.herokuapp.com';
}

export default APIURL;

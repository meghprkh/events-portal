var appServer = require('./client/server');
var apiServer = require('./server');

const PORT = process.env.PORT || 3000;
const PROD = process.env.NODE_ENV === 'production';

if (PROD) {
  apiServer(PORT);
} else {
  apiServer(PORT - 1);
  appServer(PORT);
}

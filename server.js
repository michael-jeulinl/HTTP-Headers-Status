const path = require('path');
const express = require('express');
const utils = require('./server/decodeHeader');
const axios = require('axios');

const app = express();
const publicPath = path.join(__dirname, 'build');

app.use(express.static(publicPath));

// Getting HTTP Header API entry point (bypass CORS policy)
app.get('/api/getHeader', (req, res, next) => {
  if (!req.query || !Object.keys(req.query).length) { return next(); }
  const { url } = req.query;

  // Invalid parameters
  if (!utils.isURL(url)) {
    return res.status(400).send({ error: 'only ?url=valid_url accepted' });
  }

  try {
    const promise = axios.head(url);
    promise.then(result => { return res.json(utils.decode(result)); });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {});

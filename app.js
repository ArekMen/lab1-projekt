const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Lab 1!');
});

app.listen(port, () => {
  console.log(`Aplikacja działa na porcie ${port}`);
});

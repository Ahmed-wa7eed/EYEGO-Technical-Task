const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  res.send('Hello Eyego');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

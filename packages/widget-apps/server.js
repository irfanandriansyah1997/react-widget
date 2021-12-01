const express = require('express');

const app = express(); // create express app

app.use(express.static('dist'));

// start express server on port 5000
app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000');
});

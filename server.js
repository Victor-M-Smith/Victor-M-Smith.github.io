const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(require('body-parser').json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
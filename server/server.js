const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 8080;
const { urlencoded } = require('express');

app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



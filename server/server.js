const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 8080;
const { urlencoded } = require('express');

app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use(session({
  secret: "coolBeans",
  resave: false,
  saveUninitialized: false
}))

// import routers
const userRouter = require('./routes/user-router.js');

// use routers
app.use('/api/users', userRouter);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



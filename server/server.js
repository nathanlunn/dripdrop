const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;
const { urlencoded } = require('express');

app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({extended: false}));
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(session({
  key: "dripDropUser",
  secret: "coolBeans",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24
  }
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))

// import routers
const userRouter = require('./routes/user-router.js');
const productRouter = require('./routes/product-router.js');

// use routers
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



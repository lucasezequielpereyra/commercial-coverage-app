import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from '../package.json';
import path from 'path';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import clientsRoute from './routes/clients.routes';
import authRoute from './routes/auth.routes';
import usersRoute from './routes/users.routes';

import { createRoles } from './libs/initialSetup';

const app = express();

/*  INITIAL CONFIG   */
createRoles();

/*    MIDDLEWARES   */
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

/*    TEMPLATE ENGINE     */
const viewPath = path.join(__dirname, '../views');
app.set('view engine', 'ejs');
app.set('views', viewPath);

/*    SESSION     */
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_CONNECT,
    }),
    secret: process.env.SECRET_MONGO,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      maxAge: 600000,
    },
  }),
);

app.set('pkg', pkg);
app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

/*    ROUTES   */
app.use('/api/v1/files', clientsRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', usersRoute);

app.use('/api/backoffice', (req, res) => {
  if (req.session?.token) {
    res.render('upload', {
      user: req.session.user,
      token: req.session.token,
    });
  } else {
    res.render('index');
  }
});

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

export default app;

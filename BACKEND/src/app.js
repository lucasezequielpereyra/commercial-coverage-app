import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../package.json';
import clientsRoute from './routes/clients.routes';
import { createRoles } from './libs/initialSetup';

const app = express();

/*  INITIAL CONFIG   */
createRoles();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.set('pkg', pkg);

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});

app.use('/api/v1/files', clientsRoute);

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

export default app;

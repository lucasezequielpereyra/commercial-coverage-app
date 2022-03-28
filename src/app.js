import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pkg from '../package.json';

const app = express();

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

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

export default app;

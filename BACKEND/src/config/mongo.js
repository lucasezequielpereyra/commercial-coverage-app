import mongoose from 'mongoose';

const DATABASE_CONNECT = process.env.DATABASE_CONNECT;

export const dbConnect = () => {
  mongoose
    .connect(DATABASE_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('db is connected'))
    .catch(error => console.log(error.message));
};

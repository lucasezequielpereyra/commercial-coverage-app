import 'dotenv/config';
import app from './src/app';
import { dbConnect } from './config/mongo';

const PORT = process.env.PORT || 3000;

dbConnect();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

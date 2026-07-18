import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import connectMongoDB from './src/config/mongodb.js';

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  if (process.env.DB_TYPE === 'mongo') {
    await connectMongoDB();
  }

  app.listen(PORT, () => {
    console.log(`🚀 Backend running on port ${PORT}`);
  });
};

startServer();
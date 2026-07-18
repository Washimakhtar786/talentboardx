import express from 'express';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Error Handler (Always Last)
app.use(errorHandler);

export default app;
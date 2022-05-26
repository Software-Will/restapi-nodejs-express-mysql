import express from 'express'
import morgan from 'morgan'
import languageRoutes from './routes/language.routes'

const app = express();

// Setting
app.set('port', process.env.PORT || 8000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routers
app.use('/api/languages', languageRoutes);

export default app;
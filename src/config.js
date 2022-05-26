import { config } from 'dotenv'

config(); //Pone a nuestra disposicion las variables de entorno configurador en .env

export default {
    host: process.env.HOST || '',
    database: process.env.DATABASE || '',
    user: process.env.USER || '',
    password: process.env.PASSWORD || ''
};

//Constantes de variable de entorno
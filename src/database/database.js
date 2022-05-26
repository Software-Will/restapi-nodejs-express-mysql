import mysql from 'promise-mysql'
import config from './../config'

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

/*connection.connect(err => {
    if (err) {
        console.log(`Error en la BD: ${err}`);
    } else {
        console.log('DB Ok :)');
    }
});*/

const getConnection = () => {
    return connection;
};

//export const xd = {} -> imp {xd as name} from 'direct'
module.exports = {
    getConnection
};
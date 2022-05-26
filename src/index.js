import app from './app'

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`Server Ok, Port: ${app.get('port')}`);
    });
};

main(); //Ejecucion del servidor
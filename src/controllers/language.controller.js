import { getConnection } from './../database/database'

//Funciones controller - no realizar el llamado con parametros

//Obtenemos datos - Consulta de datos - SERIA UN SEL
const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM language");
        //console.log(JSON.stringify(result)); //RowDataPacker -> JSON
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    //res.json('Ya funciona :)');
};

//GET
const getLanguage = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params; //Cuando se envia por el url
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM language WHERE id = ?", id);
        //console.log(JSON.stringify(result)); //RowDataPacker -> JSON
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    //res.json('Ya funciona :)');
};

//Metodo Post -> Para registrar datos
const addLanguage = async (req, res) => {
    try {
        //console.log(req.body);
        const { name, programmers } = req.body;

        if (name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Mal envio, llene los campos" });
        };
        //console.log(name, programmers);
        const language = { name, programmers };
        const connection = await getConnection();
        /*const result =*/ await connection.query('INSERT INTO language SET ?', language);
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send({ message: 'Lenguaje Agregado' });
    };
    //res.json('Ya funciona :)');
};

//UPDATE
const updateLanguage = async (req, res) => {
    try {
        const { id } = req.params; //Cuando se envia por el url
        const { name, programmers } = req.body;

        if (id === undefined || name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Mal envio, llene los campos" });
        };

        const language = { id, name, programmers };
        const connection = await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);
        //console.log(JSON.stringify(result)); //RowDataPacker -> JSON
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    //res.json('Ya funciona :)');
};

//DELETE
const deleteLanguage = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params; //Cuando se envia por el url
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM language WHERE id = ?", id);
        //console.log(JSON.stringify(result)); //RowDataPacker -> JSON
        res.json(result);
    } catch (err) {
        res.status(500);
        res.send(err.message);
    }
    //res.json('Ya funciona :)');
};


export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    updateLanguage,
    deleteLanguage
};

//async -> Sus procesos demoran un tiempo
//await -> Debemos esperar para que finalice la ejecucion
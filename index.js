const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();


const port = process.env.PORT || 8000;
const name = process.env.NAME || 'Alan R';

app.get ('/', (req, res) => {
    res.send(`Hello World del puerto ${port}`); 
    console.log(process.env);
});

// ``
app.listen(8000, () => {
    console.info(`DATABASE corriendo en el puerto ${port}`);
}); 

//Url para obtener nombre
app.get('/myname',(req,res) => {
    res.send(`Hello World mi nombre es ${name}`);
    console.log(proccess.env);
});

const express = require('express');
const dotenv = require('dotenv');
const app = express();


const port = process.env.port || 3000;

app.get ('/', (req, res) => {
    res.send(`Hello World del puerto ${port}`); 
    console.log(process.env);
});

// ``
app.listen(3000, () => {
    console.info(`DATABASE corriendo en el puerto ${port}`);
}); 
const express = require('express');
const app = express();
const hbs = require("hbs");
require('./hbs/helpers');


app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

// helpers

app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    res.render('home', {
        nombre: "jason",
        anio: new Date().getFullYear()
    });

});

app.get('/about', function(req, res) {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.listen(3000, () => {
    console.log("Escuchando peticiones en el puerto 3000");
});
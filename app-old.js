const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Contend-Type': 'application/json' });

        let salida = {
            nombre: 'hector',
            edad: 30,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('escuchando puerto 8080');
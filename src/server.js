//importar lib/dependencia

const express = require('express');
const path = require('path');
const pages =require('./pages.js');

// iniciando o express e arquivos estaticos
const server = express();
server
//utilizar body do req
.use(express.urlencoded({extended: true}))

//utilizarndo arquivos estaticos
.use(express.static('public'))


//configurar template engines 
//Usar assim me despensa o uso dalinha do return.sendFile

.set('views',path.join(__dirname,'views'))
.set('view engine', 'hbs')


//criando rota da aplicação
server.get('/',pages.index)
server.get('/orphanage',pages.orphanage)
server.get('/orphanages',pages.orphanages)
server.get('/create-orphanage', pages.createOrphanage)
server.post('/save-orphanage', pages.saveOrphanage)


//ligar o sv
server.listen(5500);
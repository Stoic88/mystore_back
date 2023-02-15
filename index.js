'use strict'
//importem libbreria expres
const express = require ('express');
// importem llibreria cors
const cors = require ('cors');
//importem llibreria Morgan
const morgan =require ('morgan');

//intanciem express cap a l'objecte app
const app = express();
//middlewares
//implementem cors
app.use(cors());
//implementem morgan en mode desenvolupament
app.use(morgan('dev'));
//per passar a json  en el body da objectes javaScript
app.use(express.json());
//per pasar json en el body a objecte javascript
app.use(express.urlencoded({extended:false}));
//import l'arxiu de url de product.routes
const Products = require ('./products/routes/product.routes');
//pasem l'intancia app
Products.productRoutes(app);

//executem el servidor per escoltar en el puerto 3000 i la ip localhost
app.listen(3000,'localhost',()=>{
    console.log('server listening on port %s',3000);
})
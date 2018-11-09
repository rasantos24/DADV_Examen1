const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

mongoose.connect('mongodb://rasantos24:coso1234@ds239931.mlab.com:39931/productos', function(err, res){
  if(err) throw err;
  console.log('Conectado a la BD');
});

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/producto')(app,mongoose);
var ProductCtrl = require('./controllers/productos');

var router = express.Router();
router.get('/', function(req, res) {
   res.send("Holi");
});
app.use(router);

var products = express.Router();

products.route('/products')
  .get(ProductCtrl.findAllProduct)
  .post(ProductCtrl.addProduct);

products.route('/products/:sku')
  .get(ProductCtrl.findBySKU)
  .get(ProductCtrl.findByMarca)
app.use('/api', products);

app.listen(3000, function() {
  console.log("Node server running on ds239931.mlab.com");
});

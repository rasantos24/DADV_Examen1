var mongoose = require('mongoose');
var Product = mongoose.model('Product');

//POST /api/productos – agregar un nuevo producto
exports.addProduct = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var product = new Product({
		sku: req.body.sku,
        descripccion: req.body.descripccion,
		marca: req.body.marca,
		no_estante: req.body.no_estante
	});

	product.save(function(err, product) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(product);
	});
};

//GET /api/productos – muestra todos los productos
exports.findAllProduct = function(req, res) {
	Product.find(function(err, products) {
    if(err) res.send(500, err.message);

    console.log('GET /product')
		res.status(200).jsonp(products);
	});
};

//GET /api/productos/{SKU} - muestra un producto
exports.findBySKU = function(req, res) {
	Product.findBySKU(req.params.sku, function(err, product) {
    if(err) return res.send(500, err.message);

    console.log('GET /product/' + req.params.sku);
		res.status(200).jsonp(product);
	});
};

//GET /api/productos?marca={marcadelproducto } - muestra todos los productos de una marca
exports.findByMarca = function(req, res) {
	Product.findByMarca(req.params.marca, function(err, product) {
    if(err) return res.send(500, err.message);

    console.log('GET /product/' + req.params.marca);
		res.status(200).jsonp(product);
	});
};

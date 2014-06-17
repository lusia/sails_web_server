var fs = require('fs'),
	request = require('request'),
	data,
	url = 'http://127.0.0.1:9000/product';


fs.readFile('./tools/input_data.js', function (err, data) {
	var products = JSON.parse(data),
		product = {};

	/**
	 * Normalize str to float
	 */
	for (var i = 0; i < products.length; i++) {
		product  = products[i];
		console.log(product.price, product.price.replace('.','').replace(',','.'));
		product.price = parseFloat(product.price.replace('.','').replace(',','.'));
		product.price_old = parseFloat(product.price_old.replace('.','').replace(',','.'));

		productRequest = {
			url: url,
			method: 'post',
			json: product};

		request.post(productRequest, function (error, im, response) {
			console.log(error, response);
		});
	}
});

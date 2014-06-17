/**
 * ProductController
 *
 * @module      :: Controller
 * @description    :: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	/**
	 * Display 10 sorted products on the page
	 */
	a10cheapest: function (req, res) {
		var page = req.param('page', 0);

		Product.find()
			.sort('price')
			.skip(10 * page)
			.limit(10)
			.exec(function (err, products) {
				if (err) {
					return res.send('Upps', 500);
				} else {
					res.json(products);
				}
			});
	},

	/**
	 * Display cheapest products where kids:1
	 */
	aKidsProduct: function (req, res) {
		Product.find()
			.where({ kids: 1})
			.sort('price')
			.exec(function (err, products) {
				if (err) {
					return res.send('Upps', 500);
				} else {
					res.json(products);
				}
			});
	},


	/**
	 * Display one product by requested id
	 */
	aProduct: function (req, res) {
		res.redirect('/product/' + req.param('id'));
	},
	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to ProductController)
	 */
	_config: {}


};

odoo.define('lavi_point_of_sale.models', function (require) {
"use strict";
    var models = require('point_of_sale.models');
    var _super_posmodel = models.PosModel.prototype;

    models.PosModel = models.PosModel.extend({
        initialize: function (session, attributes) {
            // New code
            var partner_model = _.find(this.models, function(model){
                return model.model === 'res.company';
            });
            var res_currency_model = _.find(this.models, function(model){
                return model.model === 'res.currency';
            });
            partner_model.fields.push('street');
			res_currency_model.loaded = function(self, currencies){
	            self.currency = currencies[0];
	            self.currency.decimals = 0;
	
	        }
            // Inheritance
            return _super_posmodel.initialize.call(this, session, attributes);
        },
    });


})

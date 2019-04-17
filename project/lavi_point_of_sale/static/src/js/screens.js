odoo.define('lavi_point_of_sale.screens', function (require) {
"use strict";
	var ajax = require('web.ajax');
	var core = require('web.core');
	var qweb = core.qweb;
	var screens = require('point_of_sale.screens');
	screens.NumpadWidget.include({
	    template:'NumpadWidgetLavi',
	    init: function(parent) {
	        this._super(parent);
	    },
	});


});
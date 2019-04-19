odoo.define('lavi_point_of_sale.screens', function (require) {
"use strict";
	var ajax = require('web.ajax');
	var core = require('web.core');
	var QWeb = core.qweb;
	var screens = require('point_of_sale.screens');
	var basewidget = require('point_of_sale.BaseWidget');
	screens.NumpadWidget.include({
	    template:'NumpadWidgetLavi',
	    init: function(parent) {
	        this._super(parent);
	    },
	});
	screens.ReceiptScreenWidget.include({
			render_receipt: function() {
					var order = this.pos.get_order();
					this.$('.pos-receipt-container').html(QWeb.render('PosTicketLavi',{
									widget:this,
									order: order,
									receipt: order.export_for_printing(),
									orderlines: order.get_orderlines(),
									paymentlines: order.get_paymentlines(),
							}));
			},
	});
	basewidget.PosBaseWidget.include({
			format_currency: function(amount,precision){
					return this.format_currency(amount,precision).split('.')[0]
			},
	});
});

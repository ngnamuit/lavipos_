# -*- coding: utf-8 -*-
from odoo import api, fields, models

class Currency(models.Model):
    _inherit = "res.currency"

    @api.multi
    @api.depends('rounding')
    def _compute_decimal_places(self):
        for currency in self:
            currency.decimal_places = 0
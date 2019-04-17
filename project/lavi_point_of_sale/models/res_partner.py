# -*- coding: utf-8 -*-

from odoo import api, fields, models


class ResPartner(models.Model):
    _inherit = 'res.partner'

    @api.model
    def create_from_ui(self, partner):
        if 'email' in partner and not partner.get('email', False):
            partner['email'] = 'no'
        return super(ResPartner, self).create_from_ui(partner)
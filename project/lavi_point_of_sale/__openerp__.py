# -*- coding: utf-8 -*-

{
    'name': 'Lavi POS',
    'version': '3.0',
    'category': 'Smartnet Own Modules',
    'author': 'smartnet',
    'website': '',
    'license': 'AGPL-3',
    'depends': [
        'product',
        'point_of_sale'
    ],
    'data': [
        'views/point_of_sale.xml',
        'views/product_product.xml',
        'views/purchase_order.xml',
    ],

    'test': [],
    'demo': [],
    'qweb': ['static/src/xml/*.xml'],
    'installable': True,
    'active': False,
    'application': True,

}

const db = require('../../config/db.config.js');
/** @namespace db.products */
const Products = db.products;

exports.findOne = (req, res) => {
    Products.findOne(
        {
            where: {id: req.params.id},
            attributes: ['id', 'name', 'description', 'price', 'gender']
        }).then(product => {
        res.json(product);
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err});
    });
};

exports.create = (req, res) => {
    Products.create({
            'name': req.body.name,
            'description': req.body.description,
            'price': req.body.price,
            'category_id': req.body.category_id,
            'brand_id': req.body.brand_id,
            'gender': req.body.gender
        },
        {
            fields: ['name', 'description', 'price', 'category_id', 'brand_id', 'gender']
        }
    ).then(
        product => {
            res.status(201).json(product);
        }
    ).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        }
    )
};

exports.findAll = (req, res) => {
    Products.findAll().then(products => {
        res.json(products.sort(function (c1, c2) {
            return c1.id - c2.id
        }))
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err})
    })
};

exports.filterByCategory = (req, res) => {
    Products.findAll(
        {
            where: {category_id: req.params.category_id},
        }).then(products => {
        res.json(products.sort(function (c1, c2) {
            return c1.id - c2.id
        }))
    }).catch(err => {
        console.log(err);
        res.status(500).json({msg: "error", details: err})
    })
};
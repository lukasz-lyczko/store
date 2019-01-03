const db = require('../../config/db.config');
/** @namespace db.brands */
const Brands = db.brands;

exports.findOne = (req, res) => {
    Brands.findOne(
        {
            where: {id: req.params.id}
        }
    ).then(brand => {
            res.json(brand);
        }
    ).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        }
    )
};

exports.create = (req, res) => {
    Brands.create({
            'name': req.body.name
        },
        {
            fields: ['name']
        }
    ).then(
        brand => {
            res.status(201).json(brand);
        }
    ).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        }
    )
};
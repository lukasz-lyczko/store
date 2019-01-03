const db = require('../../config/db.config');
/** @namespace db.categories */
const Categories = db.categories;

exports.findOne = (req, res) => {
    Categories.findOne(
        {
            where: {id: req.params.id}
        }
    ).then(category => {
            res.json(category);
        }
    ).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        }
    )
};

exports.create = (req, res) => {
    Categories.create({
            'name': req.body.name
        },
        {
            fields: ['name']
        }
    ).then(
        category => {
            res.status(201).json(category);
        }
    ).catch(err => {
            console.log(err);
            res.status(500).json({msg: "error", details: err});
        }
    )
};
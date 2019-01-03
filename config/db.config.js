const path = require('path');
const fg = require('fast-glob');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const models = fg
    .sync([path.join(__dirname, '..', '/**/*.model.js')])
    .reduce((acc, file) => {
        const name1 = path.basename(file, path.extname(file));
        const name = name1.substr(0, name1.lastIndexOf("."));
        const model = require(file)(sequelize, Sequelize);

        return Object.assign(acc, {[name]: model});
    }, {});

/** @namespace models.brands */
models.products.belongsTo(models.brands);
models.products.belongsTo(models.categories);

module.exports = Object.assign({db}, models);
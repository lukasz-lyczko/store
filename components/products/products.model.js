module.exports = (sequelize, Sequelize) => {
    return sequelize.define('products', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [2, 225]
                }
            },
            description: Sequelize.STRING,
            price: {
                type: Sequelize.DOUBLE,
                validate: {
                    isDecimal: true,
                    min: 0
                }
            },
            gender: {
                type: Sequelize.STRING,
                validate: {
                    isIn: [['F', 'M', 'U']]
                }
            }
        },
        {
            underscored: true,
            freezeTableName: true,

            // define the table's name
            tableName: 'product'
        }
    );
};
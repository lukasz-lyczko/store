module.exports = (sequelize, Sequelize) => {
    return sequelize.define('brands', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    isAlphanumeric: true,
                    len: [1, 225]
                }
            }
        },
        {
            underscored: true,
            timestamps: false,
            freezeTableName: true,

            // define the table's name
            tableName: 'brand'
        }
    );
};
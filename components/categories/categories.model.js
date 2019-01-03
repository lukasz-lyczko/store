module.exports = (sequelize, Sequelize) => {
    return sequelize.define('categories', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    isAlpha: true,
                    len: [2, 225]
                }
            }
        },
        {
            underscored: true,
            timestamps: false,
            freezeTableName: true,

            // define the table's name
            tableName: 'category'
        }
    );
};
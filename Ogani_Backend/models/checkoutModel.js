module.exports = (sequelize, DataTypes) => {
    const Checkouts = sequelize.define(
        'checkouts',
        {
            userId: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'checkouts',
            timestamps: false,
        },
    );

    Checkouts.associate = (models) => {
        Checkouts.belongsTo(models.User, { foreignKey: 'userId' });
        Checkouts.belongsTo(models.Product, { foreignKey: 'productId' });
    };

    return Checkouts;
};

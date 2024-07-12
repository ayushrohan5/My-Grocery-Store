module.exports = (sequelize, DataTypes) => {
    const Favourites = sequelize.define(
        'favourites',
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
            tableName: 'favourites',
            timestamps: false,
        },
    );

    Favourites.associate = (models) => {
        Favourites.belongsTo(models.User, { foreignKey: 'userId' });
        Favourites.belongsTo(models.Product, { foreignKey: 'productId' });
    };

    return Favourites;
};

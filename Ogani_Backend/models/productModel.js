module.exports = (sequelize, DataTypes) =>{

const Product = sequelize.define(
  'products',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    category : {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    
  },
  {
    // Other model options go here
    tableName: 'products',
    timestamps:false
  },
);
  Product.associate = (models) => {
  Product.hasMany(models.Favourites, { foreignKey: 'productId' });
};
Product.associate = (models) => {
  Product.hasMany(models.Checkouts, { foreignKey: 'productId' });
};
return Product;
}
// `sequelize.define` also returns the model
// console.log(Products === sequelize.models.products); // true

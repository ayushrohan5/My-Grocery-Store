// index.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('seq_basics', 'root', 'khusiayush1', {
    host: 'localhost',
    logging: false,
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

let db = {};
db.sequelize = sequelize;
db.Product = require('./productModel')(sequelize, DataTypes);
db.User = require('./userModel')(sequelize,DataTypes)
db.Favourites = require('./favouriteModel')(sequelize, DataTypes)
db.Checkouts = require('./checkoutModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false });

module.exports = db;

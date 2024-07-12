module.exports = (sequelize, DataTypes) =>{

    const User = sequelize.define(
      'users',
      {
        // Model attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phoneNo : {
          type: DataTypes.INTEGER,
          allowNull:false,
          
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false
        }
      },
      {
        // Other model options go here
        tableName: 'users',
        timestamps:false
      },
    );
      User.associate = (models) => {
      User.hasMany(models.Favourites, { foreignKey: 'userId' });
    };
    User.associate = (models) => {
      User.hasMany(models.Checkouts, { foreignKey: 'userId' });
    };
    return User;
    }
   
    
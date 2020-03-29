module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_fname: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    user_lname: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_goals: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    }   
  })
  return User;
};
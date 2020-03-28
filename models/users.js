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
    } 
  })
  return User;
};
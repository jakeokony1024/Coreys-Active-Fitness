module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    goals: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    firstClass: DataTypes.BOOLEAN
  });
  return user;
};

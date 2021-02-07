
module.exports = function (sequelize, DataTypes) {
  const Workout = sequelize.define("Workout", {
    name: { type: DataTypes.STRING, allowNull: false },
    type: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    distance: DataTypes.INTEGER
    
  });


  return Workout;
};
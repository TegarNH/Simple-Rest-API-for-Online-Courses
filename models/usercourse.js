const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    static associate(models) {
      UserCourse.belongsTo(models.Course, {
        foreignKey: 'course_id',
      });
      UserCourse.belongsTo(models.User, {
        foreignKey: 'users_id',
      });
    }
  }
  UserCourse.init({
    users_id: DataTypes.BIGINT,
    course_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};

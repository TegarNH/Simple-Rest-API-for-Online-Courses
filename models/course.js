const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.CourseCategory, {
        foreignKey: 'course_category_id',
      });
      Course.hasMany(models.UserCourse, {
        foreignKey: 'course_id',
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    course_category_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};

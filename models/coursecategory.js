const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CourseCategory extends Model {
    static associate(models) {
      CourseCategory.hasMany(models.UserCourse, {
        foreignKey: 'course_category_id',
      });
    }
  }
  CourseCategory.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CourseCategory',
  });
  return CourseCategory;
};

const coursesData = require('../masterdata/courses.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataCoursesToBeSeeded = coursesData.map((eachCourseData) => ({
      title: eachCourseData.title,
      course_category_id: eachCourseData.course_category_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('courses', dataCoursesToBeSeeded, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('courses', null, { truncate: true, restartIdentity: true });
  },
};

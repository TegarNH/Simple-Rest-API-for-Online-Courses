const userCoursesData = require('../masterdata/user-courses.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataUserCoursesToBeSeeded = userCoursesData.map((eachUserCourseData) => ({
      users_id: eachUserCourseData.users_id,
      course_id: eachUserCourseData.course_id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('user_courses', dataUserCoursesToBeSeeded, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('user_courses', null, { truncate: true, restartIdentity: true });
  },
};

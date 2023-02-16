const courseCategoriesData = require('../masterdata/course-categories.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataCourseCategoriesToBeSeeded = courseCategoriesData.map((eachCourseCategoryData) => ({
      name: eachCourseCategoryData.name,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('course_categories', dataCourseCategoriesToBeSeeded, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('course_categories', null, { truncate: true, restartIdentity: true });
  },
};

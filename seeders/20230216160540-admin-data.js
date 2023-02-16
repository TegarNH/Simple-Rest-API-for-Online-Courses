const adminData = require('../masterdata/admin.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataAdminToBeSeeded = adminData.map((eachAdminData) => ({
      name: eachAdminData.name,
      email: eachAdminData.email,
      password: eachAdminData.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('admin', dataAdminToBeSeeded, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('admin', null, { truncate: true, restartIdentity: true });
  },
};

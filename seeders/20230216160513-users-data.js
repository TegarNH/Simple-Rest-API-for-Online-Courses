const usersData = require('../masterdata/users.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataUsersToBeSeeded = usersData.map((eachUserData) => ({
      name: eachUserData.name,
      email: eachUserData.email,
      password: eachUserData.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('users', dataUsersToBeSeeded, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, { truncate: true, restartIdentity: true });
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let comments = await queryInterface.bulkInsert("Comments", [
      { feedback: "My kids love the playground, it is wide open and safe for them" , themeId:1},
      { feedback: "We used the picnic table near the pond, the grill had a missing wire " , themeId:1},
      { feedback: "The swimming pool is my favorite, I would like it if they add more sun chairs " , themeId:2},
      { feedback: "We go to the park mostly to hike towards the bell tower, it is good exercise" , themeId:3},
      { feedback: "I always feel sorry for the lyon, but I know he used to be a circus lyon and it cannot go back to the wild " , themeId:4},
      { feedback: "what is operating hour? ", name: "Thiago", email: "thiago@gmail.com", themeId:5}]);
     },
     

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

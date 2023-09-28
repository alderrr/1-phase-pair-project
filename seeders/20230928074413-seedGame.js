'use strict';

const fs = require("fs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    const games = JSON.parse(fs.readFileSync("./data/games.json","utf-8")).map((el) => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert("Games", games, {})
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Games", null, {})
  }
};

const { orHaving } = require("../db-config");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "Copy top drummers",
          resource_details: "What do they have that I don't? Oh, wait...",
        },

        {
          id: 2,
          resource_name: "Start amazing rock band",
          resource_details:
            "Forget what I am doing, sell instruments and start drinking",
        },

        {
          id: 3,
          resource_name: "Go to drug store",
          resource_details: "Buy all of their Melatonin",
        },

        {
          id: 4,
          resource_name: "Fix night time snack",
          resource_details:
            "Slip Melatonin into snack and wait out the screams",
        },

        {
          id: 5,
          resource_name: "Fork Repo",
          resource_details: "I'm going to nail this on the first try",
        },

        {
          id: 6,
          resource_name: "Design the data",
          resource_details:
            "Cry for several minutes because I have no idea what this is",
        },
      ]);
    });
};

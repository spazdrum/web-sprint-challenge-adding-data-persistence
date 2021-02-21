exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Become top drummer",
          project_details:
            "Starting from the bottom is always the hardest part",
          completed: false,
        },

        {
          id: 2,
          project_name: "Get Kids To Bed",
          project_details: "They just won't go away!!!",
          completed: false,
        },

        {
          id: 3,
          project_name: "Stop procrastinating and build something",
          project_details: "Should probably focus on the Sprint Challenge",
          Completed: false,
        },
      ]);
    });
};

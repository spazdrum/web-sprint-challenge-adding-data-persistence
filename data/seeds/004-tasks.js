
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          task_details: 'Copy The Idols',
          task_notes: '',
          task_completed: false,
          project_id: 1
        },
        {
          id: 2,
          task_details: 'Find amazing metal heads and trick them to starting a band',
          task_notes: '',
          task_completed: false,
          project_id: 1
        },
        {
          id: 3,
          task_details: "drive to the drug store while kids aren't looking",
          task_notes: '',
          task_completed: false,
          project_id: 2
        },
        {
          id: 4,
          task_details: 'Secretly place melatonin in snacks with excitement',
          task_notes: '',
          task_completed: false,
          project_id: 2
        },
        {
          id: 5,
          task_details: 'Clone Sprint Repo',
          task_notes: '',
          task_completed: false,
          project_id: 3
        },
        {
          id: 6,
          task_details: 'Cry for several minutes because I have no idea what this is',
          task_notes: '',
          task_completed: false,
          project_id: 3
        }
      ]);
    });
};

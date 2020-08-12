
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'life', password: 'freedom123!'},
        {username: 'friends', password: 'close123!'},
        {username: 'just', password: 'doit123!'}
      ]);
    });
};

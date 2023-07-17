/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_titles').del()
  await knex('movie_titles').insert([
    {id: 1, title: 'Mean Girls'},
  ]);
};

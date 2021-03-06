'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_skills', (table) => {
    table.increments();
    table.integer('skill_id').references('id').inTable('skills').onDelete('CASCADE').index();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_skills');
};


'use strict';

//knex migrate:latest
exports.up = function(knex, Promise) {
return knex.schema.createTable('concerts', function(table) {
  table.increments();
  table.string('name');
  table.decimal('price', 5, 2); //decimal column(name, precision, scale)
  //precision: total length of number
  //scale: digits after decimal up to five digits two of which are after decimal

  table.text('description');
  table.timestamps(true, true);
});
  //id

  //name
  //length
  //elevation_gain
};
//knex migrate: rollback
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('concerts');
};

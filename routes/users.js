'use strict';

// DEPENDENCIES -----------------------------------------
const express = require('express');
const router = express.Router();

const knex = require('../knex');

const {camelizeKeys, decamelizeKeys} = require('humps');


//ROUTES ------------------------------------------------

//get all users
router.get('/', (req, res) => {
  knex('users')
  .then((data) => {
    res.send(data);
  });
});
//get users by id
router.get('/:id', (req, res) => {
  knex('users')
  .where('id', req.params.id)
  .then((data) => {
    res.send(data);
  });
});

// EXPORTS ---------------------------
module.exports = router;
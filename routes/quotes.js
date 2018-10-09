var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quote = require('../models/Quote.js');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Quote.find(function (err, quotes) {
    if (err) return next(err);
    res.json(quotes);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Quote.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  Quote.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  Quote.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Quote.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
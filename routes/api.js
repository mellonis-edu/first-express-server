const uniqueString = require('unique-string');
const express = require('express');
const bookList = require('../store/bookList');

const router = express.Router();

router.get('/book', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(bookList));
});

router.get('/book/:id', (req, res) => {
  const { id } = req.params;
  const foundBook = bookList.find((book) => book.id === id);

  if (foundBook) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(foundBook));
  } else {
    res.sendStatus(404);
  }
});

router.put('/book', (req, res) => {
  const { title, author } = req.body;
  const id = uniqueString();

  bookList.push({
    id,
    title,
    author,
  });

  res.sendStatus(200);
});

router.delete('/book/:id', (req, res) => {
  const { id } = req.params;
  const foundBookIx = bookList.findIndex((book) => book.id === id);

  if (foundBookIx >= 0) {
    bookList.splice(foundBookIx, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;

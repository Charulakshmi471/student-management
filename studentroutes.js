const express = require('express');
const router = express.Router();

const students = [
  { id: 1, name: 'Arun', dept: 'CSE', age: 23 },
  { id: 2, name: 'Bala', dept: 'CSE', age: 23 }
];

router.get('/', (req, res) => {
  res.json(students);
});

module.exports = router;


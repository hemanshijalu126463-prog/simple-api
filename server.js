const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Viraj", branch: "CE" },
  { id: 2, name: "Ravi", branch: "CE" }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    branch: req.body.branch
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
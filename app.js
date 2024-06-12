const express = require('express');
const path = require('path');
const app = express();



// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));


// Routes for specific HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

app.get('/szolgaltatasok', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'szolgaltatasok.html'));
});

app.get('/gyik', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'gyik.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'portfolio.html'));
});

app.get('/kapcsolat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'kapcsolat.html'));
});

app.get('/adatvedelem', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist',  'adatvedelem.html'));
});

app.get('/impresszum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'impresszum.html'));
});


// Export app for start.js
module.exports = app;
// Path: start.js
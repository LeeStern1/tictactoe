const path = require('path');
const express = require('express');

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/app", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/travis-CI-and-CD'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/travis-CD-and-CD/index.html'));
});

app.listen(process.env.PORT || 5000);

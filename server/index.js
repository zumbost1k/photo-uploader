const express = require('express');
const path = require('path');

const app = express();

app.use(express.json({ extended: true }));
app.use('/photos', express.static(path.join(__dirname, 'photos')));
app.use('/api', require('./routes/upload.route'));

const PORT = 5000;

app.listen(PORT, () => {
  console.log('server started...');
});

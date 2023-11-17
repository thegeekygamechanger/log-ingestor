const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const logIngestor = require('./logIngestor');
const queryInterface = require('./queryInterface');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/logIngestor', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/logs', logIngestor);
app.use('/api/query', queryInterface);

app.listen(port, () => console.log(`Server started on port ${port}`));

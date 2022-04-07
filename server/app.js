require('dotenv').config();
const express = require('express');
const cors = require('cors');

app = express();

const PORT = process.env.PORT ?? 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.listen(PORT, () => {
  console.log('B PA6OTE');
});

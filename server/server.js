const express = require('express');

const app = express();
const PORT = process.env.PORT || 4040;

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let messages = [];

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { author, content } = req.body;
  const message = { author, content, time: new Date().toLocaleTimeString() };
  messages.push(message);
  res.status(201).json(message);
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));


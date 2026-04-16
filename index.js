const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const fs = require('fs');

const app = express();
app.use(cors());
app.set('trust proxy', true);
const PORT = process.env.PORT || 3001;

const phrases = JSON.parse(fs.readFileSync('./phrases.json', 'utf-8'));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  keyGenerator: (req) => req.headers['cf-connecting-ip'] || req.ip,
  message: { error: 'Too many requests, please try again later. (120 reqs/min/IP)' }
});

app.use(limiter);

app.get('/', (req, res) => {
  res.json({
    service: 'Quick-Calls-as-a-Service',
    endpoints: {
      single: 'GET /quick-call',
      batch: 'GET /quick-calls?count=3'
    }
  });
});

// Returns a random quick call request phrase
app.get('/quick-call', (req, res) => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  res.json({ phrase });
});

// Returns N random phrases (default 3, max 10)
app.get('/quick-calls', (req, res) => {
  const count = Math.min(parseInt(req.query.count) || 3, 10);
  const shuffled = [...phrases].sort(() => 0.5 - Math.random());
  res.json({ phrases: shuffled.slice(0, count) });
});

app.listen(PORT, () => {
  console.log(`Quick-Calls-as-a-Service is running on port ${PORT}`);
});

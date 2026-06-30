'use strict';
const express = require('express');
const path    = require('path');

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const FRONTEND = path.join(__dirname, '../frontend');

app.use(express.static(FRONTEND));

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

app.get('*', (_, res) =>
  res.sendFile(path.join(FRONTEND, 'index.html'))
);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n  ✦  Lyra Fingerprint Verifier  →  http://localhost:${PORT}\n`);
});


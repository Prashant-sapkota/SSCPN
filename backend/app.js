const { spawn } = require('child_process');
const path = require('path');

// Locate the directus binary in your local node_modules
const directusBin = path.join(__dirname, 'node_modules', '.bin', 'directus');

// Spawn the process: 'directus start'
const child = spawn(directusBin, ['start'], {
  stdio: 'inherit', // This sends the logs (the Bunny logo, errors) to your terminal
  shell: true,
  env: process.env // This ensures your .env variables are passed through
});

child.on('error', (err) => {
  console.error('Failed to start Directus:', err);
});
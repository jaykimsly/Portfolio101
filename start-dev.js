const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Try to remove .next directory
const nextDir = path.join(__dirname, '.next');
if (fs.existsSync(nextDir)) {
  try {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('Removed .next directory');
  } catch (error) {
    console.log('Could not remove .next directory:', error.message);
  }
}

// Start Next.js dev server
const child = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

child.on('error', (error) => {
  console.error('Error starting dev server:', error);
});

child.on('close', (code) => {
  console.log(`Dev server exited with code ${code}`);
});
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define the source and destination paths
const sourcePath = path.join(__dirname, '..', 'css', 'screenwise.css');
const destPath = path.join(__dirname, '..', 'public', 'screenwise.css');

// Copy the file
fs.copyFile(sourcePath, destPath, (err) => {
  if (err) {
    console.error('Error copying the CSS file:', err);
  } else {
    console.log('CSS file installed successfully!');
  }
});

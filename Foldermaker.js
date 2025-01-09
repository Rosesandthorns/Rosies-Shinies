// Import the fs module
const fs = require('fs');

// Specify the name of the directory to be created
const directory = 'new_folder';

// Use the fs.mkdir() method to create the directory
fs.mkdir(directory, (err) => {
  if (err) {
    return console.error(`Failed to create directory: ${err.message}`);
  }
  console.log(`Directory '${directory}' created successfully`);
});

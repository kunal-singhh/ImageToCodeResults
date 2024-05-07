
const path = require('path');
const fs = require('fs');
const rootDir = './'; // Specify the root directory to search
let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crayons Example</title>
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/css/crayons-min.css"
  />
  <script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.esm.js"
  ></script>
  <script
    nomodule
    src="https://cdn.jsdelivr.net/npm/@freshworks/crayons@v4/dist/crayons/crayons.js"
  ></script>
</head>
<body><main class="fw-container">`;


// Function to recursively traverse directories
const traverseDirectories = (dir) => {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      console.log(`Processing folder: ${file}`);
      traverseDirectories(filePath);
    } else if (file.toLowerCase() === 'readme.md') {
      processReadmeFile(filePath);
    }
  });
  writeStringToFile('./result.html', htmlContent);
};

// Function to process readme file
const processReadmeFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract component name from line one
  const componentNameMatch = content.match(/^#\s+(.*)/m);
  const componentName = componentNameMatch ? componentNameMatch[1] : 'Unknown';

  console.log(`📝Processing component: ${componentName}`);

  const demoIndex = content.indexOf('## Demo');
  if (demoIndex !== -1) {
    const codeBlockIndex = content.indexOf('```html live', demoIndex);
    if (codeBlockIndex !== -1) {
      const codeBlockEndIndex = content.indexOf('```', codeBlockIndex + 1);
      if (codeBlockEndIndex !== -1) {
        const codeBlock = content.substring(codeBlockIndex, codeBlockEndIndex + 3);
        // Code block found in ${filePath}:
        htmlContent += `
          <div class="fw-card-1 fw-p-24">
            <h2>${componentName}</h2>
            ${codeBlock.replaceAll('```html live', '').replaceAll('```', '')}
          </div>
        `;
      }
    }
  }
};


function writeStringToFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf-8');
}


// Start traversing directories from the root
traverseDirectories(rootDir);

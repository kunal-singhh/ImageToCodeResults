import fs from 'fs';
import path from 'path';

// Function to read HTML file content
function readHTMLFile(directory, imageName) {
    const filePath = path.join(directory, `${imageName}.html`);
    return fs.readFileSync(filePath, 'utf-8');
}

// Function to generate the React component
function generateReactComponent(imagesDirectory, googleVisionDirectory, geminiDirectory, outputPath) {
    const images = fs.readdirSync(imagesDirectory).map(file => path.parse(file).name);

    let componentCode = `import React, { useState } from 'react';\n\n`;

    componentCode += `function AnalysisComponent() {\n`;
    componentCode += `  const [currentIndex, setCurrentIndex] = useState(0);\n\n`;

    componentCode += `  // Function to read HTML file content\n`;
    componentCode += `  function readHTMLFile(directory, imageName) {\n`;
    componentCode += `    const filePath = path.join(directory, \`\${imageName}.html\`);\n`;
    componentCode += `    return fs.readFileSync(filePath, 'utf-8');\n`;
    componentCode += `  }\n\n`;

    componentCode += `  const images = ${JSON.stringify(images)};\n\n`;

    componentCode += `  // Handle next button click\n`;
    componentCode += `  const handleNext = () => {\n`;
    componentCode += `    setCurrentIndex((currentIndex + 1) % images.length);\n`;
    componentCode += `  };\n\n`;

    componentCode += `  // Handle previous button click\n`;
    componentCode += `  const handlePrev = () => {\n`;
    componentCode += `    setCurrentIndex((currentIndex + images.length - 1) % images.length);\n`;
    componentCode += `  };\n\n`;

    componentCode += `  return (\n`;
    componentCode += `    <div>\n`;
    componentCode += `      <div>\n`;
    componentCode += `        <button onClick={handlePrev}>Previous</button>\n`;
    componentCode += `        <button onClick={handleNext}>Next</button>\n`;
    componentCode += `      </div>\n`;
    componentCode += `      <div>\n`;
    componentCode += `        <iframe srcDoc={readHTMLFile('${googleVisionDirectory}', images[currentIndex])} width="100%" height="600"></iframe>\n`;
    componentCode += `        <iframe srcDoc={readHTMLFile('${geminiDirectory}', images[currentIndex])} width="100%" height="600"></iframe>\n`;
    componentCode += `      </div>\n`;
    componentCode += `    </div>\n`;
    componentCode += `  );\n`;
    componentCode += `}\n\n`;

    componentCode += `export default AnalysisComponent;\n`;

    // Write component code to the specified output path
    fs.writeFileSync(outputPath, componentCode);

    console.log(`React component generated successfully at ${outputPath}`);
}

// Directory paths
const imagesDirectory = '../../gemini-results/gemini-script/data/images';
const googleVisionDirectory = '../../gemini-results/gemini-script/data/google_vision';
const geminiDirectory = '../../gemini-results/gemini-script/data/gemini';
const outputPath = './AnalysisComponent.jsx';

// Generate React component code and write it to the output path
generateReactComponent(imagesDirectory, googleVisionDirectory, geminiDirectory, outputPath);

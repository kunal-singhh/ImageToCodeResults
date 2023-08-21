const fs = require('fs');
const path = require('path');

const CURRENT_DIRECTORY = __dirname;

function generateIndexFile() {
  const htmlFiles = fs.readdirSync(CURRENT_DIRECTORY)
    .filter(file => file.endsWith('.html'));

  const links = htmlFiles.map(htmlFile => {
    const linkText = path.basename(htmlFile, '.html');
    return `<a href="./${htmlFile}">${linkText}</a>`;
  });

  const indexContent = `
<!DOCTYPE html>
<html>
<head>
  <title>HTML File Index</title>
</head>
<style>
  body{
    display: flex;
    flex-direction: row;
  }

section{
 border:1px solid;
}
</style>
<body>
  <h1>HTML File Index</h1>
  <ul>
    ${links.map(link => `<li>${link}</li>`).join('\n')}
  </ul>
</body>
</html>
`;

  fs.writeFileSync(path.join(CURRENT_DIRECTORY, 'index.html'), indexContent);

  console.log('Index file created.');
}

generateIndexFile();

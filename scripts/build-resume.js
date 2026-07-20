const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const config = require('../resume.config.js');

console.log(`⚙️  Reading configuration...`);
console.log(`📄 Input: ${config.input}`);
console.log(`📦 Output Name: ${config.outputName}`);

try {
  // 1. Run md-to-pdf on the input file
  console.log(`\n⏳ Generating PDF...`);
  execSync(`npx md-to-pdf ${config.input}`, { stdio: 'inherit' });
  
  // 2. md-to-pdf creates a file in the same directory with .pdf extension
  const baseName = path.basename(config.input, '.md');
  const defaultOutput = path.join(path.dirname(config.input), `${baseName}.pdf`);
  
  // 3. Move and rename the generated PDF to the public folder
  const finalPath = path.join('public', config.outputName);
  
  if (fs.existsSync(defaultOutput)) {
    fs.renameSync(defaultOutput, finalPath);
    console.log(`\n✅ Success! Your resume has been generated and saved to: ${finalPath}`);
  } else {
    console.error(`\n❌ Error: Could not find the generated file ${defaultOutput}`);
    process.exit(1);
  }
} catch (error) {
  console.error(`\n❌ Error generating resume:`, error.message);
  process.exit(1);
}

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const filesToRotate = [
  'public/assets/hero/hero-left-3.webp',
  'public/assets/hero/hero-right-3.webp'
];

async function rotateImages() {
  for (const file of filesToRotate) {
    const fullPath = path.resolve(file);
    try {
      const parsed = path.parse(fullPath);
      const newPath = path.join(parsed.dir, parsed.name + '-rotated' + parsed.ext);
      
      // Rotate 90 degrees clockwise
      await sharp(fullPath)
        .rotate(90)
        .webp({ quality: 80 })
        .toFile(newPath);
        
      console.log(`Successfully created rotated file: ${newPath}`);
      
      // Now update portfolioData.js
      const jsPath = path.resolve('src/data/portfolioData.js');
      let jsContent = await fs.readFile(jsPath, 'utf8');
      
      const oldRef = `/assets/hero/${parsed.base}`;
      const newRef = `/assets/hero/${parsed.name}-rotated${parsed.ext}`;
      
      jsContent = jsContent.replaceAll(oldRef, newRef);
      await fs.writeFile(jsPath, jsContent);
      console.log(`Updated portfolioData.js to point to ${newRef}`);
      
    } catch (e) {
      console.log(`Error on ${file}: ${e.message}`);
    }
  }
}

rotateImages();

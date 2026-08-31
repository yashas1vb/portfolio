import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const file = 'public/assets/hero/hero-right.webp';

async function rotateImage() {
  const fullPath = path.resolve(file);
  try {
    const parsed = path.parse(fullPath);
    const newPath = path.join(parsed.dir, parsed.name + '-rotated' + parsed.ext);
    
    // Rotate 270 degrees clockwise (which is 90 degrees counter-clockwise)
    await sharp(fullPath)
      .rotate(270)
      .webp({ quality: 80 })
      .toFile(newPath);
      
    console.log(`Successfully created rotated file: ${newPath}`);
    
    // Now update portfolioData.js
    const jsPath = path.resolve('src/data/portfolioData.js');
    let jsContent = await fs.readFile(jsPath, 'utf8');
    
    // It might be referenced as hero-right.webp or hero-right-rotated.webp
    // The current reference in code is likely hero-right.webp
    const oldRef = `/assets/hero/${parsed.base}`;
    const newRef = `/assets/hero/${parsed.name}-rotated${parsed.ext}`;
    
    jsContent = jsContent.replaceAll(oldRef, newRef);
    await fs.writeFile(jsPath, jsContent);
    console.log(`Updated portfolioData.js to point to ${newRef}`);
    
  } catch (e) {
    console.log(`Error on ${file}: ${e.message}`);
  }
}

rotateImage();

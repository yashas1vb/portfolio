import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const filesToRotate = [
  'public/assets/hero/hero-left-2.webp',
  'public/assets/hero/hero-right-2.webp',
  'public/assets/hero/hero-left-3.webp',
  'public/assets/hero/hero-right-3.webp',
  'public/assets/hero/hero-right.webp'
];

async function rotateImages() {
  for (const file of filesToRotate) {
    const fullPath = path.resolve(file);
    try {
      // Check if file exists
      await fs.access(fullPath);
      
      const tempPath = fullPath + '.tmp';
      
      // Rotate 90 degrees clockwise
      await sharp(fullPath)
        .rotate(90)
        .webp({ quality: 80 })
        .toFile(tempPath);
        
      // Replace original
      await fs.rename(tempPath, fullPath);
      console.log(`Successfully rotated ${file}`);
    } catch (e) {
      console.log(`Skipping ${file}: ${e.message}`);
    }
  }
}

rotateImages();

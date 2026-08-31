import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, 'public', 'assets');

async function convertImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await convertImages(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
        
        try {
          console.log(`Converting: ${fullPath} -> ${webpPath}`);
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            
          // Delete original to save space
          await fs.unlink(fullPath);
          console.log(`Deleted original: ${fullPath}`);
        } catch (err) {
          console.error(`Failed to convert ${fullPath}:`, err);
        }
      }
    }
  }
}

async function main() {
  console.log('Starting image conversion to WebP...');
  await convertImages(ASSETS_DIR);
  console.log('Conversion complete!');
}

main().catch(console.error);

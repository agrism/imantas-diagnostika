import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('dist', 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const mainJs = files.find(f => f.startsWith('index-') && f.endsWith('.js') && !['index-CZwcOlLs.js', 'index-CIql6zKg.js'].includes(f));
  if (mainJs) {
    const src = path.join(assetsDir, mainJs);
    ['index-CZwcOlLs.js', 'index-CIql6zKg.js', 'main.js'].forEach(target => {
      fs.copyFileSync(src, path.join(assetsDir, target));
    });
    console.log(`[postbuild] Copied ${mainJs} to legacy fallback names (index-CZwcOlLs.js, index-CIql6zKg.js, main.js)`);
  }
}

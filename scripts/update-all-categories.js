const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Mapping des dossiers vers les catégories attendues
const folderToCategoryMapping = {
  'demenagement-etudiant-rouen': 'demenagement-etudiant-rouen',
  'demenagement-entreprise-rouen': 'demenagement-entreprise-rouen',
  'demenagement-piano-rouen': 'demenagement-piano-rouen',
  'demenagement-international-rouen': 'demenagement-international-rouen',
  'demenagement-longue-distance-rouen': 'demenagement-longue-distance-rouen',
  'demenagement-pas-cher-rouen': 'demenagement-pas-cher-rouen',
  'demenagement-urgent-rouen': 'demenagement-urgent-rouen',
  'devis-demenagement-rouen': 'devis-demenagement-rouen',
  'garde-meuble-rouen': 'garde-meuble-rouen',
  'prix-demenagement-rouen': 'prix-demenagement-rouen',
  'prix-demenagement-piano-rouen': 'prix-demenagement-piano-rouen',
};

function updateArticle(filePath, categoryFolder) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdown } = matter(content);
    
    const correctCategory = folderToCategoryMapping[categoryFolder];
    
    // Vérifier si la catégorie doit être mise à jour
    if (data.category !== correctCategory) {
      data.category = correctCategory;
      
      const newContent = matter.stringify(markdown, data);
      fs.writeFileSync(filePath, newContent, 'utf8');
      
      console.log(`✓ Updated category: ${path.basename(filePath)}`);
      console.log(`  Old: ${data.category || 'undefined'} → New: ${correctCategory}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processCategory(categoryPath) {
  const categoryFolder = path.basename(categoryPath);
  let updated = 0;
  
  const files = fs.readdirSync(categoryPath)
    .filter(file => file.endsWith('.md') && file !== 'README.md');
  
  console.log(`\n📁 ${categoryFolder} (${files.length} articles)`);
  console.log('─'.repeat(60));
  
  files.forEach(file => {
    const filePath = path.join(categoryPath, file);
    if (updateArticle(filePath, categoryFolder)) {
      updated++;
    }
  });
  
  if (updated === 0) {
    console.log('  ✓ All articles already have correct category');
  }
  
  return updated;
}

// Main execution
const blogDirectory = path.join(process.cwd(), 'content', 'blog');
console.log('🔄 Updating all blog article categories...');
console.log('═'.repeat(60));

const categories = fs.readdirSync(blogDirectory, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let totalUpdated = 0;

categories.forEach(category => {
  const categoryPath = path.join(blogDirectory, category);
  totalUpdated += processCategory(categoryPath);
});

console.log('\n' + '═'.repeat(60));
console.log(`✅ Completed! Updated ${totalUpdated} articles`);
console.log('\n📊 Category mapping:');
Object.entries(folderToCategoryMapping).forEach(([folder, category]) => {
  const cleanCat = category.replace('demenagement-', '').replace('-rouen', '').replace('devis-', '').replace('garde-meuble', 'garde-meuble').replace('prix-', 'prix/');
  console.log(`  ${folder} → ${cleanCat}`);
});


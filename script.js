// JavaScript for Random Molecule Image Viewer
const img = document.getElementById('rand-img');
// list of molecule image folders
const molecules = ['aldosterone','cholesterol','cortisol','estradiol','progesterone','reference','testosterone'];

function load() {
  // pick a random molecule
  const folder = molecules[Math.floor(Math.random() * molecules.length)];
  // set image source with cache-busting
  img.src = `molecules/${folder}/image.png?cacheBust=${Date.now()}`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('new-img').addEventListener('click', load);
  load();
});

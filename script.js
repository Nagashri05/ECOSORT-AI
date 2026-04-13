// Data Structure mapping items to categories, tips, decomposition time, and DIY ideas
const wasteDatabase = {
  // Recyclables
  'plastic bottle': {
    aliases: ['water bottle', 'soda bottle', 'flask'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-recycle',
    tip: 'Recycle properly. Rinse out to ensure it gets recycled.',
    decompositionTime: '450 years',
    reuseIdea: 'Cut in half and paint it to create a self-watering planter or hanging garden pot.'
  },
  'plastic bag': {
    aliases: ['polythene', 'grocery bag', 'carry bag'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-shopping-bag',
    tip: 'Reuse or recycle at designated grocery store drop-offs.',
    decompositionTime: '10-1000 years',
    reuseIdea: 'Weave multiple bags together to create a sturdy, reusable tote bag or jump rope.'
  },
  'milk packet': {
    aliases: ['milk carton', 'milk pouch'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-package',
    tip: 'Clean and recycle. Rinse thoroughly before tossing.',
    decompositionTime: '5 years',
    reuseIdea: 'Cut them open, clean them, and use them as small waterproof seedling starter pots.'
  },
  'chips packet': {
    aliases: ['chip bag', 'snack wrapper', 'doritos', 'lays'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-trash',
    tip: 'Dispose in dry waste. Multi-layered plastics are extremely hard to recycle.',
    decompositionTime: '100+ years',
    reuseIdea: 'Collect many wrappers to create eco-bricks by stuffing them tightly into a plastic bottle.'
  },
  'glass bottle': {
    aliases: ['glass', 'jars', 'mason jar', 'beer bottle'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-recycle',
    tip: 'Recycle glass cleanly. Wrap if broken.',
    decompositionTime: '1 million years',
    reuseIdea: 'Clean it up and use it as a vase, a water bottle, or for a candle making project.'
  },
  'broken glass': {
    aliases: ['shards', 'smashed glass', 'cracked glass'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-warning',
    tip: 'Wrap in thick paper or put in a sealed box before disposing safely.',
    decompositionTime: '1 million years',
    reuseIdea: 'Tumble the glass shards in a rock tumbler to create beautiful sea glass for jewelry.'
  },
  'newspaper': {
    aliases: ['paper', 'magazine', 'newsprint'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-newspaper',
    tip: 'Recycle paper. Keep dry.',
    decompositionTime: '2-6 weeks',
    reuseIdea: 'Use for papier-mâché crafts, origami, or as eco-friendly window-cleaning rags.'
  },
  'cardboard': {
    aliases: ['box', 'amazon box', 'carton'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-package',
    tip: 'Recycle cardboard. Flatten boxes to save space.',
    decompositionTime: '2 months',
    reuseIdea: 'Build a cat scratcher, drawer dividers, or an epic cardboard fort for kids.'
  },
  'paper': {
    aliases: ['sheet', 'printer paper', 'A4'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-file-text',
    tip: 'Keep dry and recycle.',
    decompositionTime: '2-6 weeks',
    reuseIdea: 'Shred it for compost carbon layers, or blend it into a pulp to make your own handmade paper.'
  },
  'notebook': {
    aliases: ['diary', 'journal', 'notepad', 'book'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-book-open',
    tip: 'Recycle paper. Remove spiral bindings if metal.',
    decompositionTime: '2-6 weeks',
    reuseIdea: 'Use the unwritten back pages for quick scratchpad notes or grocery lists.'
  },
  'banana peel': {
    aliases: ['banana', 'fruit peel'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-plant',
    tip: 'Compost it.',
    decompositionTime: '2-5 weeks',
    reuseIdea: 'Soak in water to make a nutrient-rich fertilizer "tea" for indoor plants, or rub on leather shoes to shine.'
  },
  'apple core': {
    aliases: ['apple', 'fruit core'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-plant',
    tip: 'Compost it.',
    decompositionTime: '1-2 months',
    reuseIdea: 'Collect apple cores to make homemade apple cider vinegar from the scraps.'
  },
  'vegetable waste': {
    aliases: ['veggies', 'scraps', 'onion peel', 'potato peel', 'carrot peels'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-leaf',
    tip: 'Compost it.',
    decompositionTime: '1 month',
    reuseIdea: 'Freeze vegetable scraps until you have enough, then boil them to make a rich homemade vegetable broth.'
  },
  'food waste': {
    aliases: ['leftovers', 'curry', 'rice', 'meal'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-hamburger',
    tip: 'Compost it (avoid composting meat/dairy if possible).',
    decompositionTime: '1 month',
    reuseIdea: 'Blend safe food scraps into a slurry and feed it to a worm composting (vermicompost) bin.'
  },
  'tea leaves': {
    aliases: ['tea bag', 'used tea', 'chai'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-coffee',
    tip: 'Use as fertilizer or compost.',
    decompositionTime: '2-4 weeks',
    reuseIdea: 'Dry the leaves out to absorb odors in the fridge or at the bottom of your trash can.'
  },
  'coffee grounds': {
    aliases: ['espresso', 'coffee', 'filter'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-coffee',
    tip: 'Compost or fertilize directly into soil.',
    decompositionTime: '2-4 weeks',
    reuseIdea: 'Mix with a little coconut oil for a natural exfoliating body scrub.'
  },
  'eggshell': {
    aliases: ['egg', 'shells', 'eggs'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-egg',
    tip: 'Crush and compost.',
    decompositionTime: '2-5 weeks',
    reuseIdea: 'Bake and crush them to sprinkle around plants as an organic deterrent for slugs and snails.'
  },
  'leaves': {
    aliases: ['dry leaves', 'yard waste', 'foliage'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-leaf',
    tip: 'Compost.',
    decompositionTime: '3-6 months',
    reuseIdea: 'Use dry leaves as mulch around your garden beds to retain water and prevent weeds.'
  },
  'grass': {
    aliases: ['lawn clippings', 'yard waste'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-plant',
    tip: 'Compost.',
    decompositionTime: '1-3 months',
    reuseIdea: 'Leave some clippings directly on your lawn after mowing to return nitrogen to the soil.'
  },
  'battery': {
    aliases: ['aa', 'aaa', 'lithium', 'alkaline', 'cell'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-battery-warning',
    tip: 'E-waste disposal. Do not put in regular trash.',
    decompositionTime: '100+ years',
    reuseIdea: 'Cannot be safely reused at home. Always recycle properly at e-waste centers.'
  },
  'mobile phone': {
    aliases: ['smartphone', 'cellphone', 'iphone', 'android', 'phone'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-device-mobile',
    tip: 'E-waste center.',
    decompositionTime: '1000+ years',
    reuseIdea: 'Wipe the data and keep it as a dedicated Wi-Fi music player, smart home remote, or baby monitor.'
  },
  'laptop': {
    aliases: ['computer', 'pc', 'macbook'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-laptop',
    tip: 'E-waste center.',
    decompositionTime: '1000+ years',
    reuseIdea: 'Install a lightweight Linux OS (like ChromeOS Flex) to revive it for basic web browsing or donate it to student charities.'
  },
  'charger': {
    aliases: ['cable', 'wire', 'usb', 'adapter', 'plug'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-plug',
    tip: 'E-waste disposal.',
    decompositionTime: '500+ years',
    reuseIdea: 'Use old charging cables as sturdy ties for garden plants, or donate to electronics hobbyists.'
  },
  'earphones': {
    aliases: ['headphones', 'earbuds', 'airpods', 'headset'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-headphones',
    tip: 'E-waste disposal.',
    decompositionTime: '500+ years',
    reuseIdea: 'Remove the internal copper wire to use for electrical hobby projects.'
  },
  'medicine': {
    aliases: ['pills', 'tablets', 'capsules', 'syrup', 'drugs'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-pill',
    tip: 'Return to pharmacy or designated take-back site.',
    decompositionTime: 'varies',
    reuseIdea: 'Never reuse or craft with expired medication. Safely dispose of them.'
  },
  'syringe': {
    aliases: ['needle', 'injection', 'medical'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-syringe',
    tip: 'Medical disposal. Use a sharps container.',
    decompositionTime: 'varies',
    reuseIdea: 'No safe reuse. Always use a proper medical sharps bin.'
  },
  'paint': {
    aliases: ['oil paint', 'latex paint', 'color'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-drop',
    tip: 'Hazardous waste facility.',
    decompositionTime: 'varies',
    reuseIdea: 'Mix leftover latex paints together to create a base primer coat for your next big project.'
  },
  'chemical': {
    aliases: ['cleaner', 'bleach', 'acid', 'pesticide'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-flask',
    tip: 'Special disposal required. Do not pour down drain.',
    decompositionTime: 'varies',
    reuseIdea: 'Do not mix or repurpose hazardous chemicals. Proper disposal is mandatory.'
  },
  'aluminum can': {
    aliases: ['soda can', 'coke can', 'pepsi can'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-cylinder',
    tip: 'Recycle metal.',
    decompositionTime: '200 years',
    reuseIdea: 'Carefully cut and bend to make wind chimes, small lanterns, or decorative pen holders.'
  },
  'steel can': {
    aliases: ['soup can', 'tin can', 'canned food'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-cylinder',
    tip: 'Recycle metal.',
    decompositionTime: '50 years',
    reuseIdea: 'Remove the label, clean, and map holes to make a beautiful outdoor candle lantern.'
  },
  'tin can': {
    aliases: ['can', 'tins'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-cylinder',
    tip: 'Recycle metal.',
    decompositionTime: '50 years',
    reuseIdea: 'Paint them and string them up on a fence as charming outdoor planters for herbs.'
  },
  'foil': {
    aliases: ['aluminum foil', 'tin foil', 'wrapper'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-intersect',
    tip: 'Clean and recycle. Ball it up first.',
    decompositionTime: '200 years',
    reuseIdea: 'Crumple into a ball to scrub baked-on grease off of glass baking pans.'
  },
  'plastic wrapper': {
    aliases: ['candy wrapper', 'biscuit wrapper', 'plastic wrap'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-trash',
    tip: 'Dispose properly in dry trash.',
    decompositionTime: '100+ years',
    reuseIdea: 'Weave multiple colorful wrappers together into interesting bracelets or wallets.'
  },
  'styrofoam': {
    aliases: ['thermocol', 'polystyrene', 'packing peanuts', 'foam'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-trash',
    tip: 'Avoid use. Dispose in trash or specialized drop-off.',
    decompositionTime: '500+ years',
    reuseIdea: 'Break into large pieces and place at the bottom of large potted plants to improve drainage and reduce weight.'
  },
  'rubber': {
    aliases: ['elastic', 'band', 'silicone'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-circle',
    tip: 'Recycle if possible, or dry waste.',
    decompositionTime: '50-80 years',
    reuseIdea: 'Wrap thick rubber bands around difficult-to-open jar lids to provide extra grip.'
  },
  'tyre': {
    aliases: ['tire', 'car tyre', 'bike tyre'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-lifebuoy',
    tip: 'Recycle tyre at auto shops or specific centers.',
    decompositionTime: '80+ years',
    reuseIdea: 'Paint the old tyre and fill it with soil to make a fantastic, durable outdoor flower planter.'
  },
  'cloth': {
    aliases: ['rag', 'fabric', 'textile'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-t-shirt',
    tip: 'Reuse or donate.',
    decompositionTime: '1-5 months',
    reuseIdea: 'Cut into small squares and use as reusable cleaning cloths, saving paper towels.'
  },
  'old clothes': {
    aliases: ['shirt', 'pants', 'jeans', 't-shirt'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-t-shirt',
    tip: 'Donate or reuse.',
    decompositionTime: '1-5 months',
    reuseIdea: 'Sew old t-shirts together to make a nostalgic patchwork quilt, or turn old jeans into cutoff shorts.'
  },
  'shoes': {
    aliases: ['sneakers', 'boots', 'heels', 'footwear'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-sneaker',
    tip: 'Donate or recycle at shoe-drop bins.',
    decompositionTime: '25-40 years',
    reuseIdea: 'Fill an old boot with soil to create a quirky and unique garden planter.'
  },
  'wood': {
    aliases: ['lumber', 'timber', 'branches', 'logs'],
    category: 'Organic 🌱',
    typeClass: 'organic',
    icon: 'ph-tree',
    tip: 'Reuse or compost.',
    decompositionTime: '1-3 years',
    reuseIdea: 'Sand down old pallets or lumber pieces to build rustic outdoor shelves or a coffee table.'
  },
  'furniture': {
    aliases: ['chair', 'table', 'sofa', 'couch', 'desk'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-armchair',
    tip: 'Reuse, donate, or arrange municipal bulk pickup.',
    decompositionTime: 'varies',
    reuseIdea: 'Repaint or restain an old piece, and change the hardware (knobs) to give it a totally new life.'
  },
  'toothbrush': {
    aliases: ['brush', 'dental'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-trash',
    tip: 'Dispose properly. Specialized recycling programs exist.',
    decompositionTime: '500+ years',
    reuseIdea: 'Keep old toothbrushes to heavily scrub grout, bike chains, or hard-to-reach intricate areas.'
  },
  'razor': {
    aliases: ['blade', 'shaver', 'shaving'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-scissors',
    tip: 'Wrap before disposal to protect sanitation workers.',
    decompositionTime: '100+ years',
    reuseIdea: 'Dull blades can sometimes be used to gently scrape lint off heavy fabrics or paint drops off glass.'
  },
  'diaper': {
    aliases: ['nappy', 'pampers'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-baby',
    tip: 'Dispose in sanitary waste.',
    decompositionTime: '500 years',
    reuseIdea: 'No safe reuse for used diapers. Always dispose of them cleanly wrapped.'
  },
  'sanitary pad': {
    aliases: ['pad', 'tampon', 'menstrual'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-drop',
    tip: 'Dispose safely wrapped. Do not flush.',
    decompositionTime: '500-800 years',
    reuseIdea: 'No safe reuse. Ensure proper sanitary bin disposal.'
  },
  'mask': {
    aliases: ['n95', 'surgical mask', 'face mask'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-mask-happy',
    tip: 'Dispose properly in dry waste. Cut the ear loops before throwing away.',
    decompositionTime: '450 years',
    reuseIdea: 'Cut off the elastic ear loops to use as quick rubber bands before throwing the main mask away.'
  },
  'thermocol': {
    aliases: ['polystyrene foam', 'craft foam'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-trash',
    tip: 'Avoid use. Does not biodegrade.',
    decompositionTime: '500+ years',
    reuseIdea: 'Crumble and mix with potting soil for plants that need extreme aeration and light soil mixtures.'
  }
};

const ecoFacts = [
  "⚠️ Warning: Food waste generates roughly 8% of global greenhouse gas emissions every year.",
  "⚠️ Warning: By 2050, it is projected that oceans will contain more plastic than fish by weight.",
  "⚠️ Warning: A single discarded AA battery can dangerously pollute up to 500 liters of ground water.",
  "⚠️ Warning: Every single minute, the equivalent of one full garbage truck of plastic is dumped into our oceans.",
  "⚠️ Warning: Electronic waste comprises exactly 70% of our overall toxic waste, despite being only 2% of trash.",
  "⚠️ Warning: The global fashion industry is responsible for 10% of all annual carbon emissions worldwide.",
  "⚠️ Warning: Microplastics have now been discovered circulating deep within the human bloodstream and lungs.",
  "⚠️ Warning: It takes up to 1 million years for a glass bottle to decompose in a landfill—yet they are endlessly recyclable.",
  "⚠️ Warning: Shockingly, half of all the plastic produced in human history was made in just the last 15 years.",
  "⚠️ Warning: Less than 10% of all plastic ever produced has actually been recycled. The rest sits slowly deteriorating in nature.",
  "⚠️ Warning: The production of a single pair of jeans requires around 7,500 liters of water."
];

// Application Elements
const searchInput = document.getElementById('waste-input');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');
const loaderContainer = document.getElementById('loader-container');
const loaderText = document.getElementById('loader-text');

// Init Features
// 1. Eco Points
let currentScore = parseInt(localStorage.getItem('ecoScore')) || 0;
const scoreDisplay = document.getElementById('score-display');
scoreDisplay.textContent = currentScore;

function addScore() {
  currentScore += 10;
  localStorage.setItem('ecoScore', currentScore);
  scoreDisplay.textContent = currentScore;
  const badge = document.querySelector('.eco-score-badge');
  badge.classList.add('pop');
  setTimeout(() => badge.classList.remove('pop'), 300);
}

// 2. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
let isDarkMode = localStorage.getItem('theme') === 'dark';

if (isDarkMode) {
  document.body.setAttribute('data-theme', 'dark');
  themeIcon.classList.replace('ph-moon', 'ph-sun');
}

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if(isDarkMode) {
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('ph-moon', 'ph-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('ph-sun', 'ph-moon');
    localStorage.setItem('theme', 'light');
  }
});

// 3. Random Daily Fact
document.getElementById('fact-text').textContent = ecoFacts[Math.floor(Math.random() * ecoFacts.length)];


// Advanced smart matching function
function findBestMatch(query) {
  if (wasteDatabase[query]) return query;
  let words = query.split(' ').map(w => w.replace(/[^a-z]/g, ''));
  for (let key of Object.keys(wasteDatabase)) {
    if (key.includes(query) || query.includes(key)) return key;
    if (wasteDatabase[key].aliases) {
      if (wasteDatabase[key].aliases.some(alias => alias.includes(query) || query.includes(alias) || words.includes(alias))) {
        return key;
      }
    }
  }
  return null;
}

// 4. Image Upload "AI Vision" Mockup
const imageUpload = document.getElementById('image-upload');
imageUpload.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    const file = e.target.files[0];
    searchInput.value = "Imagined Image: " + file.name;
    
    // UI Flow
    resultContainer.classList.remove('show');
    resultContainer.classList.add('hidden');
    loaderText.textContent = "AI Vision processing image...";
    loaderContainer.classList.remove('hidden');
    setTimeout(() => loaderContainer.classList.add('show'), 50);

    // Simulate AI processing
    setTimeout(() => {
      loaderContainer.classList.remove('show');
      setTimeout(() => {
        loaderContainer.classList.add('hidden');
        
        // Randomly identify
        const keys = Object.keys(wasteDatabase);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        
        addScore(); // Reward points
        displayResult("AI Upload Detection", wasteDatabase[randomKey]);
      }, 300);
    }, 2500);
    
    imageUpload.value = '';
  }
});

// Search function
function classifyWaste() {
  let query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    const searchDiv = document.querySelector('.search-container');
    searchDiv.classList.remove('shake');
    void searchDiv.offsetWidth;
    searchDiv.classList.add('shake');
    return;
  }

  // Restore regular loader text
  loaderText.textContent = "EcoSort AI is analyzing...";

  resultContainer.classList.remove('show');
  resultContainer.classList.add('hidden');
  
  loaderContainer.classList.remove('hidden');
  setTimeout(() => loaderContainer.classList.add('show'), 50);

  setTimeout(() => {
    loaderContainer.classList.remove('show');
    
    setTimeout(() => {
      loaderContainer.classList.add('hidden');
      
      let foundKey = findBestMatch(query);
      if (foundKey) {
        addScore(); // Reward points on successful finding
        displayResult(query, wasteDatabase[foundKey]);
      } else {
        displayResult(query, {
          category: 'Unknown',
          typeClass: 'general',
          icon: 'ph-question',
          tip: 'We couldn\'t find exactly what you\'re looking for. When in doubt, check your local municipal guidelines to avoid contaminating the recycling stream.',
          decompositionTime: 'Varies wildly',
          reuseIdea: 'Check out general upcycling communities online to see if your item can find a second life!'
        });
      }
    }, 300); 
  }, 1000); 
}

// Render Result Card
function displayResult(searchedTerm, data) {
  resultContainer.innerHTML = `
    <div class="card ${data.typeClass}">
      <div class="icon-wrapper">
        <i class="ph ${data.icon}"></i>
      </div>
      <div class="item-name">Result for "${searchedTerm}"</div>
      <div class="category">${data.category}</div>
      
      <div class="info-grid">
        <div class="info-box tip">
          <h3><i class="ph-fill ph-info"></i> Disposal Guide</h3>
          <p>${data.tip}</p>
        </div>
        <div class="info-box decomp">
          <h3><i class="ph-fill ph-hourglass-high"></i> Decomposition</h3>
          <p>${data.decompositionTime}</p>
        </div>
      </div>

      <div class="diy-idea">
        <h3><i class="ph-fill ph-paint-brush-broad"></i> Creative DIY Idea</h3>
        <p>${data.reuseIdea}</p>
      </div>
    </div>
  `;
  
  resultContainer.classList.remove('hidden');
  
  setTimeout(() => {
    resultContainer.classList.add('show');
  }, 50);
}

// Helper
function setInput(val) {
  searchInput.value = val;
  classifyWaste();
}

// Event Listeners
searchBtn.addEventListener('click', classifyWaste);

searchInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    classifyWaste();
  }
});

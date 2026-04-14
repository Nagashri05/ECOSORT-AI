// Data Structure mapping items to categories, tips, decomposition time, and DIY ideas
const wasteDatabase = {
  // Recyclables
  'plastic bottle': {
    aliases: ['water bottle', 'soda bottle', 'flask'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-recycle',
    scrapValue: '₹10-15 per kg',
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
    scrapValue: '₹12-15 per kg',
    tip: 'Recycle paper. Keep dry.',
    decompositionTime: '2-6 weeks',
    reuseIdea: 'Use for papier-mâché crafts, origami, or as eco-friendly window-cleaning rags.'
  },
  'cardboard': {
    aliases: ['box', 'amazon box', 'carton'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-package',
    scrapValue: '₹8-10 per kg',
    tip: 'Recycle cardboard. Flatten boxes to save space.',
    decompositionTime: '2 months',
    reuseIdea: 'Build a cat scratcher, drawer dividers, or an epic cardboard fort for kids.'
  },
  'paper': {
    aliases: ['sheet', 'printer paper', 'A4'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-file-text',
    scrapValue: '₹10-12 per kg',
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
    isHazardousSmoke: true,
    scrapValue: '₹30-50 per kg',
    tip: 'E-waste disposal. Do not put in regular trash.',
    decompositionTime: '100+ years',
    reuseIdea: 'Cannot be safely reused at home. Always recycle properly at e-waste centers.'
  },
  'mobile phone': {
    aliases: ['smartphone', 'cellphone', 'iphone', 'android', 'phone'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-device-mobile',
    isHazardousSmoke: true,
    scrapValue: '₹100-500 depending on model',
    tip: 'E-waste center.',
    decompositionTime: '1000+ years',
    reuseIdea: 'Wipe the data and keep it as a dedicated Wi-Fi music player, smart home remote, or baby monitor.'
  },
  'laptop': {
    aliases: ['computer', 'pc', 'macbook'],
    category: 'Hazardous ⚠️',
    typeClass: 'hazardous',
    icon: 'ph-laptop',
    isHazardousSmoke: true,
    scrapValue: '₹500-2000 depending on parts',
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
    scrapValue: '₹80-100 per kg',
    tip: 'Recycle metal.',
    decompositionTime: '200 years',
    reuseIdea: 'Carefully cut and bend to make wind chimes, small lanterns, or decorative pen holders.'
  },
  'steel can': {
    aliases: ['soup can', 'tin can', 'canned food'],
    category: 'Recyclable ♻️',
    typeClass: 'recyclable',
    icon: 'ph-cylinder',
    scrapValue: '₹20-30 per kg',
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
    isHazardousSmoke: true,
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
    scrapValue: 'Exchange for utensils/cash',
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

// 2.5 Rural Mode Toggle
const ruralToggle = document.getElementById('rural-toggle');
const ruralIcon = document.getElementById('mode-icon');
const ruralText = document.getElementById('mode-text');
let isRuralMode = localStorage.getItem('ruralMode') === 'true';

function updateRuralUI() {
  if (isRuralMode) {
    ruralToggle.classList.add('rural-active');
    ruralIcon.classList.replace('ph-buildings', 'ph-map-pin');
    ruralText.textContent = 'Rural Mode';
  } else {
    ruralToggle.classList.remove('rural-active');
    ruralIcon.classList.replace('ph-map-pin', 'ph-buildings');
    ruralText.textContent = 'Urban Mode';
  }
}

updateRuralUI();

ruralToggle.addEventListener('click', () => {
  isRuralMode = !isRuralMode;
  localStorage.setItem('ruralMode', isRuralMode);
  updateRuralUI();
  
  // If a result is currently shown, re-trigger classification to update UI instantly
  if (!document.getElementById('result-container').classList.contains('hidden') && searchInput.value.trim() !== '') {
    classifyWaste();
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
    }, 5000);
    
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
  }, 3500); 
}

// Smart Quick Actions Logic
function getQuickActions(data, isRural) {
  let actions = [];
  
  if (data.category === 'Unknown') return actions;

  // Base check for hazardous smoke warning
  if (data.isHazardousSmoke) {
    actions.push({ icon: 'ph-fill ph-fire warning', text: 'Do NOT burn', subtext: 'Produces extremely toxic smoke' });
  }

  if (isRural) {
    // Rural Mode Logic
    if (data.scrapValue) {
      actions.push({ 
        icon: 'ph-fill ph-money scrap', 
        text: 'Sell to scrap dealer', 
        subtext: 'Approx value: ' + data.scrapValue,
        actionHtml: '<button class="qa-action-btn call-btn" onclick="alert(\'Calling Local Kabadiwala...\\\\nRouting to +91-XXXXX-XXXXX\')"><i class="ph-fill ph-phone-call"></i> Call Kabadiwala</button>'
      });
    }
    
    if (data.typeClass === 'organic') {
      actions.push({ icon: 'ph-fill ph-plant general', text: 'Compost at home', subtext: 'Very practical in villages' });
      actions.push({ icon: 'ph-fill ph-users general', text: 'Village waste pit', subtext: 'If segregated cleanly' });
    } else if (data.typeClass === 'recyclable') {
      actions.push({ icon: 'ph-fill ph-recycle general', text: 'Reuse at home', subtext: 'See DIY idea below' });
      actions.push({ icon: 'ph-fill ph-package general', text: 'Store safely', subtext: 'Until community collection day' });
    } else if (data.typeClass === 'hazardous') {
      actions.push({ icon: 'ph-fill ph-warning-circle warning', text: 'Store safely', subtext: 'Keep away from children/animals' });
      actions.push({ icon: 'ph-fill ph-truck warning', text: 'Give to scrap collector', subtext: 'Or community collection' });
    } else {
      actions.push({ icon: 'ph-fill ph-info general', text: 'Store safely', subtext: 'Wait for proper disposal option' });
    }
  } else {
    // Urban Mode Logic
    if (data.typeClass === 'recyclable') {
      actions.push({ 
        icon: 'ph-fill ph-recycle general', 
        text: 'Recycling Center / Bin', 
        subtext: 'Rinse properly before tossing',
        actionHtml: '<button class="qa-action-btn map-btn" onclick="document.getElementById(\\\'map-modal\\\').classList.remove(\\\'hidden\\\')"><i class="ph-fill ph-map-pin"></i> Locate Drop-off</button>'
      });
      if (data.scrapValue) {
        actions.push({ 
          icon: 'ph-fill ph-money scrap', 
          text: 'Sell to scrap dealer', 
          subtext: 'Approx value: ' + data.scrapValue,
          actionHtml: '<button class="qa-action-btn call-btn" onclick="alert(\'Calling Local Kabadiwala...\\\\nRouting to +91-XXXXX-XXXXX\')"><i class="ph-fill ph-phone-call"></i> Call Kabadiwala</button>'
        });
      }
    } else if (data.typeClass === 'organic') {
      actions.push({ icon: 'ph-fill ph-leaf general', text: 'Green / Wet Waste Bin', subtext: 'Municipal collection' });
      actions.push({ icon: 'ph-fill ph-plant general', text: 'Home Compost', subtext: 'Great for your plants' });
    } else if (data.typeClass === 'hazardous') {
      actions.push({ 
        icon: 'ph-fill ph-warning-circle warning', 
        text: 'Hazardous Waste Facility', 
        subtext: 'E-waste / Medical drop-off',
        actionHtml: '<button class="qa-action-btn map-btn" onclick="document.getElementById(\\\'map-modal\\\').classList.remove(\\\'hidden\\\')"><i class="ph-fill ph-map-pin"></i> Locate Drop-off</button>'
      });
      if (data.scrapValue) {
        actions.push({ icon: 'ph-fill ph-money scrap', text: 'Sell to e-waste scrap', subtext: 'Approx value: ' + data.scrapValue });
      }
    } else {
      actions.push({ icon: 'ph-fill ph-trash general', text: 'General Dry Waste', subtext: 'Municipal bin' });
    }
  }
  
  return actions;
}

// Render Result Card
function displayResult(searchedTerm, data) {
  const quickActions = getQuickActions(data, isRuralMode);
  
  let actionsHtml = '';
  if (quickActions.length > 0) {
    actionsHtml = '<div class="quick-actions">';
    quickActions.forEach(action => {
      actionsHtml += `
        <div class="qa-item">
          <div class="qa-icon">
            <i class="${action.icon}"></i>
          </div>
          <div class="qa-content" style="flex: 1;">
            <span class="qa-text">${action.text}</span>
            <span class="qa-subtext">${action.subtext}</span>
            ${action.actionHtml ? action.actionHtml : ''}
          </div>
        </div>
      `;
    });
    // Append the universal audio listener button if we have actions
    if (isRuralMode) {
      actionsHtml += `<button class="audio-btn" onclick="triggerAudio()"><i class="ph-fill ph-speaker-high"></i> Listen to Instructions</button>`;
    }
    actionsHtml += '</div>';
  } else if (data.category === 'Unknown') {
    actionsHtml = `
      <div class="info-box tip" style="margin-bottom: 1.5rem; width: 100%;">
        <h3><i class="ph-fill ph-info"></i> Disposal Guide</h3>
        <p>${data.tip}</p>
      </div>
    `;
  }

  resultContainer.innerHTML = `
    <div class="card ${data.typeClass}">
      <div class="icon-wrapper">
        <i class="ph ${data.icon}"></i>
      </div>
      <div class="item-name">Result for "${searchedTerm}"</div>
      <div class="category">${data.category}</div>
      
      ${actionsHtml}
      
      <div class="info-grid">
        <div class="info-box decomp" style="grid-column: 1 / -1;">
          <h3><i class="ph-fill ph-hourglass-high"></i> Decomposition Time</h3>
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

  // Track the sort if it's a known valid item
  if (data.category !== 'Unknown') {
    trackSort(data.category);
  }
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

// --- Gamification & Impact Dashboard ---

// State
let stats = JSON.parse(localStorage.getItem('ecoStats')) || {
  recyclable: 0,
  organic: 0,
  hazardous: 0
};

const badges = [
  { id: 'compost_king', name: 'Compost King', icon: 'ph-leaf', reqType: 'organic', reqCount: 5 },
  { id: 'recycle_hero', name: 'Recycle Hero', icon: 'ph-recycle', reqType: 'recyclable', reqCount: 5 },
  { id: 'toxic_avenger', name: 'Safe Disposer', icon: 'ph-warning-circle', reqType: 'hazardous', reqCount: 2 },
  { id: 'eco_novice', name: 'Eco Novice', icon: 'ph-plant', reqType: 'any', reqCount: 1 },
  { id: 'eco_master', name: 'Eco Master', icon: 'ph-tree', reqType: 'any', reqCount: 15 },
  { id: 'daily_streak', name: 'Challenger', icon: 'ph-star', reqType: 'challenge', reqCount: 1 }
];

// Elements
const dashboardBtn = document.getElementById('dashboard-btn');
const dashboardModal = document.getElementById('dashboard-modal');
const closeDashboardBtn = document.getElementById('close-dashboard');
const challengeModal = document.getElementById('challenge-modal');
const closeChallengeBtn = document.getElementById('close-challenge');
const acceptChallengeBtn = document.getElementById('accept-challenge-btn');
const badgesGrid = document.getElementById('badges-grid');

// Update Stats UI
function updateDashboardUI() {
  document.getElementById('stat-recyclable').textContent = stats.recyclable;
  document.getElementById('stat-organic').textContent = stats.organic;
  document.getElementById('stat-hazardous').textContent = stats.hazardous;

  // Render Badges
  badgesGrid.innerHTML = '';
  const totalItems = stats.recyclable + stats.organic + stats.hazardous;
  const challengeCompleted = localStorage.getItem('challengeCompleted') === 'true';

  badges.forEach(badge => {
    let unlocked = false;
    if (badge.reqType === 'any' && totalItems >= badge.reqCount) unlocked = true;
    else if (badge.reqType === 'challenge' && challengeCompleted) unlocked = true;
    else if (stats[badge.reqType] >= badge.reqCount) unlocked = true;

    const badgeEl = document.createElement('div');
    badgeEl.className = `badge ${unlocked ? 'unlocked' : ''}`;
    badgeEl.innerHTML = `
      <i class="ph-fill ${badge.icon} badge-icon"></i>
      <div class="badge-name">${badge.name}</div>
    `;
    badgesGrid.appendChild(badgeEl);
  });
}

// Track Sort
function trackSort(category) {
  if (category.includes('Recyclable')) stats.recyclable++;
  if (category.includes('Organic')) stats.organic++;
  if (category.includes('Hazardous')) stats.hazardous++;
  
  localStorage.setItem('ecoStats', JSON.stringify(stats));
  updateDashboardUI();
}

// Event Listeners for Modals
dashboardBtn.addEventListener('click', () => {
  updateDashboardUI();
  dashboardModal.classList.remove('hidden');
});

closeDashboardBtn.addEventListener('click', () => {
  dashboardModal.classList.add('hidden');
});

closeChallengeBtn.addEventListener('click', () => {
  challengeModal.classList.add('hidden');
});

acceptChallengeBtn.addEventListener('click', () => {
  // Add 50 points (addScore adds 10, so loop 5 times)
  for(let i=0; i<5; i++) addScore(); 
  localStorage.setItem('challengeCompleted', 'true');
  challengeModal.classList.add('hidden');
  updateDashboardUI();
});

// Daily Challenge Initialization
const dailyChallenges = [
  "Bring a reusable bag to the grocery store today.",
  "Turn off the lights when leaving a room.",
  "Take a 5-minute shorter shower.",
  "Upcycle a plastic container instead of throwing it away.",
  "Avoid using single-use plastic straws today."
];

function initDailyChallenge() {
  const lastDate = localStorage.getItem('lastChallengeDate');
  const today = new Date().toDateString();
  
  if (lastDate !== today) {
    // New day, show challenge
    localStorage.setItem('lastChallengeDate', today);
    localStorage.setItem('challengeCompleted', 'false');
    
    document.getElementById('daily-challenge-text').textContent = 
      dailyChallenges[Math.floor(Math.random() * dailyChallenges.length)];
      
    setTimeout(() => {
      challengeModal.classList.remove('hidden');
    }, 1500);
  }
}

// Initialize on load
updateDashboardUI();
initDailyChallenge();

// --- Trash Dash Mini-Game ---

const gameBtn = document.getElementById('launch-game-btn');
const gameModal = document.getElementById('game-modal');
const closeGameBtn = document.getElementById('close-game');
const startGameBtn = document.getElementById('start-game-btn');
const restartGameBtn = document.getElementById('restart-game-btn');

const startOverlay = document.getElementById('game-start-overlay');
const gameOverOverlay = document.getElementById('game-over-overlay');
const timerBar = document.getElementById('game-timer-bar');
const itemContainer = document.getElementById('falling-item');
const itemIcon = document.getElementById('game-item-icon');
const itemName = document.getElementById('game-item-name');
const gameFeedback = document.getElementById('game-feedback');
const gameScoreDisplay = document.getElementById('game-score-display');
const earnedPtsDisplay = document.getElementById('earned-pts');

let gameLives = 3;
let gameScore = 0;
let currentItemKey = null;
let gameTimer;
let timeLeft = 3000;
const MAX_TIME = 3000;

const gameItems = Object.keys(wasteDatabase);

gameBtn.addEventListener('click', () => {
  gameModal.classList.remove('hidden');
  resetGameUI();
});

closeGameBtn.addEventListener('click', () => {
  gameModal.classList.add('hidden');
  clearInterval(gameTimer);
});

startGameBtn.addEventListener('click', startGame);
restartGameBtn.addEventListener('click', startGame);

const quitGameBtns = document.querySelectorAll('.quit-game-btn');
quitGameBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    gameModal.classList.add('hidden');
    clearInterval(gameTimer);
  });
});

// Sound Effects (Web Audio API)
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
}

function playTone(freq, type, duration, vol=0.1) {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function playSuccessSound() {
  playTone(523.25, 'sine', 0.1, 0.1); 
  setTimeout(() => playTone(659.25, 'sine', 0.2, 0.1), 100); 
}

function playErrorSound() {
  playTone(150, 'sawtooth', 0.3, 0.2);
}

function playGameOverSound() {
  playTone(300, 'square', 0.2, 0.1);
  setTimeout(() => playTone(250, 'square', 0.2, 0.1), 200);
  setTimeout(() => playTone(200, 'square', 0.4, 0.1), 400);
}

function playGameStartSound() {
  playTone(440, 'sine', 0.1, 0.1); 
  setTimeout(() => playTone(554.37, 'sine', 0.1, 0.1), 150); 
  setTimeout(() => playTone(659.25, 'sine', 0.2, 0.1), 300); 
  setTimeout(() => playTone(880, 'sine', 0.4, 0.1), 450); 
}

function playTimerWarningSound() {
  playTone(800, 'square', 0.05, 0.05);
  setTimeout(() => playTone(800, 'square', 0.05, 0.05), 150);
  setTimeout(() => playTone(800, 'square', 0.05, 0.05), 300);
}

function resetGameUI() {
  startOverlay.classList.remove('hidden');
  gameOverOverlay.classList.add('hidden');
  gameScore = 0;
  gameLives = 3;
  updateGameHeader();
}

function startGame() {
  initAudio();
  playGameStartSound();
  startOverlay.classList.add('hidden');
  gameOverOverlay.classList.add('hidden');
  gameScore = 0;
  gameLives = 3;
  updateGameHeader();
  nextItem();
}

function updateGameHeader() {
  gameScoreDisplay.textContent = gameScore;
  for(let i=1; i<=3; i++) {
    const heart = document.getElementById(`life-${i}`);
    if (i <= gameLives) {
      heart.classList.remove('heart-lost');
    } else {
      heart.classList.add('heart-lost');
    }
  }
}

function nextItem() {
  if (gameLives <= 0) return endGame();
  
  // Pick random item
  currentItemKey = gameItems[Math.floor(Math.random() * gameItems.length)];
  const data = wasteDatabase[currentItemKey];
  
  itemName.textContent = currentItemKey.toUpperCase();
  itemIcon.className = `ph-fill ${data.icon}`;
  
  // Reset animations
  itemContainer.className = 'falling-item anim-wobble';
  setTimeout(() => itemContainer.classList.remove('anim-wobble'), 200);
  
  startTimer();
}

function startTimer() {
  clearInterval(gameTimer);
  
  // Decrease time slightly as score goes up makes it harder
  timeLeft = Math.max(1000, MAX_TIME - (gameScore * 60)); 
  let current = timeLeft;
  
  timerBar.style.width = '100%';
  timerBar.style.backgroundColor = 'var(--primary)';
  
  let warningPlayed = false;
  const tickRate = 20;
  
  gameTimer = setInterval(() => {
    current -= tickRate;
    const percent = (current / timeLeft) * 100;
    timerBar.style.width = `${percent}%`;
    
    if (percent < 30) {
      timerBar.style.backgroundColor = 'var(--hazardous)';
      if (!warningPlayed) {
        warningPlayed = true;
        playTimerWarningSound();
      }
    } else if (percent < 60) {
      timerBar.style.backgroundColor = 'var(--general)';
    }
    
    if (current <= 0) {
      clearInterval(gameTimer);
      handleTimeout();
    }
  }, tickRate);
}

function handleTimeout() {
  playErrorSound();
  showFeedback("TOO SLOW!", true);
  loseLife();
}

function loseLife() {
  gameLives--;
  updateGameHeader();
  if (gameLives > 0) {
    setTimeout(nextItem, 1000);
  } else {
    setTimeout(endGame, 1000);
  }
}

function endGame() {
  playGameOverSound();
  clearInterval(gameTimer);
  gameOverOverlay.classList.remove('hidden');
  document.getElementById('final-score-text').textContent = `You correctly sorted ${gameScore} items!`;
  const earned = gameScore * 5;
  earnedPtsDisplay.textContent = earned;
  
  // Add global Eco-Points
  if (earned > 0) {
     let tempScore = parseInt(localStorage.getItem('ecoScore')) || 0;
     localStorage.setItem('ecoScore', tempScore + earned);
     document.getElementById('score-display').textContent = tempScore + earned;
  }
}

// Bins handling
document.querySelectorAll('.game-bin-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (gameLives <= 0 || !currentItemKey) return;
    clearInterval(gameTimer);
    
    const selectedType = btn.getAttribute('data-type');
    const actualType = wasteDatabase[currentItemKey].typeClass;
    
    if (selectedType === actualType || (actualType === 'general' && selectedType === 'hazardous')) {
      // Right!
      playSuccessSound();
      showFeedback(getPositiveMessage(), false);
      gameScore++;
      updateGameHeader();
      trackSort(wasteDatabase[currentItemKey].category);
      setTimeout(nextItem, 800);
    } else {
      // Wrong!
      playErrorSound();
      showFeedback(getNegativeMessage(), true);
      loseLife();
    }
  });
});

function showFeedback(text, isError) {
  gameFeedback.textContent = text;
  gameFeedback.classList.remove('hidden', 'error');
  if (isError) {
    gameFeedback.classList.add('error');
    itemContainer.classList.add('anim-explode');
  } else {
    itemContainer.classList.add('anim-celebrate');
  }
  
  // Restart popIn animation
  gameFeedback.style.animation = 'none';
  gameFeedback.offsetHeight; 
  gameFeedback.style.animation = 'popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
  
  setTimeout(() => {
    gameFeedback.classList.add('hidden');
    itemContainer.classList.remove('anim-explode', 'anim-celebrate');
  }, 800);
}

function getPositiveMessage() {
  const msgs = ["ECO-WARRIOR!", "NICE!", "PERFECT!", "BINGO!", "SWOOSH!"];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

function getNegativeMessage() {
  const msgs = ["YUCK!", "TOXIC!", "NOPE!", "EWW!", "YIKES!"];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

// --- User Authentication System ---

const authBtn = document.getElementById('auth-btn');
const userProfileBtn = document.getElementById('user-profile-btn');
const currentUsernameDisplay = document.getElementById('current-username-display');
const signoutBtn = document.getElementById('signout-btn');
const authModal = document.getElementById('auth-modal');
const closeAuthBtn = document.getElementById('close-auth');
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const authTitle = document.getElementById('auth-title');
const authSubmitBtn = document.getElementById('auth-submit-btn');
const authUsernameInput = document.getElementById('auth-username');
const authPasswordInput = document.getElementById('auth-password');
const authErrorMsg = document.getElementById('auth-error-msg');

let isLoginMode = true;

// Mock Database using LocalStorage
function getAccounts() {
  return JSON.parse(localStorage.getItem('ecoAccounts')) || {};
}

function saveAccount(username, password) {
  const accounts = getAccounts();
  accounts[username] = { password, score: 0 };
  localStorage.setItem('ecoAccounts', JSON.stringify(accounts));
}

function checkCredentials(username, password) {
  const accounts = getAccounts();
  return accounts[username] && accounts[username].password === password;
}

// Session Management
let currentUser = localStorage.getItem('currentUser');

function updateAuthUI() {
  if (currentUser) {
    authBtn.classList.add('hidden');
    userProfileBtn.classList.remove('hidden');
    currentUsernameDisplay.textContent = currentUser;
    
    // Load their specific score
    const accounts = getAccounts();
    if (accounts[currentUser] && typeof accounts[currentUser].score !== 'undefined') {
      currentScore = accounts[currentUser].score;
      localStorage.setItem('ecoScore', currentScore); 
      scoreDisplay.textContent = currentScore;
    }
  } else {
    authBtn.classList.remove('hidden');
    userProfileBtn.classList.add('hidden');
    currentUsernameDisplay.textContent = '';
    
    // Reset to generic score
    currentScore = 0;
    localStorage.setItem('ecoScore', 0);
    scoreDisplay.textContent = '0';
  }
}

// Override original addScore to also save to account
const originalAddScore = addScore;
addScore = function() {
  originalAddScore(); 
  if (currentUser) {
    const accounts = getAccounts();
    if (accounts[currentUser]) {
      accounts[currentUser].score = currentScore;
      localStorage.setItem('ecoAccounts', JSON.stringify(accounts));
    }
  }
}

// Init UI securely on start
updateAuthUI();

// Event Listeners for UI
authBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
  authErrorMsg.classList.add('hidden');
  authUsernameInput.value = '';
  authPasswordInput.value = '';
});

closeAuthBtn.addEventListener('click', () => {
  authModal.classList.add('hidden');
});

signoutBtn.addEventListener('click', () => {
  localStorage.removeItem('currentUser');
  currentUser = null;
  updateAuthUI();
});

tabLogin.addEventListener('click', () => {
  isLoginMode = true;
  tabLogin.classList.add('active');
  tabRegister.classList.remove('active');
  authTitle.textContent = 'Welcome Back!';
  authSubmitBtn.textContent = 'Sign In';
  authErrorMsg.classList.add('hidden');
});

tabRegister.addEventListener('click', () => {
  isLoginMode = false;
  tabRegister.classList.add('active');
  tabLogin.classList.remove('active');
  authTitle.textContent = 'Create Account';
  authSubmitBtn.textContent = 'Sign Up';
  authErrorMsg.classList.add('hidden');
});

authSubmitBtn.addEventListener('click', () => {
  const user = authUsernameInput.value.trim();
  const pass = authPasswordInput.value.trim();
  
  if (!user || !pass) {
    authErrorMsg.textContent = 'Please fill in all fields.';
    authErrorMsg.classList.remove('hidden');
    return;
  }
  
  if (isLoginMode) {
    // Login flow
    if (checkCredentials(user, pass)) {
       currentUser = user;
       localStorage.setItem('currentUser', user);
       authModal.classList.add('hidden');
       updateAuthUI();
    } else {
       authErrorMsg.textContent = 'Invalid username or password.';
       authErrorMsg.classList.remove('hidden');
    }
  } else {
    // Registration flow
    const accounts = getAccounts();
    if (accounts[user]) {
       authErrorMsg.textContent = 'Username already taken.';
       authErrorMsg.classList.remove('hidden');
    } else {
       saveAccount(user, pass);
       currentUser = user;
       localStorage.setItem('currentUser', user);
       authModal.classList.add('hidden');
       updateAuthUI();
    }
  }
});

// --- Service Worker Registration ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
      console.log('ServiceWorker registration successful');
    }, (err) => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// --- Facility Map Logic ---
const mapModal = document.getElementById('map-modal');
const closeMapBtn = document.getElementById('close-map');
if (closeMapBtn) {
  closeMapBtn.addEventListener('click', () => {
    mapModal.classList.add('hidden');
  });
}

// --- Audio Assistant (TTS) ---
function playAudioAssistant(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser doesn't support text to speech!");
  }
}

window.triggerAudio = function() {
  const container = document.querySelector('.quick-actions');
  if(!container) return;
  let speechRaw = "Here is what you should do: ";
  const items = container.querySelectorAll('.qa-item');
  items.forEach(el => {
     const text = el.querySelector('.qa-text')?.textContent || '';
     const subtext = el.querySelector('.qa-subtext')?.textContent || '';
     speechRaw += text + ". " + subtext + ". ";
  });
  playAudioAssistant(speechRaw);
}

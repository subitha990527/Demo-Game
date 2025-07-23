
function openDashboard() {
  alert("Welcome, Guest! Dashboard coming soon.");
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('dashboard-screen').classList.remove('hidden');
  document.getElementById('user-name').textContent = 'Guest';
  console.log("JavaScript Loaded!");
}
 

// Fight----------

function showFightScreen() {
  document.getElementById('dashboard-screen').classList.add('hidden');
  document.getElementById('fight-modal').classList.remove('hidden');
}


function closeFight() {
  document.getElementById('fight-modal').classList.add('hidden');
  document.getElementById('dashboard-screen').classList.remove('hidden');
}

function performAction(action) {
  const log = document.getElementById('fight-log');
  const popup = document.querySelector('.fight-popup');

  if (action === 'attack') {
    log.textContent = '💥 You attacked! Enemy took 20 damage.';
    popup.classList.add('flash');
  } else if (action === 'dodge') {
    log.textContent = '🛡️ You dodged the attack!';
  } else if (action === 'item') {
    log.textContent = '🧪 You used a health potion!';
  }
}

  // flash---------

  setTimeout(() => {
    popup.classList.remove('flash');
  }, 3000);


// Map-----------

function showMapScreen() {
  document.getElementById('dashboard-screen').classList.add('hidden');
  document.getElementById('map-modal').classList.remove('hidden');
  document.getElementById('map-result').textContent = '';
}

function closeMap() {
  document.getElementById('map-modal').classList.add('hidden');
  document.getElementById('dashboard-screen').classList.remove('hidden');
}

function visitArea(area) {
  const result = document.getElementById('map-result');
  if (area === 'Dharavi') {
    result.textContent = '🧱 You visited Dharavi. Found 10 XP!';
  } else if (area === 'Andheri') {
    result.textContent = '🛺 You explored Andheri. Found a health potion!';
  } else if (area === 'Colaba') {
    result.textContent = '🏖 You explored Colaba. Gained 20 coins!';
  }
}

//Inventory---------


function showInventory() {
  document.getElementById('dashboard-screen').classList.add('hidden');
  document.getElementById('inventory-modal').classList.remove('hidden');
  document.getElementById('inventory-log').textContent = '';
}

function closeInventory() {
  document.getElementById('inventory-modal').classList.add('hidden');
  document.getElementById('dashboard-screen').classList.remove('hidden');
}

function useItem(item) {
  document.getElementById('inventory-log').textContent = `✅ You used ${item}.`;
}

function sellItem(item) {
  document.getElementById('inventory-log').textContent = `💰 You sold ${item} for coins.`;
}

function upgradeItem(item) {
  document.getElementById('inventory-log').textContent = `🔧 You upgraded ${item}. It's stronger now!`;
}


//Logout

function goBack() {
  document.getElementById('dashboard-screen').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
}


/* ============================================================
   MAFIA GAME - GAME.JS
   Full Game Logic
   ============================================================ */

// ---------- STATE ----------
const state = {
  lang: 'ar',
  players: [],
  roles: [],
  alive: [],
  mafiaCount: 1,
  revealIndex: 0,
  nightKill: null,
  nightSave: null,
  selectedVote: null,
};

// ---------- TRANSLATIONS ----------
const T = {
  ar: {
    addPlayerPlaceholder: 'اسم اللاعب...',
    passTo: 'مرر الهاتف إلى',
    tapReveal: 'اضغط لعرض دورك',
    gotIt: 'حسنًا',
    nightFalls: 'الليل يهبط...',
    nightInstructions: 'المافيا تصحو وتختار ضحيتها. الدكتور ينقذ شخصًا.',
    mafiaChoose: 'المافيا تختار ضحية',
    doctorChoose: 'الدكتور يختار من ينقذ',
    dawnArrives: 'الصباح يأتي',
    dawn: 'الفجر',
    theVote: 'التصويت',
    whoMafia: 'من تظن أنه مافيا؟',
    executeVerdict: 'تنفيذ الحكم',
    continue: 'استمرار',
    playAgain: 'العب مجددًا',
    startVoting: 'بدء التصويت',
    startGame: 'ابدأ اللعبة',
    logoEye: 'لعبة',
    logoTitle: 'المافيا',
    addPlayer: 'أضف لاعبًا',
    numMafia: 'عدد المافيا',
    players: 'اللاعبون',
    noPlayers: 'لم يتم إضافة لاعبين بعد',
    needMorePlayers: 'تحتاج إلى %d لاعبين على الأقل للعب',
    tooManyMafia: 'عدد المافيا أكبر من عدد اللاعبين!',
    roleNames: { mafia: 'مافيا', doctor: 'دكتور', shaib: 'شايب', citizen: 'مواطن' },
    roleDescs: {
      mafia: 'أنت من المافيا. لا تكشف عن نفسك. تعاون مع فريقك ليلًا للقضاء على أهدافك.',
      doctor: 'أنت الدكتور. كل ليلة تستطيع إنقاذ شخص واحد من موت المافيا.',
      shaib: 'أنت الشايب. لديك حدس قوي وخبرة. صوتك يزن أكثر في التصويت.',
      citizen: 'أنت مواطن عادي. ساعد في كشف المافيا خلال التصويت النهاري.',
    },
    killedMsg: (name) => `☠️ تم قتل <span class="killed">${name}</span> الليلة.`,
    savedMsg: (name) => `💉 تم إنقاذ <span class="saved">${name}</span> من قِبَل الدكتور!`,
    noKillMsg: '😮 لا أحد مات الليلة. الدكتور أنقذ الضحية!',
    aliveCount: (n) => `<span class="highlight">${n}</span> لاعب لا يزال حيًا.`,
    voteElimTitle: (name) => `تم إقصاء ${name}`,
    voteElimBody: (name, role) => `صوّت المجتمع وأقصى <span class="killed">${name}</span>. كان دوره: <span class="highlight">${role}</span>.`,
    noVoteBody: 'لم يتم اختيار أي شخص.',
    mafiaWinsTitle: '💀 المافيا تنتصر!',
    mafiaWinsSub: 'تمكنت المافيا من السيطرة على المدينة.',
    citizensWinTitle: '🎉 المواطنون ينتصرون!',
    citizensWinSub: 'تم كشف المافيا والقضاء عليها!',
    survivors: 'الناجون',
    roundLabel: (n) => `الجولة ${n}`,
    deadLabel: (name) => `${name} (مات)`,
  },
  en: {
    addPlayerPlaceholder: 'Player name...',
    passTo: 'Pass the phone to',
    tapReveal: 'Tap to reveal your role',
    gotIt: 'Got it',
    nightFalls: 'Night Falls...',
    nightInstructions: 'Mafia wakes and chooses their victim. The Doctor saves someone.',
    mafiaChoose: 'Mafia chooses victim',
    doctorChoose: 'Doctor chooses to save',
    dawnArrives: 'Dawn Arrives',
    dawn: 'Dawn',
    theVote: 'The Vote',
    whoMafia: 'Who do you suspect is Mafia?',
    executeVerdict: 'Execute Verdict',
    continue: 'Continue',
    playAgain: 'Play Again',
    startVoting: 'Start Voting',
    startGame: 'Start Game',
    logoEye: 'THE GAME OF',
    logoTitle: 'MAFIA',
    addPlayer: 'Add Player',
    numMafia: 'Number of Mafias',
    players: 'Players',
    noPlayers: 'No players added yet',
    needMorePlayers: 'You need at least %d players to play',
    tooManyMafia: 'Too many mafias for the number of players!',
    roleNames: { mafia: 'MAFIA', doctor: 'DOCTOR', shaib: 'ELDER', citizen: 'CITIZEN' },
    roleDescs: {
      mafia: 'You are Mafia. Stay hidden. Collaborate with your team at night to eliminate targets.',
      doctor: 'You are the Doctor. Each night you can save one person from the Mafia\'s kill.',
      shaib: 'You are the Elder. Your wisdom gives you a stronger voice during voting.',
      citizen: 'You are a Citizen. Help the town identify and vote out the Mafia.',
    },
    killedMsg: (name) => `☠️ <span class="killed">${name}</span> was killed last night.`,
    savedMsg: (name) => `💉 <span class="saved">${name}</span> was saved by the Doctor!`,
    noKillMsg: '😮 Nobody died tonight. The Doctor saved the victim!',
    aliveCount: (n) => `<span class="highlight">${n}</span> players still alive.`,
    voteElimTitle: (name) => `${name} Was Eliminated`,
    voteElimBody: (name, role) => `The town voted to eliminate <span class="killed">${name}</span>. Their role was: <span class="highlight">${role}</span>.`,
    noVoteBody: 'No one was chosen.',
    mafiaWinsTitle: '💀 Mafia Wins!',
    mafiaWinsSub: 'The Mafia has taken over the city.',
    citizensWinsTitle: '🎉 Citizens Win!',
    citizenWinsSub: 'The Mafia has been exposed and eliminated!',
    citizensWinTitle: '🎉 Citizens Win!',
    citizensWinSub: 'The Mafia has been exposed and eliminated!',
    survivors: 'Survivors',
    roundLabel: (n) => `Round ${n}`,
    deadLabel: (name) => `${name} (dead)`,
  }
};

// ---------- HELPERS ----------
function t(key, ...args) {
  let val = T[state.lang][key];
  if (typeof val === 'function') return val(...args);
  if (typeof val === 'string' && args.length) return val.replace('%d', args[0]);
  return val || key;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function updateLangDOM() {
  const lang = state.lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update all data-ar / data-en elements
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = lang === 'ar' ? el.dataset.ar : el.dataset.en;
  });

  // Placeholder
  const pi = document.getElementById('player-input');
  if (pi) pi.placeholder = t('addPlayerPlaceholder');

  // Logo
  document.querySelector('.logo-eyebrow').textContent = t('logoEye');
  document.querySelector('.logo-title').textContent = t('logoTitle');
}

// ---------- LANGUAGE ----------
function setLang(lang) {
  state.lang = lang;
  document.getElementById('btn-ar').classList.toggle('active', lang === 'ar');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  updateLangDOM();
}

// ---------- MENU: PLAYERS ----------
function addPlayer() {
  const input = document.getElementById('player-input');
  const name = input.value.trim();
  if (!name) return;

  if (state.players.includes(name)) {
    input.select();
    return;
  }

  state.players.push(name);
  input.value = '';
  renderPlayerList();
  input.focus();
}

function removePlayer(index) {
  state.players.splice(index, 1);
  renderPlayerList();
}

function renderPlayerList() {
  const list = document.getElementById('player-list');
  const empty = document.getElementById('empty-state');
  const badge = document.getElementById('player-count-badge');
  badge.textContent = state.players.length;
  list.innerHTML = '';

  if (state.players.length === 0) {
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    state.players.forEach((name, i) => {
      const li = document.createElement('li');
      li.className = 'player-item';
      li.innerHTML = `
        <span class="player-num">${i + 1}</span>
        <span class="player-name-text">${name}</span>
        <button class="remove-btn" onclick="removePlayer(${i})">✕</button>
      `;
      list.appendChild(li);
    });
  }
}

// ---------- MAFIA COUNT ----------
function changeMafiaCount(delta) {
  state.mafiaCount = Math.max(1, state.mafiaCount + delta);
  document.getElementById('mafia-count-display').textContent = state.mafiaCount;
}

// ---------- Init ----------
function init() {
  const input = document.getElementById('player-input');
  if (input) {
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') addPlayer();
    });
  }
  updateLangDOM();
  renderPlayerList();
}

// Run init regardless of DOMContentLoaded timing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ---------- ROLE ASSIGNMENT ----------
function assignRoles() {
  const n = state.players.length;
  const roles = [];

  // Assign mafias
  for (let i = 0; i < state.mafiaCount; i++) roles.push('mafia');

  // 1 doctor if enough players
  if (n >= 4) roles.push('doctor');

  // 1 shaib if enough players
  if (n >= 5) roles.push('shaib');

  // Fill rest with citizens
  while (roles.length < n) roles.push('citizen');

  // Shuffle
  for (let i = roles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [roles[i], roles[j]] = [roles[j], roles[i]];
  }

  return roles;
}

// ---------- START GAME ----------
function startGame() {
  const errEl = document.getElementById('start-error');
  const minPlayers = state.mafiaCount * 2 + 2;

  if (state.players.length < minPlayers) {
    errEl.style.display = 'block';
    errEl.textContent = t('needMorePlayers', minPlayers);
    return;
  }
  if (state.mafiaCount >= state.players.length) {
    errEl.style.display = 'block';
    errEl.textContent = t('tooManyMafia');
    return;
  }
  errEl.style.display = 'none';

  state.roles = assignRoles();
  state.alive = [...state.players];
  state.revealIndex = 0;

  showRevealScreen();
}

// ---------- ROLE REVEAL PHASE ----------
function showRevealScreen() {
  state.revealIndex = 0;
  showNextReveal();
}

function showNextReveal() {
  // All done → go to first night
  if (state.revealIndex >= state.players.length) {
    showNightScreen();
    return;
  }

  showScreen('screen-reveal');
  const player = state.players[state.revealIndex];
  document.getElementById('pass-name').textContent = player;
  document.getElementById('role-card').style.display = 'none';
  document.getElementById('reveal-btn').style.display = 'block';

  // Reset reveal button text
  document.querySelector('#reveal-btn span').textContent = t('tapReveal');
}

function revealRole() {
  const idx = state.revealIndex;
  const role = state.roles[idx];
  const roleNames = T[state.lang].roleNames;
  const roleDescs = T[state.lang].roleDescs;

  const icons = { mafia: '🔫', doctor: '💉', shaib: '🧓', citizen: '👤' };

  document.getElementById('role-icon').textContent = icons[role];
  document.getElementById('role-name').textContent = roleNames[role];
  document.getElementById('role-name').className = `role-name ${role}`;
  document.getElementById('role-desc').textContent = roleDescs[role];

  // Update got-it button
  document.querySelector('#role-card .btn-secondary span').textContent = t('gotIt');

  document.getElementById('reveal-btn').style.display = 'none';
  document.getElementById('role-card').style.display = 'flex';
}

function nextPlayer() {
  state.revealIndex++;
  showNextReveal();
}

// ---------- NIGHT PHASE ----------
function showNightScreen() {
  showScreen('screen-night');
  document.querySelector('#screen-night .phase-title').textContent = t('nightFalls');
  document.querySelector('#screen-night .phase-sub').textContent = t('nightInstructions');
  document.querySelector('#screen-night .btn-primary span').textContent = t('dawnArrives');

  // Populate mafia target
  const mafiaSelect = document.getElementById('mafia-target');
  mafiaSelect.innerHTML = '';
  state.alive.forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    mafiaSelect.appendChild(opt);
  });

  // Doctor target
  const hasDoctor = state.roles.some((r, i) =>
    r === 'doctor' && state.alive.includes(state.players[i])
  );

  const doctorPanel = document.getElementById('doctor-action');
  if (hasDoctor) {
    doctorPanel.style.display = 'block';
    const doctorSelect = document.getElementById('doctor-target');
    doctorSelect.innerHTML = '';
    state.alive.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      doctorSelect.appendChild(opt);
    });
    // Label update
    document.querySelector('#doctor-action .field-label').textContent = t('doctorChoose');
  } else {
    doctorPanel.style.display = 'none';
  }

  document.querySelector('#mafia-action .field-label').textContent = t('mafiaChoose');
}

function processNight() {
  const killed = document.getElementById('mafia-target').value;
  const doctorPanel = document.getElementById('doctor-action');
  const saved = doctorPanel.style.display !== 'none'
    ? document.getElementById('doctor-target').value
    : null;

  state.nightKill = killed;
  state.nightSave = saved;

  showDayScreen(killed, saved);
}

// ---------- DAY / RESULT SCREEN ----------
function showDayScreen(killed, saved) {
  showScreen('screen-day');
  document.querySelector('#screen-day .phase-title').textContent = t('dawn');
  document.querySelector('#screen-day .btn-primary span').textContent = t('startVoting');

  const resultEl = document.getElementById('day-result');
  let html = '';

  if (killed && saved && killed === saved) {
    html += `<div>${t('noKillMsg')}</div>`;
  } else if (killed) {
    html += `<div>${t('killedMsg', killed)}</div>`;
    // Remove from alive
    state.alive = state.alive.filter(p => p !== killed);
  }

  if (saved && saved !== killed) {
    html += `<div>${t('savedMsg', saved)}</div>`;
  }

  html += `<div style="margin-top:0.8rem;opacity:0.6">${t('aliveCount', state.alive.length)}</div>`;
  resultEl.innerHTML = html;
}

// ---------- VOTING PHASE ----------
function startVoting() {
  // Check win before voting
  if (checkWinCondition()) return;

  showScreen('screen-vote');
  state.selectedVote = null;
  document.querySelector('#screen-vote .phase-title').textContent = t('theVote');
  document.querySelector('#screen-vote .phase-sub').textContent = t('whoMafia');
  document.querySelector('#screen-vote .btn-primary span').textContent = t('executeVerdict');

  const voteList = document.getElementById('vote-list');
  voteList.innerHTML = '';

  state.alive.forEach(name => {
    const item = document.createElement('div');
    item.className = 'vote-item';
    item.dataset.name = name;
    item.innerHTML = `
      <span class="vote-name">${name}</span>
      <span class="vote-check">✓</span>
    `;
    item.addEventListener('click', () => selectVote(name));
    voteList.appendChild(item);
  });
}

function selectVote(name) {
  state.selectedVote = name;
  document.querySelectorAll('.vote-item').forEach(item => {
    item.classList.toggle('selected', item.dataset.name === name);
  });
}

function processVote() {
  showScreen('screen-vote-result');
  document.querySelector('#screen-vote-result .btn-primary span').textContent = t('continue');
  const gavel = document.querySelector('#screen-vote-result .gavel-icon');
  if (gavel) gavel.style.display = 'block';

  const titleEl = document.getElementById('vote-result-title');
  const bodyEl = document.getElementById('vote-result-body');

  if (!state.selectedVote) {
    titleEl.textContent = '—';
    bodyEl.innerHTML = `<div>${t('noVoteBody')}</div>`;
    return;
  }

  const eliminated = state.selectedVote;
  const playerIdx = state.players.indexOf(eliminated);
  const role = state.roles[playerIdx];
  const roleName = T[state.lang].roleNames[role];

  titleEl.textContent = t('voteElimTitle', eliminated);
  bodyEl.innerHTML = `<div>${t('voteElimBody', eliminated, roleName)}</div>`;

  // Remove from alive
  state.alive = state.alive.filter(p => p !== eliminated);
  state.selectedVote = null;
}

// ---------- WIN CHECK ----------
function checkWinCondition() {
  const aliveRoles = state.alive.map(name => {
    const idx = state.players.indexOf(name);
    return state.roles[idx];
  });

  const mafiaAlive = aliveRoles.filter(r => r === 'mafia').length;
  const nonMafiaAlive = aliveRoles.filter(r => r !== 'mafia').length;

  if (mafiaAlive === 0) {
    showGameOver('citizens');
    return true;
  }
  if (mafiaAlive >= nonMafiaAlive) {
    showGameOver('mafia');
    return true;
  }
  return false;
}

function checkWin() {
  if (!checkWinCondition()) {
    showNightScreen();
  }
}

// ---------- GAME OVER ----------
function showGameOver(winner) {
  showScreen('screen-gameover');
  const iconEl = document.getElementById('gameover-icon');
  const titleEl = document.getElementById('gameover-title');
  const subEl = document.getElementById('gameover-sub');
  const survivorsList = document.getElementById('survivors-list');

  if (winner === 'mafia') {
    iconEl.textContent = '💀';
    titleEl.textContent = t('mafiaWinsTitle');
    subEl.textContent = t('mafiaWinsSub');
  } else {
    iconEl.textContent = '🎉';
    titleEl.textContent = t('citizensWinTitle');
    subEl.textContent = t('citizensWinSub');
  }

  // Survivors
  survivorsList.innerHTML = `<p data-key="survivors">${t('survivors')}</p>`;
  state.alive.forEach(name => {
    const idx = state.players.indexOf(name);
    const role = state.roles[idx];
    const roleName = T[state.lang].roleNames[role];
    const div = document.createElement('div');
    div.className = 'survivor-name';
    div.innerHTML = `
      <span class="survivor-dot"></span>
      <span>${name}</span>
      <span class="survivor-role">${roleName}</span>
    `;
    survivorsList.appendChild(div);
  });

  document.querySelector('#screen-gameover .btn-primary span').textContent = t('playAgain');
}

// ---------- RESET ----------
function resetGame() {
  state.players = [];
  state.roles = [];
  state.alive = [];
  state.mafiaCount = 1;
  state.revealIndex = 0;
  state.nightKill = null;
  state.nightSave = null;
  state.selectedVote = null;

  document.getElementById('mafia-count-display').textContent = '1';
  renderPlayerList();
  setLang(state.lang);
  showScreen('screen-menu');
}
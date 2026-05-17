const runTarget = 10;
const storageKey = 'oneDigitTashizanFriends';

const friends = [
  { id: 'ringo', name: 'りんごりす', emoji: '🐿️', description: 'りんごを ならべるのが だいすき。' },
  { id: 'kuma', name: 'もりくま', emoji: '🐻', description: 'ゆっくり かぞえる やさしい なかま。' },
  { id: 'usagi', name: 'ぴょんうさ', emoji: '🐰', description: 'せいかいすると ぴょんと はねるよ。' },
  { id: 'hiyoko', name: 'ぴよひよこ', emoji: '🐥', description: 'ちいさな こえで いっしょに かぞえるよ。' },
  { id: 'neko', name: 'にこねこ', emoji: '🐱', description: 'にこにこしながら こたえを まつよ。' },
  { id: 'panda', name: 'ころぱんだ', emoji: '🐼', description: 'まちがえても だいじょうぶと おしえてくれるよ。' },
  { id: 'tanuki', name: 'ぽんたぬき', emoji: '🦝', description: 'はっぱのうえに かずを おくよ。' },
  { id: 'hoshi', name: 'ほしのこ', emoji: '⭐', description: '10もん がんばると きらっと ひかるよ。' },
  { id: 'pengin', name: 'すいすいペンギン', emoji: '🐧', description: 'こおりの うえで すいすい かぞえるよ。' },
  { id: 'zou', name: 'ぱおぞう', emoji: '🐘', description: 'ながい はなで こたえを さがすよ。' },
  { id: 'kirin', name: 'のっぽきりん', emoji: '🦒', description: 'たかい ところから りんごを みつけるよ。' },
  { id: 'raion', name: 'がおライオン', emoji: '🦁', description: 'げんきな こえで せいかいを よろこぶよ。' },
  { id: 'saru', name: 'わくわくさる', emoji: '🐵', description: 'えだを ぴょんぴょん わたって おうえんするよ。' },
  { id: 'koala', name: 'ねむねむコアラ', emoji: '🐨', description: 'ゆっくり でも さいごまで まってくれるよ。' },
  { id: 'inu', name: 'わんわんいぬ', emoji: '🐶', description: 'しっぽを ふって こたえを まつよ。' },
  { id: 'kitsune', name: 'こんきつね', emoji: '🦊', description: 'ふわふわ しっぽで かずを かくにんするよ。' },
  { id: 'buta', name: 'ぷくぶた', emoji: '🐷', description: 'まるい はなで りんごを くんくんするよ。' },
  { id: 'ushi', name: 'もーうし', emoji: '🐮', description: 'のんびり いっしょに たしざんするよ。' },
  { id: 'uma', name: 'ぱかぱかうま', emoji: '🐴', description: 'せいかいへ ぱかぱか はしるよ。' },
  { id: 'hitsuji', name: 'もこひつじ', emoji: '🐑', description: 'もこもこ くもみたいに やさしいよ。' },
  { id: 'risu', name: 'どんぐりす', emoji: '🐿️', description: 'どんぐりと りんごを じょうずに わけるよ。' },
  { id: 'kaeru', name: 'けろかえる', emoji: '🐸', description: 'こたえが あうと けろっと わらうよ。' },
  { id: 'kame', name: 'のこのこかめ', emoji: '🐢', description: 'いそがず ひとつずつ すすむよ。' },
  { id: 'iruka', name: 'きらきらイルカ', emoji: '🐬', description: 'なみの うえで こたえを ジャンプするよ。' },
  { id: 'kujira', name: 'ざぶんくじら', emoji: '🐳', description: 'おおきな しおを ふいて おいわいするよ。' },
  { id: 'tako', name: 'くるりたこ', emoji: '🐙', description: 'たくさんの てで りんごを かぞえるよ。' },
  { id: 'kani', name: 'ちょきかに', emoji: '🦀', description: 'ちょきちょき はさみで かずを そろえるよ。' },
  { id: 'sakana', name: 'ぷくぷくさかな', emoji: '🐠', description: 'あわを ぷくぷく だして おうえんするよ。' },
  { id: 'chou', name: 'ひらひらちょう', emoji: '🦋', description: 'はねを ひらひら させて とんでくるよ。' },
  { id: 'tentou', name: 'てんてんてんとう', emoji: '🐞', description: 'せなかの てんを いっしょに かぞえるよ。' },
  { id: 'mitsubachi', name: 'ぶんぶんみつばち', emoji: '🐝', description: 'ぶんぶん とびながら はなまるを くれるよ。' },
  { id: 'kotori', name: 'さえずりことり', emoji: '🐦', description: 'せいかいの うたを ちゅんと うたうよ。' },
  { id: 'fukurou', name: 'ものしりふくろう', emoji: '🦉', description: 'よるでも しずかに みまもってくれるよ。' },
  { id: 'pengin_ko', name: 'こペンギン', emoji: '🐧', description: 'ちいさな あしあとを ならべて すすむよ。' },
  { id: 'dragon', name: 'にじドラゴン', emoji: '🐉', description: 'にじいろの ほのおで やるきを くれるよ。' },
  { id: 'unicorn', name: 'ゆめユニコーン', emoji: '🦄', description: 'きらきらの みちを つくって くれるよ。' },
  { id: 'rocket', name: 'びゅんロケット', emoji: '🚀', description: 'こたえまで びゅんと とんでいくよ。' },
  { id: 'tsuki', name: 'おつきさま', emoji: '🌙', description: 'くらい よるにも やさしく てらすよ。' },
  { id: 'taiyou', name: 'にこにこたいよう', emoji: '☀️', description: 'あかるい ひかりで げんきを くれるよ。' },
  { id: 'niji', name: 'にじのこ', emoji: '🌈', description: '7つの いろで せいかいを かざるよ。' },
  { id: 'hana', name: 'はなちゃん', emoji: '🌼', description: 'せいかいするたび にっこり さくよ。' },
  { id: 'kinoko', name: 'ぽこきのこ', emoji: '🍄', description: 'もりの かげから ぽこっと でてくるよ。' },
  { id: 'donguri', name: 'ころどんぐり', emoji: '🌰', description: 'ころころ ころがって こたえを さがすよ。' },
  { id: 'yuki', name: 'ゆきだるま', emoji: '⛄', description: 'つめたい てでも あたたかく おうえんするよ。' },
  { id: 'ame', name: 'ぽつぽつあめ', emoji: '☔', description: 'ぽつぽつの おとで リズムよく かぞえるよ。' },
  { id: 'kumo', name: 'ふわくも', emoji: '☁️', description: 'ふわふわ うかんで ひとやすみを くれるよ。' },
  { id: 'densha', name: 'がたごとでんしゃ', emoji: '🚃', description: 'こたえの えきまで がたごと はこぶよ。' },
  { id: 'kuruma', name: 'ぶーぶーくるま', emoji: '🚗', description: 'みちを すすんで せいかいへ むかうよ。' },
  { id: 'hikouki', name: 'すいすいひこうき', emoji: '✈️', description: 'そらから りんごを みつけてくれるよ。' },
  { id: 'takara', name: 'きらきらたからばこ', emoji: '🎁', description: 'がんばった きもちを たいせつに しまうよ。' }
];

const els = {
  streakCount: document.querySelector('#streak-count'),
  remainingCount: document.querySelector('#remaining-count'),
  progressBar: document.querySelector('#progress-bar'),
  addendA: document.querySelector('#addend-a'),
  addendB: document.querySelector('#addend-b'),
  groupALabel: document.querySelector('#group-a-label'),
  groupBLabel: document.querySelector('#group-b-label'),
  applesA: document.querySelector('#apples-a'),
  applesB: document.querySelector('#apples-b'),
  answerForm: document.querySelector('#answer-form'),
  answerInput: document.querySelector('#answer-input'),
  feedback: document.querySelector('#feedback'),
  choiceGrid: document.querySelector('#choice-grid'),
  newProblemButton: document.querySelector('#new-problem-button'),
  resetRunButton: document.querySelector('#reset-run-button'),
  resetBookButton: document.querySelector('#reset-book-button'),
  ownedCount: document.querySelector('#owned-count'),
  totalCount: document.querySelector('#total-count'),
  bookGrid: document.querySelector('#book-grid'),
  lastReward: document.querySelector('#last-reward'),
  rewardModal: document.querySelector('#reward-modal'),
  modalEmoji: document.querySelector('#modal-emoji'),
  modalTitle: document.querySelector('#modal-title'),
  modalDescription: document.querySelector('#modal-description'),
  closeModalButton: document.querySelector('#close-modal-button')
};

const state = {
  currentProblem: null,
  streak: 0,
  ownedIds: loadBook(),
  lastRewardId: null
};

function loadBook() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || '[]');
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveBook() {
  localStorage.setItem(storageKey, JSON.stringify([...state.ownedIds]));
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(values) {
  return [...values].sort(() => Math.random() - 0.5);
}

function createProblem() {
  const a = randomInt(1, 9);
  const b = randomInt(1, 9);
  return { a, b, answer: a + b };
}

function makeApples(count) {
  return Array.from({ length: count }, () => '<span class="apple" aria-hidden="true">🍎</span>').join('');
}

function makeChoices(answer) {
  const choices = new Set([answer]);
  while (choices.size < 4) {
    choices.add(Math.max(2, Math.min(18, answer + randomInt(-3, 3))));
  }
  return shuffle([...choices]);
}

function renderProblem() {
  const { a, b, answer } = state.currentProblem;
  els.addendA.textContent = a;
  els.addendB.textContent = b;
  els.groupALabel.textContent = a;
  els.groupBLabel.textContent = b;
  els.applesA.innerHTML = makeApples(a);
  els.applesB.innerHTML = makeApples(b);
  els.choiceGrid.innerHTML = makeChoices(answer)
    .map((choice) => `<button class="choice-button" type="button" data-choice="${choice}">${choice}</button>`)
    .join('');
  els.answerInput.value = '';
  els.answerInput.focus();
}

function renderProgress() {
  els.streakCount.textContent = state.streak;
  els.remainingCount.textContent = Math.max(runTarget - state.streak, 0);
  els.progressBar.style.width = `${(state.streak / runTarget) * 100}%`;
}

function renderBook() {
  els.totalCount.textContent = friends.length;
  els.ownedCount.textContent = state.ownedIds.size;
  els.bookGrid.innerHTML = friends.map((friend, index) => {
    const isOwned = state.ownedIds.has(friend.id);
    return `
      <article class="book-card${isOwned ? '' : ' locked'}">
        <div class="friend-emoji">${isOwned ? friend.emoji : '?'}</div>
        <h3>${index + 1}. ${isOwned ? friend.name : '???'}</h3>
        <p>${isOwned ? friend.description : '10もん できたら あえるよ。'}</p>
      </article>
    `;
  }).join('');
}

function renderLastReward() {
  const friend = friends.find((candidate) => candidate.id === state.lastRewardId);
  if (!friend) {
    els.lastReward.className = 'last-reward empty';
    els.lastReward.innerHTML = `
      <div class="friend-emoji">?</div>
      <p>まだ なかまは いないよ。10もん やってみよう。</p>
    `;
    return;
  }
  els.lastReward.className = 'last-reward';
  els.lastReward.innerHTML = `
    <div class="friend-emoji">${friend.emoji}</div>
    <h3>${friend.name}</h3>
    <p>${friend.description}</p>
  `;
}

function setFeedback(message, type = '') {
  els.feedback.textContent = message;
  els.feedback.className = `feedback ${type}`.trim();
}

function nextProblem(message = 'りんごを ひとつずつ かぞえてみよう。') {
  state.currentProblem = createProblem();
  renderProblem();
  setFeedback(message);
}

function chooseReward() {
  const unowned = friends.filter((friend) => !state.ownedIds.has(friend.id));
  const pool = unowned.length > 0 ? unowned : friends;
  return pool[randomInt(0, pool.length - 1)];
}

function awardFriend() {
  const friend = chooseReward();
  state.ownedIds.add(friend.id);
  state.lastRewardId = friend.id;
  state.streak = 0;
  saveBook();
  renderProgress();
  renderBook();
  renderLastReward();
  els.modalEmoji.textContent = friend.emoji;
  els.modalTitle.textContent = `${friend.name}が きたよ`;
  els.modalDescription.textContent = friend.description;
  els.rewardModal.hidden = false;
}

function checkAnswer(value) {
  if (Number.isNaN(value)) {
    setFeedback('こたえを いれてね。', 'error');
    els.answerInput.focus();
    return;
  }

  if (value !== state.currentProblem.answer) {
    setFeedback('もういちど、りんごを かぞえてみよう。', 'error');
    els.answerInput.select();
    return;
  }

  state.streak += 1;
  renderProgress();

  if (state.streak >= runTarget) {
    setFeedback('10もん できたよ。あたらしい なかまが きたよ。', 'success');
    awardFriend();
  } else {
    nextProblem(`せいかい。あと ${runTarget - state.streak} もんだよ。`);
  }
}

function resetRun() {
  state.streak = 0;
  renderProgress();
  nextProblem('できた かずを 0にしたよ。');
}

function resetBook() {
  const ok = window.confirm('ずかんを けしても いいですか。');
  if (!ok) return;
  state.ownedIds.clear();
  state.lastRewardId = null;
  saveBook();
  renderBook();
  renderLastReward();
  setFeedback('ずかんを けしたよ。');
}

function closeModal() {
  els.rewardModal.hidden = true;
  nextProblem('つぎの 10もんも やってみよう。');
}

els.answerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  checkAnswer(Number(els.answerInput.value));
});

els.choiceGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]');
  if (!button) return;
  const value = Number(button.dataset.choice);
  els.answerInput.value = value;
  checkAnswer(value);
});

els.newProblemButton.addEventListener('click', () => nextProblem('べつの もんだいに したよ。'));
els.resetRunButton.addEventListener('click', resetRun);
els.resetBookButton.addEventListener('click', resetBook);
els.closeModalButton.addEventListener('click', closeModal);
els.rewardModal.addEventListener('click', (event) => {
  if (event.target === els.rewardModal) closeModal();
});

renderProgress();
renderBook();
renderLastReward();
nextProblem();

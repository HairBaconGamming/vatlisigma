// ======================================================
// 1. CƠ SỞ DỮ LIỆU CÔNG THỨC
// ======================================================
const formulas = [
    // ==================================================
    // I. CHUYỂN ĐỘNG BIẾN ĐỔI ĐỀU
    // ==================================================
    { id: "bdd_a_def", group: "I. Biến đổi đều", desc: "Gia tốc (định nghĩa)", tex: "a = \\frac{v - v_0}{t}" },
    { id: "bdd_v_tuc_thoi", group: "I. Biến đổi đều", desc: "Vận tốc tức thời", tex: "v = v_0 + at" },
    { id: "bdd_s", group: "I. Biến đổi đều", desc: "Quãng đường (s)", tex: "s = v_0t + \\frac{1}{2}at^2" },
    { id: "bdd_x", group: "I. Biến đổi đều", desc: "Phương trình tọa độ", tex: "x = x_0 + v_0t + \\frac{1}{2}at^2" },
    { id: "bdd_doc_lap", group: "I. Biến đổi đều", desc: "Công thức độc lập thời gian", tex: "v^2 - v_0^2 = 2as" },

    // --- SUY DIỄN ---
    { id: "bdd_t_from_v_a", group: "I. Biến đổi đều", desc: "Tính thời gian (từ v, a)", tex: "t = \\frac{v - v_0}{a}", advanced: true },
    { id: "bdd_v0_from_v_a", group: "I. Biến đổi đều", desc: "Tính vận tốc đầu (v0)", tex: "v_0 = v - at", advanced: true },
    { id: "bdd_a_from_s", group: "I. Biến đổi đều", desc: "Tính gia tốc (từ s, t, v0)", tex: "a = \\frac{2(s - v_0t)}{t^2}", advanced: true },
    { id: "bdd_a_from_v_s", group: "I. Biến đổi đều", desc: "Tính gia tốc (từ v, s)", tex: "a = \\frac{v^2 - v_0^2}{2s}", advanced: true },
    { id: "bdd_s_from_v_a", group: "I. Biến đổi đều", desc: "Tính quãng đường (từ v, a)", tex: "s = \\frac{v^2 - v_0^2}{2a}", advanced: true },
    { id: "bdd_v_from_s_a", group: "I. Biến đổi đều", desc: "Tính vận tốc sau (từ s, a)", tex: "v = \\sqrt{v_0^2 + 2as}", advanced: true },
    { id: "bdd_v0_from_s_a", group: "I. Biến đổi đều", desc: "Tính vận tốc đầu (từ s, a)", tex: "v_0 = \\sqrt{v^2 - 2as}", advanced: true },
    { id: "bdd_quang_duong_n", group: "I. Biến đổi đều", desc: "Quãng đường trong giây thứ n", tex: "\\Delta s_n = v_0 + \\frac{1}{2}a(2n - 1)", advanced: true },

    // ==================================================
    // II. CHUYỂN ĐỘNG RƠI TỰ DO
    // ==================================================
    { id: "rtd_a", group: "II. Rơi tự do", desc: "Gia tốc rơi", tex: "a = g \\approx 9.8" },
    { id: "rtd_v", group: "II. Rơi tự do", desc: "Vận tốc rơi", tex: "v = gt" },
    { id: "rtd_s", group: "II. Rơi tự do", desc: "Quãng đường rơi", tex: "S = \\frac{1}{2}gt^2" },
    { id: "rtd_doc_lap", group: "II. Rơi tự do", desc: "Độc lập (Rơi tự do)", tex: "v^2 = 2gS" },
    { id: "rtd_t", group: "II. Rơi tự do", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h}{g}}" },

    // --- SUY DIỄN ---
    { id: "rtd_t_from_v", group: "II. Rơi tự do", desc: "Tính thời gian rơi (từ v)", tex: "t = \\frac{v}{g}", advanced: true },
    { id: "rtd_t_from_s", group: "II. Rơi tự do", desc: "Tính thời gian (từ quãng đường S)", tex: "t = \\sqrt{\\frac{2S}{g}}", advanced: true },
    { id: "rtd_s_from_v", group: "II. Rơi tự do", desc: "Tính quãng đường/độ cao (từ v)", tex: "S = \\frac{v^2}{2g}", advanced: true },
    { id: "rtd_v_from_h", group: "II. Rơi tự do", desc: "Tính vận tốc (từ độ cao h)", tex: "v = \\sqrt{2gh}", advanced: true },
    { id: "rtd_giay_cuoi", group: "II. Rơi tự do", desc: "Quãng đường rơi giây cuối", tex: "\\Delta S_{cuoi} = g(t - 0.5)", advanced: true },

    // ==================================================
    // III. CHUYỂN ĐỘNG NÉM NGANG
    // ==================================================
    { id: "nn_t", group: "III. Ném ngang", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h}{g}}" },
    { id: "nn_l", group: "III. Ném ngang", desc: "Tầm xa (L)", tex: "L = v_0 \\sqrt{\\frac{2h}{g}}" },
    { id: "nn_v", group: "III. Ném ngang", desc: "Vận tốc chạm đất", tex: "v = \\sqrt{v_0^2 + (gt)^2}" },
    { id: "nn_tan", group: "III. Ném ngang", desc: "Góc lệch (tan alpha)", tex: "\\tan \\alpha = \\frac{gt}{v_0}" },
    { id: "nn_y", group: "III. Ném ngang", desc: "Phương trình quỹ đạo", tex: "y = \\frac{g}{2v_0^2}x^2" },

    // --- SUY DIỄN ---
    { id: "nn_v0_from_l", group: "III. Ném ngang", desc: "Tính vận tốc ném (từ L, h)", tex: "v_0 = L \\sqrt{\\frac{g}{2h}}", advanced: true },
    { id: "nn_h_from_l", group: "III. Ném ngang", desc: "Tính độ cao (từ L, v0)", tex: "h = \\frac{gL^2}{2v_0^2}", advanced: true },
    { id: "nn_vx", group: "III. Ném ngang", desc: "Vận tốc theo phương ngang (Vx)", tex: "v_x = v_0", advanced: true },
    { id: "nn_vy", group: "III. Ném ngang", desc: "Vận tốc theo phương thẳng đứng (Vy)", tex: "v_y = gt", advanced: true },
    { id: "nn_x_t", group: "III. Ném ngang", desc: "Tọa độ ngang (x)", tex: "x = v_0t", advanced: true },
    { id: "nn_y_t", group: "III. Ném ngang", desc: "Tọa độ đứng (y)", tex: "y = \\frac{1}{2}gt^2", advanced: true }
];

// ======================================================
// 2. LOGIC CẬP NHẬT & THEO DÕI HỌC TẬP
// ======================================================

let currentMode = 'mixed';
let currentItem = null;
let currentSubMode = '';
let isAnswered = false;
let formulaWeights = {};

document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo weights
    formulas.forEach(f => {
        if(!f.id) f.id = f.tex;
        formulaWeights[f.id] = 1; 
    });

    renderTopicSelector(); // <--- Tự động tạo danh sách chủ đề
    renderList();
    changeQuizMode();
    
    const mathField = document.getElementById('math-input');
    if(mathField) {
        mathField.addEventListener('input', () => {
             document.getElementById('feedback-msg').classList.add('hidden');
        });
    }
});

// Hàm tạo danh sách chủ đề tự động cho Select Box
function renderTopicSelector() {
    const topicSelect = document.getElementById('quiz-topic');
    if(!topicSelect) return;

    // Lấy danh sách các Group duy nhất
    const groups = [...new Set(formulas.map(item => item.group))];
    
    // Giữ nguyên option "Tất cả", thêm các group vào sau
    groups.forEach(groupName => {
        const option = document.createElement('option');
        option.value = groupName;
        option.textContent = groupName;
        topicSelect.appendChild(option);
    });
}

// ======================================================
// 3. LOGIC HIỂN THỊ DANH SÁCH (Tab Ôn tập)
// ======================================================

let currentListFilter = 'basic'; 

function switchListFilter(mode) {
    currentListFilter = mode;
    const buttons = document.querySelectorAll('.sub-tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(mode)) btn.classList.add('active');
    });
    renderList();
}

function renderList() {
    const container = document.getElementById('formulas-container');
    container.innerHTML = '';
    
    const filteredFormulas = formulas.filter(item => {
        if (currentListFilter === 'basic') return !item.advanced;
        if (currentListFilter === 'advanced') return item.advanced;
        return true;
    });

    if (filteredFormulas.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888;">Không có công thức nào.</p>';
        return;
    }

    const groups = {};
    filteredFormulas.forEach(item => {
        if (!groups[item.group]) groups[item.group] = [];
        groups[item.group].push(item);
    });

    for (const [groupName, groupItems] of Object.entries(groups)) {
        const header = document.createElement('div');
        header.className = 'group-header'; 
        if(currentListFilter === 'advanced') header.classList.add('active');

        header.innerHTML = `<h3>${groupName} (${groupItems.length})</h3><span class="toggle-icon">▼</span>`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'group-content';
        if(currentListFilter === 'advanced') contentDiv.classList.add('open');

        groupItems.forEach(item => {
            const advClass = item.advanced ? 'advanced' : '';
            const badge = item.advanced ? '<span style="color:red; font-size:0.8em; margin-left:5px">★</span>' : '';
            const card = document.createElement('div');
            card.className = `formula-card ${advClass}`;
            card.innerHTML = `<div class="formula-desc">${item.desc} ${badge}</div><div class="formula-content">\\[${item.tex}\\]</div>`;
            contentDiv.appendChild(card);
        });

        header.onclick = () => {
            header.classList.toggle('active');
            contentDiv.classList.toggle('open');
        };

        container.appendChild(header);
        container.appendChild(contentDiv);
    }
    MathJax.typesetPromise();
}

function switchTab(tabName) {
    // 1. Ẩn tất cả các view và bỏ trạng thái active của nút
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    // 2. Nếu chuyển sang tab KHÁC game, hãy dừng game lại (để tránh chạy ngầm)
    if (tabName !== 'game' && typeof stopGame === 'function') {
        // Dừng game, reset về màn hình chờ (false = không hiện Game Over)
        stopGame(false);
    }

    // 3. Xử lý logic hiển thị từng tab
    if (tabName === 'list') {
        document.getElementById('list-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'list\')"]').classList.add('active');
    } 
    else if (tabName === 'quiz') {
        document.getElementById('quiz-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'quiz\')"]').classList.add('active');
        // Tạo câu hỏi mới khi vào tab Quiz
        nextQuestion(); 
    } 
    else if (tabName === 'game') {
        document.getElementById('game-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'game\')"]').classList.add('active');
        // Đảm bảo game ở trạng thái chờ (hiện nút Start)
        if(typeof stopGame === 'function') stopGame(false);
    }
}

function changeQuizMode() {
    currentMode = document.getElementById('quiz-mode').value;
    nextQuestion();
}

// ======================================================
// 4. LOGIC CHỌN CÂU HỎI (QUAN TRỌNG)
// ======================================================

function nextQuestion() {
    isAnswered = false;
    // Reset UI
    document.getElementById('feedback-msg').className = 'feedback hidden';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('correct-answer-display').className = 'hidden';
    document.getElementById('btn-next').classList.add('hidden');
    
    ['flashcard-area', 'options-container', 'essay-area'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById('quiz-main-display').innerHTML = '';

    // --- BƯỚC 1: LỌC DỮ LIỆU ---
    // Lấy cấu hình hiện tại từ giao diện
    const isAdvancedMode = document.getElementById('advanced-toggle').checked;
    const selectedTopic = document.getElementById('quiz-topic') ? document.getElementById('quiz-topic').value : 'all';

    const activeFormulas = formulas.filter(item => {
        // Điều kiện 1: Advanced toggle
        const matchAdvanced = isAdvancedMode ? true : !item.advanced;
        // Điều kiện 2: Topic Scope (Nếu chọn 'all' thì luôn đúng, ngược lại phải khớp group)
        const matchTopic = (selectedTopic === 'all') || (item.group === selectedTopic);
        
        return matchAdvanced && matchTopic;
    });

    if (activeFormulas.length === 0) {
        document.getElementById('quiz-question').textContent = "Không tìm thấy câu hỏi phù hợp!";
        document.getElementById('quiz-category').textContent = "Lỗi";
        return;
    }

    // --- BƯỚC 2: CHỌN CÂU HỎI (WEIGHTED) ---
    if (currentMode === 'mixed') {
        currentItem = getSmartWeightedQuestion(activeFormulas);
    } else {
        const randomIndex = Math.floor(Math.random() * activeFormulas.length);
        currentItem = activeFormulas[randomIndex];
    }
    
    // Hiển thị thông tin
    const topicSuffix = currentItem.advanced ? " (Nâng cao)" : "";
    document.getElementById('quiz-category').textContent = currentItem.group + topicSuffix;

    // --- BƯỚC 3: QUYẾT ĐỊNH SUB-MODE (GIAO DIỆN) ---
    let displayMode = currentMode;
    if (currentMode === 'mixed') {
        const modes = ['multiple', 'fill', 'essay', 'flashcard'];
        const w = formulaWeights[currentItem.id] || 1;
        // Logic thông minh: Thuộc bài (w thấp) -> hỏi khó (Tự luận). Chưa thuộc (w cao) -> hỏi dễ.
        if (w < 0.8) { 
            displayMode = Math.random() > 0.3 ? 'essay' : 'fill';
        } else { 
            displayMode = modes[Math.floor(Math.random() * modes.length)];
        }
    }
    currentSubMode = displayMode;

    // Setup giao diện
    if (displayMode === 'flashcard') setupFlashcard();
    else if (displayMode === 'multiple') setupMultipleChoice(activeFormulas);
    else if (displayMode === 'fill') setupFillInBlank(activeFormulas);
    else if (displayMode === 'essay') setupEssay();
}

function getSmartWeightedQuestion(availableList) {
    let pool = [];
    availableList.forEach(item => {
        const w = formulaWeights[item.id] || 1;
        // Nhân bản item trong pool dựa trên trọng số (càng sai nhiều càng xuất hiện nhiều)
        let count = Math.ceil(w * 3); 
        if(count > 6) count = 6; // Giới hạn max
        if(count < 1) count = 1;
        for(let i=0; i<count; i++) pool.push(item);
    });
    
    return pool[Math.floor(Math.random() * pool.length)];
}

function updateWeight(isCorrect) {
    const id = currentItem.id;
    if(!formulaWeights[id]) formulaWeights[id] = 1;

    if(isCorrect) {
        formulaWeights[id] *= 0.6; // Giảm nhanh nếu đúng
        if(formulaWeights[id] < 0.2) formulaWeights[id] = 0.2;
    } else {
        formulaWeights[id] += 1.0; // Tăng nếu sai
    }
}

// --- SETUP FUNCTIONS ---

function setupFlashcard() {
    document.getElementById('flashcard-area').classList.remove('hidden');
    document.getElementById('btn-reveal').classList.remove('hidden');
    document.getElementById('flashcard-answer').classList.add('hidden');
    document.getElementById('quiz-question').textContent = `Công thức: ${currentItem.desc}?`;
    const div = document.getElementById('flashcard-answer');
    div.innerHTML = `\\[${currentItem.tex}\\]`;
    MathJax.typesetPromise([div]);
}

function revealFlashcard() {
    document.getElementById('flashcard-answer').classList.remove('hidden');
    document.getElementById('btn-reveal').classList.add('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
    updateWeight(true); 
}

function setupMultipleChoice(activeList) {
    document.getElementById('options-container').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Chọn công thức đúng: ${currentItem.desc}`;
    
    let options = [currentItem];
    // Lấy đáp án nhiễu từ cùng topic nếu có thể để khó hơn
    const sameGroupList = activeList.filter(i => i.group === currentItem.group);
    const distractorsSource = sameGroupList.length > 3 ? sameGroupList : activeList;

    while(options.length < 4) {
        let r = distractorsSource[Math.floor(Math.random() * distractorsSource.length)];
        if(!options.includes(r)) options.push(r);
    }
    options = shuffleArray(options);

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `\\(${opt.tex}\\)`;
        btn.onclick = () => checkMultipleChoice(btn, opt === currentItem);
        container.appendChild(btn);
    });
    MathJax.typesetPromise([container]);
}

function setupFillInBlank(activeList) {
    document.getElementById('options-container').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Hoàn thành công thức: ${currentItem.desc}`;

    let parts = currentItem.tex.split('=');
    let left = parts[0];
    let right = parts.slice(1).join('=');
    
    document.getElementById('quiz-main-display').innerHTML = `\\[${left} = \\boxed{?}\\]`;
    MathJax.typesetPromise([document.getElementById('quiz-main-display')]);

    let options = [right];
    const sameGroupList = activeList.filter(i => i.group === currentItem.group);
    const distractorsSource = sameGroupList.length > 3 ? sameGroupList : activeList;

    while(options.length < 4) {
        let r = distractorsSource[Math.floor(Math.random() * distractorsSource.length)];
        let rParts = r.tex.split('=');
        if(rParts.length > 1) {
            let rRight = rParts.slice(1).join('=');
            if(!options.includes(rRight)) options.push(rRight);
        }
    }
    options = shuffleArray(options);

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    options.forEach(optTex => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `\\(${optTex}\\)`;
        btn.onclick = () => checkMultipleChoice(btn, optTex === right);
        container.appendChild(btn);
    });
    MathJax.typesetPromise([container]);
}

function setupEssay() {
    document.getElementById('essay-area').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Nhập công thức: ${currentItem.desc}`;
    const mf = document.getElementById('math-input');
    mf.value = '';
    setTimeout(() => mf.focus(), 100);
}

// --- CHECKING LOGIC ---

function checkMultipleChoice(btn, isCorrect) {
    if(isAnswered) return;
    isAnswered = true;
    updateWeight(isCorrect);

    if(isCorrect) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('wrong');
        showFeedback(false);
        // Highlight đúng
        document.querySelectorAll('.option-btn').forEach(b => {
             if(b.innerHTML.includes(currentItem.tex) || (currentSubMode === 'fill' && currentItem.tex.includes(normalizeTex(b.textContent)))) {
                 b.classList.add('correct');
             }
        });
    }
    document.getElementById('btn-next').classList.remove('hidden');
}

function checkEssayAnswer() {
    if(isAnswered) return;
    const mf = document.getElementById('math-input');
    const isCorrect = checkMathEquivalence(mf.value, currentItem.tex);
    updateWeight(isCorrect);
    showFeedback(isCorrect);
    isAnswered = true;
    document.getElementById('btn-next').classList.remove('hidden');
}

function showHint() {
    const parts = currentItem.tex.split('=');
    const mf = document.getElementById('math-input');
    if(parts.length > 0) { 
        mf.value = parts[0] + '='; 
        mf.focus(); 
    }
}

function showFeedback(isCorrect) {
    const fb = document.getElementById('feedback-msg');
    const ansDisplay = document.getElementById('correct-answer-display');
    fb.classList.remove('hidden');
    if(isCorrect) {
        fb.textContent = "🎉 Chính xác!";
        fb.className = "feedback correct";
    } else {
        fb.textContent = "❌ Sai rồi. Đáp án đúng là:";
        fb.className = "feedback wrong";
        ansDisplay.classList.remove('hidden');
        ansDisplay.innerHTML = `\\[${currentItem.tex}\\]`;
        MathJax.typesetPromise([ansDisplay]);
    }
}

// --- MATH HELPERS ---

function checkMathEquivalence(input, target) {
    const cleanInput = normalizeTex(input);
    const cleanTarget = normalizeTex(target);
    if (cleanInput === cleanTarget) return true;

    // Check đảo vế
    const splitInput = cleanInput.split('=');
    const splitTarget = cleanTarget.split('=');
    if (splitInput.length < 2 || splitTarget.length < 2) return false;

    const inL = splitInput[0]; const inR = splitInput.slice(1).join('=');
    const tarL = splitTarget[0]; const tarR = splitTarget.slice(1).join('=');

    if (inL === tarR && inR === tarL) return true;
    return false;
}

function normalizeTex(tex) {
    if(!tex) return "";
    let clean = tex;
    clean = clean.replace(/\\left|\\right|\\text\{.*?\}|\\mathrm\{.*?\}|\s/g, '');
    clean = clean.replace(/\\approx/g, '=');
    clean = clean.replace(/\\cdot|\\times/g, '');
    return clean.trim();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ======================================================
// 5. GAME ENGINE: DEFENSE COMMANDER (ULTIMATE EDITION)
// ======================================================

let gameInterval, spawnInterval;
let gameMeteors = []; 
let gameScore = 0;
let gameLives = 3;
let gameBaseSpeed = 1.0; 
let gameCurrentSpeed = 1.0;
let gameLevel = 1;
let gameCombo = 0; 
let isGameRunning = false;
let gamePool = []; 

// Settings & Ink Variables
let gameMode = 'multiple'; 
let gameTopic = 'all';
let inkCanvas, inkCtx, targetInkText = "", isDrawing = false;
let inkTargetMeteor = null; 
// Logic Buffer (Canvas ẩn để chấm điểm)
let logicCanvas, logicCtx; 

// --- INIT SETTINGS ---
document.addEventListener('DOMContentLoaded', () => {
    initGameSettings();
    // Pre-create logic canvas
    logicCanvas = document.createElement('canvas');
    logicCtx = logicCanvas.getContext('2d', { willReadFrequently: true });
});

function initGameSettings() {
    const topicSelect = document.getElementById('game-topic-select');
    if(topicSelect) {
        topicSelect.innerHTML = '<option value="all">🌐 Tất cả</option>';
        [...new Set(formulas.map(f => f.group))].forEach(g => {
            const opt = document.createElement('option');
            opt.value = g; opt.textContent = g;
            topicSelect.appendChild(opt);
        });
    }
}

function startGame() {
    if(isGameRunning) return;
    
    // 1. SETUP
    const diffSelect = document.getElementById('game-difficulty-select');
    let difficultyMultiplier = parseFloat(diffSelect ? diffSelect.value : 1.5);
    const allowAdvanced = document.getElementById('game-advanced-toggle').checked;
    
    gameTopic = document.getElementById('game-topic-select').value;
    gameMode = document.getElementById('game-mode-select').value;

    let spawnRate = 2500;
    if (gameMode === 'essay') { difficultyMultiplier /= 4; spawnRate = 5000; }
    if (gameMode === 'ink') { difficultyMultiplier /= 5; spawnRate = 6000; } 

    // 2. FILTER DATA
    gamePool = formulas.filter(f => {
        const matchAdv = allowAdvanced ? true : !f.advanced;
        const matchTop = (gameTopic === 'all') || (f.group === gameTopic);
        return matchAdv && matchTop;
    });
    if (gamePool.length < 1) { alert("Không có dữ liệu phù hợp!"); return; }

    // 3. RESET STATE
    isGameRunning = true;
    gameScore = 0; gameLives = 3; gameLevel = 1; gameCombo = 0;
    gameBaseSpeed = difficultyMultiplier; gameCurrentSpeed = gameBaseSpeed;
    gameMeteors = [];
    inkTargetMeteor = null;

    // UI Reset
    document.getElementById('game-area').innerHTML = `
        <div id="player-ship" class="ship-model">
            <div class="ship-body"></div><div class="ship-cockpit"></div>
            <div class="ship-engine"></div><div class="ship-gun left"></div><div class="ship-gun right"></div>
        </div>`;
    
    document.getElementById('game-overlay').classList.add('hidden');
    document.getElementById('player-ship').classList.remove('hidden');
    
    const inkContainer = document.getElementById('ink-container');
    const controls = document.getElementById('game-controls');
    const mainContainer = document.getElementById('game-container-main');

    if(gameMode === 'ink') {
        inkContainer.classList.remove('hidden');
        controls.classList.add('hidden');
        mainContainer.classList.add('ink-active');
        setupInkCanvas();
    } else {
        inkContainer.classList.add('hidden');
        controls.classList.remove('hidden');
        mainContainer.classList.remove('ink-active');
        setupGameControlsUI();
    }

    updateGameUI();
    spawnMeteor(); 

    // 4. LOOPS
    gameInterval = setInterval(gameLoop, 16);
    startSpawnLoop(spawnRate);
}

// --- LOGIC VẼ MA THUẬT (INK MODE - NÂNG CAO) ---

function setupInkCanvas() {
    inkCanvas = document.getElementById('ink-canvas');
    inkCtx = inkCanvas.getContext('2d', { willReadFrequently: true });
    
    const container = document.getElementById('ink-container');
    inkCanvas.width = container.offsetWidth;
    inkCanvas.height = container.offsetHeight;
    
    logicCanvas.width = inkCanvas.width;
    logicCanvas.height = inkCanvas.height;

    // Events Drawing
    inkCanvas.onmousedown = startDrawing;
    inkCanvas.onmousemove = draw;
    inkCanvas.onmouseup = stopDrawing;
    inkCanvas.onmouseleave = stopDrawing;
    
    inkCanvas.ontouchstart = (e) => { e.preventDefault(); startDrawing(e.touches[0]); };
    inkCanvas.ontouchmove = (e) => { e.preventDefault(); draw(e.touches[0]); };
    inkCanvas.ontouchend = stopDrawing;

    // Button Events
    const btnCast = document.getElementById('btn-cast-spell');
    if(btnCast) btnCast.onclick = castSpell;
    
    // --- MỚI: GÁN SỰ KIỆN NÚT XÓA ---
    const btnClear = document.getElementById('btn-clear-ink');
    if(btnClear) {
        btnClear.onclick = () => {
            clearInkCanvas();
            // Thêm hiệu ứng rung nhẹ để biết đã xóa
            inkCanvas.style.opacity = '0.5';
            setTimeout(() => inkCanvas.style.opacity = '1', 100);
        };
    }

    refreshInkTarget();
}

function refreshInkTarget() {
    if(gameMode !== 'ink') return;
    
    clearInkCanvas();
    
    if(gameMeteors.length === 0) {
        targetInkText = ""; inkTargetMeteor = null;
        document.getElementById('ink-target-display').innerHTML = "";
        return;
    }
    
    inkTargetMeteor = gameMeteors.reduce((p, c) => (p.y > c.y) ? p : c);
    targetInkText = inkTargetMeteor.tex;

    // 1. Hiển thị Visual (LaTeX đẹp cho người dùng đồ theo)
    const displayDiv = document.getElementById('ink-target-display');
    displayDiv.innerHTML = `\\[${targetInkText}\\]`;
    MathJax.typesetPromise([displayDiv]);

    // 2. Vẽ Logic Buffer (Dùng font serif để giả lập hình dáng chữ cho máy chấm điểm)
    logicCtx.clearRect(0, 0, logicCanvas.width, logicCanvas.height);
    logicCtx.save();
    logicCtx.font = "italic bold 60px 'Times New Roman', serif"; // Giả lập style MathJax
    logicCtx.textAlign = "center";
    logicCtx.textBaseline = "middle";
    logicCtx.fillStyle = "white";
    // Vẽ chữ vào giữa canvas ẩn
    // Lưu ý: Vị trí vẽ này phải khớp tương đối với vị trí div #ink-target-display
    // Div đang translate(-50%, -60%). Canvas vẽ ở width/2, height/2 - offset
    logicCtx.fillText(normalizeTex(targetInkText), logicCanvas.width/2, logicCanvas.height/2 - 10);
    logicCtx.restore();
}

function clearInkCanvas() {
    inkCtx.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
}

function startDrawing(e) {
    if(gameMode !== 'ink') return;
    isDrawing = true;
    inkCtx.beginPath();
    const rect = inkCanvas.getBoundingClientRect();
    inkCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if(!isDrawing || gameMode !== 'ink') return;
    const rect = inkCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // --- CẬP NHẬT: GIẢM ĐỘ DÀY NÉT VẼ ---
    inkCtx.lineWidth = 6; // Giảm từ 15 xuống 6 (Nét thanh mảnh)
    inkCtx.lineCap = 'round';
    inkCtx.lineJoin = 'round';
    inkCtx.strokeStyle = '#d8b4fe'; 
    
    // Giảm độ nhòe bóng (Glow) để nét vẽ sắc sảo hơn
    inkCtx.shadowBlur = 5; // Giảm từ 10 xuống 5
    inkCtx.shadowColor = '#a855f7';
    
    inkCtx.lineTo(x, y);
    inkCtx.stroke();
    
    // Giảm tỷ lệ sinh hạt ma thuật để đỡ rối mắt khi vẽ nét nhỏ
    if(Math.random() > 0.9) createMagicParticle(x, y);
}

function stopDrawing() {
    isDrawing = false;
    inkCtx.beginPath(); // Reset path để nét sau không nối nét trước
}

// --- LOGIC CHẤM ĐIỂM "XỊN" (CHECK LOGIC) ---
function castSpell() {
    if(!inkTargetMeteor || gameMode !== 'ink') return;

    // Lấy dữ liệu pixel
    const userImg = inkCtx.getImageData(0, 0, inkCanvas.width, inkCanvas.height);
    const targetImg = logicCtx.getImageData(0, 0, logicCanvas.width, logicCanvas.height);
    
    const uData = userImg.data;
    const tData = targetImg.data;
    
    let targetPixels = 0;
    let matchedPixels = 0;
    let wrongPixels = 0;

    // Quét từng pixel (bước nhảy 4 vì r,g,b,a)
    for(let i=3; i<uData.length; i+=4) {
        const isTarget = tData[i] > 100; // Pixel này có chữ mẫu không?
        const isUser = uData[i] > 50;    // Pixel này người dùng có vẽ không?

        if (isTarget) {
            targetPixels++;
            if (isUser) matchedPixels++;
        } else if (isUser) {
            wrongPixels++; // Vẽ ra ngoài vùng chữ
        }
    }

    if (targetPixels === 0) return; // Không có chữ mẫu (lỗi)

    // Công thức tính điểm:
    // Độ chính xác = (Số pixel trùng khớp) / (Tổng pixel chữ mẫu)
    // Phạt = Vẽ lung tung ra ngoài quá nhiều
    
    const accuracy = matchedPixels / targetPixels;
    const messiness = wrongPixels / targetPixels;

    // DEBUG: console.log(`Acc: ${accuracy.toFixed(2)}, Mess: ${messiness.toFixed(2)}`);

    // Điều kiện thắng: Phải tô đúng > 35% chữ VÀ không tô bậy quá 3 lần diện tích chữ
    if (accuracy > 0.35 && messiness < 3.0) {
        // Success
        fireLaserAction(inkTargetMeteor.tex, inkTargetMeteor);
        createMagicExplosion();
        clearInkCanvas();
    } else {
        // Fail
        gameCombo = 0;
        showFloatingText(inkCanvas.width/2, inkCanvas.height/2, "Vẽ lại đi! ❌");
        
        // Hiệu ứng rung lắc bảng vẽ
        const container = document.getElementById('ink-container');
        container.style.transform = "translateX(10px)";
        setTimeout(() => container.style.transform = "translateX(0)", 100);
        setTimeout(() => container.style.transform = "translateX(-10px)", 200);
        setTimeout(() => container.style.transform = "translateX(0)", 300);
    }
}

function createMagicExplosion() {
    // Hiệu ứng nổ khi niệm chú thành công
    const container = document.getElementById('ink-container');
    const boom = document.createElement('div');
    boom.style.position = 'absolute';
    boom.style.top = '50%'; boom.style.left = '50%';
    boom.style.width = '100px'; boom.style.height = '100px';
    boom.style.transform = 'translate(-50%, -50%)';
    boom.style.borderRadius = '50%';
    boom.style.boxShadow = '0 0 50px 20px #fff, inset 0 0 20px #a855f7';
    boom.style.animation = 'particleFade 0.5s forwards';
    container.appendChild(boom);
    setTimeout(() => boom.remove(), 500);
}

// --- CORE GAME LOGIC (GIỮ NGUYÊN TỪ PHIÊN BẢN TRƯỚC) ---

function setupGameControlsUI() {
    const container = document.getElementById('game-controls');
    container.innerHTML = '';
    if (gameMode === 'multiple') {
        refreshGameOptions(); 
    } else if (gameMode === 'essay') {
        container.innerHTML = `
            <div class="essay-controls-container">
                <math-field id="game-essay-input" virtual-keyboard-mode="onfocus" placeholder="Nhập công thức..."></math-field>
                <button id="btn-fire-essay" class="fire-btn">BẮN 🔥</button>
            </div>`;
        const mf = document.getElementById('game-essay-input');
        const handleFire = () => {
            if(mf.value.trim()){ fireEssayLaser(mf.value); mf.value=''; mf.focus(); }
            else mf.focus();
        };
        document.getElementById('btn-fire-essay').onclick = handleFire;
        mf.addEventListener('keydown', (e) => { 
            if(e.key==='Enter'||e.keyCode===13){e.preventDefault(); handleFire();} 
        });
        setTimeout(()=>mf.focus(),100);
    }
}

function spawnMeteor() {
    if(!isGameRunning) return;
    const randomFormula = gamePool[Math.floor(Math.random() * gamePool.length)];
    const el = document.createElement('div');
    el.className = 'meteor';
    el.innerHTML = `<span class="meteor-topic">${randomFormula.group}</span><div class="meteor-name">${randomFormula.desc}</div>`;
    
    const w = document.getElementById('game-area').offsetWidth;
    const randomX = Math.random() * (w - 140);
    el.style.left = randomX + 'px'; el.style.top = '-80px';
    document.getElementById('game-area').appendChild(el);
    
    const meteorObj = { id:randomFormula.id, tex:randomFormula.tex, el:el, y:-80, x:randomX };
    gameMeteors.push(meteorObj);

    if(gameMode === 'ink' && !inkTargetMeteor) refreshInkTarget();
    if(gameMode === 'multiple' && gameMeteors.length===1) refreshGameOptions();
}

function gameLoop() {
    const container = document.getElementById('game-container-main');
    if(!container) return;
    const deadZone = container.offsetHeight - (gameMode==='ink' ? 340 : 80);

    gameMeteors.forEach((m, index) => {
        m.y += gameCurrentSpeed;
        m.el.style.top = m.y + 'px';
        if (m.y > deadZone) handleLifeLost(index);
    });
}

function handleLifeLost(index) {
    const m = gameMeteors[index];
    if (m && m.el) m.el.remove();
    gameMeteors.splice(index, 1);
    gameLives--; gameCombo = 0;
    
    const main = document.getElementById('game-container-main');
    main.classList.remove('shake'); void main.offsetWidth; main.classList.add('shake');
    
    if(gameMode==='ink' && m === inkTargetMeteor) refreshInkTarget();

    updateGameUI();
    if (gameLives <= 0) stopGame(true);
    else if (gameMode === 'multiple') refreshGameOptions();
}

function fireEssayLaser(inputValue) {
    const cleanInput = normalizeTex(inputValue);
    const matches = gameMeteors.filter(m => checkMathEquivalence(cleanInput, m.tex));
    if (matches.length > 0) {
        matches.forEach((t, i) => setTimeout(() => fireLaserAction(t.tex, t), i*100));
        if(matches.length>1) { showFloatingText(matches[0].x, matches[0].y-50, "MULTI-KILL!"); gameScore+=matches.length*10; }
    } else {
        gameCombo=0; gameScore=Math.max(0,gameScore-5); updateGameUI();
        const inp = document.getElementById('game-essay-input');
        if(inp){ inp.style.borderColor='red'; setTimeout(()=>inp.style.borderColor='#3b82f6',300); }
    }
}

function fireLaserAction(texValue, specificTarget) {
    let target = specificTarget;
    if (!target) {
        const matches = gameMeteors.filter(m => m.tex === texValue);
        if (matches.length > 0) target = matches.reduce((p, c) => (p.y > c.y) ? p : c);
    }

    if (target) {
        createLaserVisual(target.x + 60, target.y + 20);
        createExplosion(target.x, target.y);
        showFloatingText(target.x, target.y, calculateScore());
        target.el.remove();
        gameMeteors = gameMeteors.filter(m => m !== target);
        gameCombo++; checkLevelUp(); updateGameUI();
        
        if(gameMode === 'multiple') refreshGameOptions();
        if(gameMode === 'ink' && target === inkTargetMeteor) refreshInkTarget();
    } else {
        gameCombo=0; gameScore=Math.max(0,gameScore-10); updateGameUI();
    }
}

// Helpers & Visuals
function createLaserVisual(tx, ty) {
    const ga = document.getElementById('game-area');
    const ship = document.getElementById('player-ship');
    if(!ship) return;
    const sRect = ship.getBoundingClientRect();
    const aRect = ga.getBoundingClientRect();
    const sx = (sRect.left - aRect.left) + sRect.width/2;
    const sy = (sRect.top - aRect.top);
    const dx = tx - sx; const dy = ty - sy;
    const len = Math.sqrt(dx*dx + dy*dy);
    const ang = Math.atan2(dy, dx) * 180 / Math.PI;
    
    const l = document.createElement('div');
    l.className = 'laser-beam';
    l.style.cssText = `width:${len}px; left:${sx}px; top:${sy}px; transform:rotate(${ang}deg);`;
    ga.appendChild(l); setTimeout(()=>l.remove(),100);
}

function startSpawnLoop(t) { if(spawnInterval) clearInterval(spawnInterval); spawnInterval=setInterval(spawnMeteor,t); }

function stopGame(isOver=false) {
    isGameRunning=false; clearInterval(gameInterval); clearInterval(spawnInterval);
    const overlay = document.getElementById('game-overlay');
    const controls = document.getElementById('game-controls');
    const ink = document.getElementById('ink-container');
    const ship = document.getElementById('player-ship');

    if(overlay) overlay.classList.remove('hidden');
    if(controls) controls.classList.add('hidden');
    if(ink) ink.classList.add('hidden');
    if(ship) ship.classList.add('hidden');
    document.getElementById('game-container-main').classList.remove('ink-active');

    const t = document.querySelector('.game-title');
    const d = document.getElementById('overlay-desc');
    const b = document.getElementById('btn-start-game');
    
    if(t && d && b) {
        if(isOver){ t.textContent="💀 GAME OVER"; t.style.color="red"; d.innerHTML=`Điểm: ${gameScore}`; b.textContent="Thử lại 🔥"; }
        else { t.textContent="DEFENSE COMMANDER"; t.style.color="#ef4444"; d.textContent="Sẵn sàng?"; b.textContent="Tiếp tục 🚀"; }
    }
}

function calculateScore(){ return (gameMode==='essay'||gameMode==='ink'?30:10) + (gameCombo*2); }
function checkLevelUp(){ if(Math.floor(gameScore/150)+1 > gameLevel){ gameLevel++; gameCurrentSpeed+=0.2; } }
function showFloatingText(x,y,p){ 
    const f=document.createElement('div'); f.className='floating-text'; f.style.left=(x+20)+'px'; f.style.top=y+'px'; f.innerHTML=typeof p === 'number' ? `+${p}` : p; 
    document.getElementById('game-area').appendChild(f); setTimeout(()=>f.remove(),1000); 
}
function createExplosion(x,y){
    const b=document.createElement('div'); b.className='explosion'; b.style.left=(x+35)+'px'; b.style.top=(y+20)+'px'; 
    document.getElementById('game-area').appendChild(b); setTimeout(()=>b.remove(),300);
}
function updateGameUI(){ 
    document.getElementById('game-score').textContent=gameScore; 
    document.getElementById('game-level').textContent=gameLevel;
    document.getElementById('game-lives').textContent = "❤️".repeat(Math.max(0,gameLives));
    const cb = document.getElementById('combo-display');
    if(gameCombo>1){cb.classList.remove('hidden'); document.getElementById('combo-count').textContent=gameCombo;}
    else cb.classList.add('hidden');
}
function refreshGameOptions() {
    const c = document.getElementById('game-controls'); c.innerHTML='';
    let t = gameMeteors.length? gameMeteors.reduce((p,c)=>(p.y>c.y)?p:c) : null;
    let opts = [];
    if(t) opts.push(gamePool.find(f=>f.tex===t.tex)||t); else opts.push(gamePool[0]);
    while(opts.length<4){ const r=gamePool[Math.floor(Math.random()*gamePool.length)]; if(!opts.find(o=>o.tex===r.tex)) opts.push(r); }
    opts.sort(()=>Math.random()-0.5).forEach(o=>{
        const b=document.createElement('button'); b.className='game-btn'; b.innerHTML=`\\(${o.tex}\\)`;
        b.onclick=()=>fireLaserAction(o.tex,null); c.appendChild(b);
    });
    MathJax.typesetPromise([c]);
}
function createMagicParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'magic-particle';
    const container = document.getElementById('ink-container');
    p.style.left = x + 'px'; p.style.top = y + 'px';
    const dx = (Math.random() - 0.5) * 100 + 'px';
    const dy = (Math.random() - 0.5) * 100 + 'px';
    p.style.setProperty('--mx', dx); p.style.setProperty('--my', dy);
    container.appendChild(p); setTimeout(() => p.remove(), 800);
}
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
// 5. GAME ENGINE: DEFENSE COMMANDER (NÂNG CẤP)
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

// Settings State
let gameMode = 'multiple'; // 'multiple' or 'essay'
let gameTopic = 'all';

// --- KHỞI TẠO SETTINGS ---
function initGameSettings() {
    // Tự động điền danh sách chủ đề vào Select box
    const topicSelect = document.getElementById('game-topic-select');
    if(!topicSelect) return;
    topicSelect.innerHTML = '<option value="all">🌐 Tất cả các chương</option>';
    
    // Lấy các group duy nhất
    const groups = [...new Set(formulas.map(f => f.group))];
    groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g;
        opt.textContent = g;
        topicSelect.appendChild(opt);
    });
}
// Gọi hàm này khi load trang
document.addEventListener('DOMContentLoaded', initGameSettings);

// --- GAME LOOP CHÍNH ---
function startGame() {
    if(isGameRunning) return;
    
    // 1. ĐỌC SETTINGS
    const diffSelect = document.getElementById('game-difficulty-select');
    let difficultyMultiplier = parseFloat(diffSelect ? diffSelect.value : 1.5);
    
    const advancedToggle = document.getElementById('game-advanced-toggle');
    const allowAdvanced = advancedToggle ? advancedToggle.checked : false;

    gameTopic = document.getElementById('game-topic-select') ? document.getElementById('game-topic-select').value : 'all';
    gameMode = document.getElementById('game-mode-select') ? document.getElementById('game-mode-select').value : 'multiple';

    // **LOGIC ĐẶC BIỆT**: Nếu là Tự Luận, giảm tốc độ gấp 3 lần
    if (gameMode === 'essay') {
        difficultyMultiplier = difficultyMultiplier / 3;
    }

    // 2. LỌC DỮ LIỆU
    gamePool = formulas.filter(f => {
        const matchAdvanced = allowAdvanced ? true : !f.advanced;
        const matchTopic = (gameTopic === 'all') || (f.group === gameTopic);
        return matchAdvanced && matchTopic;
    });

    if (gamePool.length < 1) {
        alert("Không tìm thấy công thức phù hợp với cài đặt này!");
        return;
    }

    // 3. RESET UI & STATE
    isGameRunning = true;
    gameScore = 0; gameLives = 3; gameLevel = 1; gameCombo = 0;
    gameBaseSpeed = difficultyMultiplier; 
    gameCurrentSpeed = gameBaseSpeed;
    
    gameMeteors = [];
    document.getElementById('game-area').innerHTML = `
        <div id="player-ship" class="ship-model">
            <div class="ship-body"></div><div class="ship-cockpit"></div>
            <div class="ship-engine"></div><div class="ship-gun left"></div><div class="ship-gun right"></div>
        </div>
    `; // Reset area but keep ship
    
    document.getElementById('game-overlay').classList.add('hidden');
    document.getElementById('game-controls').classList.remove('hidden');
    document.getElementById('player-ship').classList.remove('hidden');

    updateGameUI();
    
    // Render Controls dựa trên chế độ chơi
    setupGameControlsUI();

    // 4. START LOOPS
    gameInterval = setInterval(gameLoop, 16);
    startSpawnLoop(gameMode === 'essay' ? 4000 : 2500); // Tự luận spawn chậm hơn
}

function setupGameControlsUI() {
    const container = document.getElementById('game-controls');
    container.innerHTML = '';

    if (gameMode === 'multiple') {
        refreshGameOptions(); // Render 4 nút trắc nghiệm
    } else {
        // Render Ô nhập liệu Tự luận
        container.innerHTML = `
            <div class="essay-controls-container">
                <math-field id="game-essay-input" virtual-keyboard-mode="onfocus" placeholder="Nhập công thức rồi nhấn Enter..."></math-field>
            </div>
        `;
        const mf = document.getElementById('game-essay-input');
        // Lắng nghe sự kiện nhấn Enter
        mf.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                fireEssayLaser(mf.value);
                mf.value = ''; // Xóa sau khi bắn
            }
        });
        setTimeout(() => mf.focus(), 100);
    }
}

function startSpawnLoop(intervalTime) {
    if (spawnInterval) clearInterval(spawnInterval);
    spawnInterval = setInterval(spawnMeteor, intervalTime);
}

function stopGame(isGameOver = false) {
    isGameRunning = false;
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    
    document.getElementById('game-overlay').classList.remove('hidden');
    document.getElementById('game-controls').classList.add('hidden');
    document.getElementById('player-ship').classList.add('hidden');

    const title = document.querySelector('.game-title');
    const desc = document.getElementById('overlay-desc');
    const btn = document.getElementById('btn-start-game');

    if (isGameOver) {
        title.textContent = "💀 GAME OVER";
        title.style.color = "red";
        desc.innerHTML = `Điểm tổng kết: <span style="color:#facc15; font-size:1.5em">${gameScore}</span><br>Chế độ: ${gameMode === 'essay' ? 'Tự luận (Hardcore)' : 'Trắc nghiệm'}`;
        btn.textContent = "Thử lại ngay 🔥";
    } else {
        title.textContent = "DEFENSE COMMANDER";
        title.style.color = "#ef4444";
        desc.textContent = "Sẵn sàng cho nhiệm vụ tiếp theo?";
        btn.textContent = "Tiếp tục 🚀";
    }
}

function spawnMeteor() {
    if(!isGameRunning) return;

    const randomFormula = gamePool[Math.floor(Math.random() * gamePool.length)];
    
    const el = document.createElement('div');
    el.className = 'meteor';
    // Hiển thị cả Chủ đề nhỏ và Tên đại lượng
    el.innerHTML = `<span class="meteor-topic">${randomFormula.group}</span><div class="meteor-name">${randomFormula.desc}</div>`;
    
    const containerWidth = document.getElementById('game-area').offsetWidth;
    const randomX = Math.random() * (containerWidth - 140); 
    
    el.style.left = randomX + 'px';
    el.style.top = '-80px'; 

    document.getElementById('game-area').appendChild(el);

    gameMeteors.push({
        id: randomFormula.id,
        tex: randomFormula.tex,
        el: el,
        y: -80,
        x: randomX
    });
}

function gameLoop() {
    const container = document.getElementById('game-container-main');
    if(!container) return;
    const limit = container.offsetHeight - 80;

    gameMeteors.forEach((m, index) => {
        m.y += gameCurrentSpeed;
        m.el.style.top = m.y + 'px';

        if (m.y > limit) {
            handleLifeLost(index);
        }
    });
}

// --- LOGIC BẮN (Shooting Logic) ---

// 1. Xử lý bắn cho chế độ Trắc nghiệm (Buttons)
function refreshGameOptions() {
    if (gameMode !== 'multiple') return; // Không làm gì nếu là tự luận

    const container = document.getElementById('game-controls');
    // Logic lấy mục tiêu ưu tiên (gần đáy nhất)
    if (gameMeteors.length === 0) {
        renderMultipleChoiceButtons(null, container);
        return;
    }
    let target = gameMeteors.reduce((prev, current) => (prev.y > current.y) ? prev : current);
    renderMultipleChoiceButtons(target, container);
}

function renderMultipleChoiceButtons(targetMeteor, container) {
    container.innerHTML = '';
    let options = [];
    
    if (targetMeteor) {
        const original = gamePool.find(f => f.tex === targetMeteor.tex) || targetMeteor;
        options.push(original);
    } else {
        options.push(gamePool[Math.floor(Math.random() * gamePool.length)]);
    }

    while (options.length < 4) {
        const r = gamePool[Math.floor(Math.random() * gamePool.length)];
        if (!options.find(o => o.tex === r.tex)) options.push(r);
    }

    options = shuffleArray(options);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'game-btn';
        btn.innerHTML = `\\(${opt.tex}\\)`;
        btn.onclick = () => fireLaserAction(opt.tex, null); // Bắn dựa trên Tex
        container.appendChild(btn);
    });
    MathJax.typesetPromise([container]);
}

// 2. Xử lý bắn cho chế độ Tự Luận (Input)
function fireEssayLaser(inputValue) {
    // So sánh input với TẤT CẢ thiên thạch đang có
    // Nếu trùng bất kỳ cái nào -> Bắn cái đó
    const cleanInput = normalizeTex(inputValue);
    
    // Tìm thiên thạch khớp (ưu tiên cái thấp nhất)
    const matches = gameMeteors.filter(m => checkMathEquivalence(cleanInput, m.tex));
    
    if (matches.length > 0) {
        // Bắn cái thấp nhất
        const target = matches.reduce((prev, current) => (prev.y > current.y) ? prev : current);
        fireLaserAction(target.tex, target);
    } else {
        // Bắn trượt
        gameCombo = 0;
        gameScore = Math.max(0, gameScore - 5);
        updateGameUI();
        // Hiệu ứng màn hình rung nhẹ báo sai
        const input = document.getElementById('game-essay-input');
        if(input) {
            input.style.borderColor = 'red';
            setTimeout(() => input.style.borderColor = '#3b82f6', 200);
        }
    }
}

// 3. Hành động bắn chung (Visuals & Logic)
function fireLaserAction(texValue, specificTarget) {
    // Tìm mục tiêu để visualize (nếu chưa có)
    let target = specificTarget;
    if (!target) {
        const matches = gameMeteors.filter(m => m.tex === texValue);
        if (matches.length > 0) {
            target = matches.reduce((prev, current) => (prev.y > current.y) ? prev : current);
        }
    }

    if (target) {
        // 1. Tạo hiệu ứng tia Laser từ tàu đến mục tiêu
        createLaserVisual(target.x + 60, target.y + 20); // +60 để vào giữa thiên thạch

        // 2. Logic game
        createExplosion(target.x, target.y);
        showFloatingText(target.x, target.y, calculateScore());

        target.el.remove();
        gameMeteors = gameMeteors.filter(m => m !== target);
        
        gameCombo++;
        checkLevelUp();
        updateGameUI();

        // Refresh options nếu là trắc nghiệm
        if(gameMode === 'multiple') refreshGameOptions();

    } else {
        // Bắn trượt (Trắc nghiệm)
        gameCombo = 0;
        gameScore = Math.max(0, gameScore - 10);
        updateGameUI();
    }
}

// --- VISUAL EFFECTS ---

function createLaserVisual(targetX, targetY) {
    const gameArea = document.getElementById('game-area');
    const ship = document.getElementById('player-ship');
    if(!ship) return;
    
    // Lấy vị trí tàu
    const shipRect = ship.getBoundingClientRect();
    const areaRect = gameArea.getBoundingClientRect();
    
    const startX = (shipRect.left - areaRect.left) + (shipRect.width / 2);
    const startY = (shipRect.top - areaRect.top);

    // Tính toán góc và độ dài để vẽ tia
    const deltaX = targetX - startX;
    const deltaY = targetY - startY;
    const length = Math.sqrt(deltaX*deltaX + deltaY*deltaY);
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    const laser = document.createElement('div');
    laser.className = 'laser-beam';
    laser.style.height = '4px';
    laser.style.width = length + 'px';
    laser.style.position = 'absolute';
    laser.style.left = startX + 'px';
    laser.style.top = startY + 'px';
    laser.style.transformOrigin = '0 50%'; // Xoay từ gốc trái
    laser.style.transform = `rotate(${angle}deg)`;
    laser.style.zIndex = '5';
    
    gameArea.appendChild(laser);

    // Xóa laser nhanh
    setTimeout(() => laser.remove(), 100);
}

// ... (Giữ nguyên các hàm handleLifeLost, calculateScore, showFloatingText, checkLevelUp, createExplosion, updateGameUI từ phiên bản trước) ...
// (Đảm bảo copy lại các hàm phụ trợ đó vào đây để code chạy hoàn chỉnh)

// HÀM PHỤ TRỢ CŨ (Copy lại để đảm bảo không bị thiếu)
function handleLifeLost(index) {
    const m = gameMeteors[index];
    if (m && m.el) m.el.remove();
    gameMeteors.splice(index, 1);
    
    gameLives--; gameCombo = 0;
    
    const mainContainer = document.getElementById('game-container-main');
    mainContainer.classList.remove('shake');
    void mainContainer.offsetWidth; 
    mainContainer.classList.add('shake');

    const area = document.getElementById('game-area');
    area.style.background = 'rgba(220, 38, 38, 0.3)';
    setTimeout(() => area.style.background = 'transparent', 200);

    updateGameUI();
    if (gameLives <= 0) stopGame(true);
    else if (gameMode === 'multiple') refreshGameOptions();
}

function calculateScore() {
    const basePoints = gameMode === 'essay' ? 30 : 10; // Tự luận điểm cao hơn
    const comboBonus = gameCombo * (gameMode === 'essay' ? 5 : 2);
    const points = basePoints + comboBonus;
    gameScore += points;
    return points;
}

function showFloatingText(x, y, points) {
    const area = document.getElementById('game-area');
    const floatEl = document.createElement('div');
    floatEl.className = 'floating-text';
    floatEl.style.left = (x + 20) + 'px';
    floatEl.style.top = y + 'px';
    let text = `+${points}`;
    if (gameCombo > 1) text += ` <span style="color:#fff; font-size:0.8em">x${gameCombo}</span>`;
    floatEl.innerHTML = text;
    area.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 1000);
}

function checkLevelUp() {
    const newLevel = Math.floor(gameScore / (gameMode==='essay'? 300 : 150)) + 1;
    if (newLevel > gameLevel) {
        gameLevel = newLevel;
        gameCurrentSpeed = gameBaseSpeed + (gameLevel * 0.2);
        const newSpawnRate = Math.max(800, (gameMode==='essay'?4000:2500) - (gameLevel * 200)); 
        startSpawnLoop(newSpawnRate);
        
        const area = document.getElementById('game-area');
        const lvUp = document.createElement('div');
        lvUp.textContent = `LEVEL ${gameLevel} !!!`;
        lvUp.style = "position:absolute; top:40%; width:100%; text-align:center; font-size:3em; color:#fff; font-weight:bold; text-shadow:0 0 20px blue; animation: floatUp 1.5s forwards; z-index:20";
        area.appendChild(lvUp);
        setTimeout(() => lvUp.remove(), 1500);
    }
}

function createExplosion(x, y) {
    const area = document.getElementById('game-area');
    const boom = document.createElement('div');
    boom.className = 'explosion';
    boom.style.left = (x + 35) + 'px';
    boom.style.top = (y + 20) + 'px';
    area.appendChild(boom);
    setTimeout(() => boom.remove(), 300);
}

function updateGameUI() {
    document.getElementById('game-score').textContent = gameScore;
    document.getElementById('game-level').textContent = gameLevel;
    const comboEl = document.getElementById('combo-display');
    const comboCountEl = document.getElementById('combo-count');
    if (gameCombo > 1) {
        comboEl.classList.remove('hidden');
        comboCountEl.textContent = gameCombo;
    } else {
        comboEl.classList.add('hidden');
    }
    let hearts = ''; for(let i=0; i<gameLives; i++) hearts += '❤️';
    document.getElementById('game-lives').textContent = hearts;
}

// Loop kiểm tra an toàn cho trắc nghiệm
setInterval(() => { if(isGameRunning && gameMode === 'multiple') refreshGameOptions(); }, 4000);
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
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    if (tabName === 'list') {
        document.getElementById('list-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'list\')"]').classList.add('active');
    } else {
        document.getElementById('quiz-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'quiz\')"]').classList.add('active');
        nextQuestion(); 
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
// 5. GAME ENGINE: METEOR DEFENSE (BẢO VỆ TRÁI ĐẤT)
// ======================================================

let gameInterval;
let spawnInterval;
let gameMeteors = []; // Mảng chứa các đối tượng thiên thạch
let gameScore = 0;
let gameLives = 3;
let gameSpeed = 1.0; // Tốc độ rơi cơ bản
let isGameRunning = false;
let currentTargetIndex = -1; // Index của thiên thạch thấp nhất (ưu tiên bắn)

// Bắt đầu game
function startGame() {
    if(isGameRunning) return;
    
    // Reset trạng thái
    isGameRunning = true;
    gameScore = 0;
    gameLives = 3;
    gameSpeed = 1.5; // Tốc độ khởi đầu
    gameMeteors = [];
    document.getElementById('game-area').innerHTML = '';
    document.getElementById('game-overlay').classList.add('hidden');
    document.getElementById('game-controls').classList.remove('hidden');
    updateGameUI();

    // Setup nút bấm (Load 4 công thức ngẫu nhiên lần đầu)
    refreshGameOptions();

    // Loop chính: Cập nhật vị trí (60fps)
    gameInterval = setInterval(gameLoop, 16);
    
    // Loop sinh quái: Sinh ra mỗi 2-3 giây
    spawnInterval = setInterval(spawnMeteor, 2500);
}

function stopGame(isGameOver = false) {
    isGameRunning = false;
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    
    const overlay = document.getElementById('game-overlay');
    overlay.classList.remove('hidden');
    document.getElementById('game-controls').classList.add('hidden');

    if (isGameOver) {
        document.getElementById('overlay-title').textContent = "💀 GAME OVER";
        document.getElementById('overlay-desc').textContent = `Điểm số của bạn: ${gameScore}`;
        document.getElementById('btn-start-game').textContent = "Chơi lại 🔄";
    }
}

function spawnMeteor() {
    if(!isGameRunning) return;

    // Chọn ngẫu nhiên 1 công thức từ database
    const randomFormula = formulas[Math.floor(Math.random() * formulas.length)];
    
    // Tạo phần tử DOM
    const el = document.createElement('div');
    el.className = 'meteor';
    el.textContent = randomFormula.desc; // Hiển thị TÊN công thức
    
    // Vị trí ngẫu nhiên theo chiều ngang (trừ lề để không bị lẹm)
    const containerWidth = document.getElementById('game-area').offsetWidth;
    const randomX = Math.random() * (containerWidth - 120); 
    
    el.style.left = randomX + 'px';
    el.style.top = '-50px';

    document.getElementById('game-area').appendChild(el);

    // Lưu vào mảng quản lý
    gameMeteors.push({
        id: randomFormula.id,
        tex: randomFormula.tex,
        el: el,
        y: -50,
        x: randomX
    });
}

function gameLoop() {
    const containerHeight = document.getElementById('game-container') ? document.getElementById('game-container').offsetHeight : 600;
    const limit = 600 - 150; // Trừ đi chiều cao khu vực điều khiển

    // Di chuyển thiên thạch
    gameMeteors.forEach((m, index) => {
        m.y += gameSpeed;
        m.el.style.top = m.y + 'px';

        // Kiểm tra chạm đáy (Mất mạng)
        if (m.y > limit) {
            handleLifeLost(index);
        }
    });

    // Tăng độ khó theo thời gian
    if (gameScore > 0 && gameScore % 50 === 0) {
        gameSpeed += 0.005;
    }
}

function handleLifeLost(index) {
    const m = gameMeteors[index];
    if (m && m.el) m.el.remove();
    gameMeteors.splice(index, 1);
    
    gameLives--;
    updateGameUI();
    
    // Hiệu ứng màn hình đỏ
    const area = document.getElementById('game-area');
    area.style.background = 'rgba(220, 38, 38, 0.2)';
    setTimeout(() => area.style.background = 'transparent', 200);

    if (gameLives <= 0) {
        stopGame(true);
    }
}

// Cập nhật các nút bắn bên dưới
function refreshGameOptions() {
    // Tìm thiên thạch thấp nhất (nguy hiểm nhất) để đảm bảo có đáp án đúng cho nó
    // Sắp xếp theo y giảm dần (y càng lớn càng gần đáy)
    if (gameMeteors.length === 0) {
        // Nếu không có thiên thạch, lấy random options
        renderGameButtons(null);
        return;
    }

    // Lấy thiên thạch nguy hiểm nhất (gần đáy nhất)
    let target = gameMeteors.reduce((prev, current) => (prev.y > current.y) ? prev : current);
    renderGameButtons(target);
}

function renderGameButtons(targetMeteor) {
    const container = document.getElementById('game-controls');
    container.innerHTML = '';

    let options = [];
    
    // 1. Luôn phải có đáp án đúng của thiên thạch mục tiêu (nếu có)
    if (targetMeteor) {
        options.push(targetMeteor);
    } else {
        // Nếu chưa có thiên thạch, lấy random 1 cái làm "mồi"
        options.push(formulas[Math.floor(Math.random() * formulas.length)]);
    }

    // 2. Thêm 3 đáp án sai
    while (options.length < 4) {
        const r = formulas[Math.floor(Math.random() * formulas.length)];
        // Tránh trùng lặp công thức (so sánh tex hoặc id)
        const exists = options.find(o => o.tex === r.tex);
        if (!exists) options.push(r);
    }

    // 3. Xáo trộn vị trí
    options = shuffleArray(options);

    // 4. Render buttons
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'game-btn';
        // Hiển thị công thức toán học
        btn.innerHTML = `\\(${opt.tex}\\)`;
        btn.onclick = () => fireLaser(opt);
        container.appendChild(btn);
    });

    // Render MathJax cho các nút mới
    MathJax.typesetPromise([container]);
}

// Xử lý bắn
function fireLaser(selectedFormula) {
    if (!isGameRunning) return;

    // Kiểm tra xem công thức vừa chọn có khớp với thiên thạch nào trên màn hình không?
    // Ưu tiên thiên thạch thấp nhất nếu có nhiều cái giống nhau
    
    // Lọc ra các thiên thạch khớp với đáp án người chơi chọn
    const matches = gameMeteors.filter(m => m.tex === selectedFormula.tex);
    
    if (matches.length > 0) {
        // Bắn trúng! Chọn cái gần đáy nhất để phá hủy
        const target = matches.reduce((prev, current) => (prev.y > current.y) ? prev : current);
        
        createExplosion(target.x, target.y);
        
        // Xóa khỏi DOM và mảng
        target.el.remove();
        gameMeteors = gameMeteors.filter(m => m !== target);
        
        // Cộng điểm
        gameScore += 10;
        updateGameUI();

        // Ngay lập tức đổi bộ đáp án mới cho thiên thạch tiếp theo
        refreshGameOptions();
    } else {
        // Bắn trượt (trừ điểm hoặc phạt thời gian)
        gameScore = Math.max(0, gameScore - 5);
        updateGameUI();
        // Rung màn hình phạt
        const container = document.querySelector('.game-container');
        container.style.transform = 'translateX(5px)';
        setTimeout(() => container.style.transform = 'translateX(0)', 50);
    }
}

function createExplosion(x, y) {
    const area = document.getElementById('game-area');
    const boom = document.createElement('div');
    boom.className = 'explosion';
    boom.style.left = (x + 35) + 'px'; // Canh giữa
    boom.style.top = (y + 20) + 'px';
    area.appendChild(boom);
    
    // Tự xóa sau khi animation xong
    setTimeout(() => boom.remove(), 300);
}

function updateGameUI() {
    document.getElementById('game-score').textContent = gameScore;
    let hearts = '';
    for(let i=0; i<gameLives; i++) hearts += '❤️';
    document.getElementById('game-lives').textContent = hearts;
}

// --- Cập nhật logic Refresh Button ---
// Cần gọi refreshGameOptions() liên tục để đảm bảo nút bấm luôn phù hợp với thiên thạch đang rơi?
// Cách tốt hơn: Chỉ đổi nút khi:
// 1. Vừa bắn trúng mục tiêu.
// 2. Hoặc mỗi 3 giây nếu không ai bắn gì (để tránh bị kẹt).
setInterval(() => {
    if(isGameRunning) refreshGameOptions();
}, 3000);
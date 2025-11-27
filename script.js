// ======================================================
// CƠ SỞ DỮ LIỆU CÔNG THỨC (FULL VERSION)
// ======================================================
const formulas = [
    // ==================================================
    // I. CHUYỂN ĐỘNG BIẾN ĐỔI ĐỀU
    // ==================================================
    
    // --- GỐC ---
    { id: "bdd_a_def", group: "I. Biến đổi đều", desc: "Gia tốc (định nghĩa)", tex: "a = \\frac{v - v_0}{t}" },
    { id: "bdd_v_tuc_thoi", group: "I. Biến đổi đều", desc: "Vận tốc tức thời", tex: "v = v_0 + at" },
    { id: "bdd_s", group: "I. Biến đổi đều", desc: "Quãng đường (s)", tex: "s = v_0t + \\frac{1}{2}at^2" },
    { id: "bdd_x", group: "I. Biến đổi đều", desc: "Phương trình tọa độ", tex: "x = x_0 + v_0t + \\frac{1}{2}at^2" },
    { id: "bdd_doc_lap", group: "I. Biến đổi đều", desc: "Công thức độc lập thời gian", tex: "v^2 - v_0^2 = 2as" },

    // --- SUY DIỄN (NÂNG CAO) ---
    { id: "bdd_t_from_v_a", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính thời gian (từ v, a)", tex: "t = \\frac{v - v_0}{a}", advanced: true },
    { id: "bdd_v0_from_v_a", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính vận tốc đầu (v0)", tex: "v_0 = v - at", advanced: true },
    { id: "bdd_a_from_s", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính gia tốc (từ s, t, v0)", tex: "a = \\frac{2(s - v_0t)}{t^2}", advanced: true },
    { id: "bdd_a_from_v_s", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính gia tốc (từ v, s)", tex: "a = \\frac{v^2 - v_0^2}{2s}", advanced: true },
    { id: "bdd_s_from_v_a", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính quãng đường (từ v, a)", tex: "s = \\frac{v^2 - v_0^2}{2a}", advanced: true },
    { id: "bdd_v_from_s_a", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính vận tốc sau (từ s, a)", tex: "v = \\sqrt{v_0^2 + 2as}", advanced: true },
    { id: "bdd_v0_from_s_a", group: "I. Biến đổi đều (Suy rộng)", desc: "Tính vận tốc đầu (từ s, a)", tex: "v_0 = \\sqrt{v^2 - 2as}", advanced: true },
    { id: "bdd_quang_duong_n", group: "I. Biến đổi đều (Khó)", desc: "Quãng đường trong giây thứ n", tex: "\\Delta s_n = v_0 + \\frac{1}{2}a(2n - 1)", advanced: true },

    // ==================================================
    // II. CHUYỂN ĐỘNG RƠI TỰ DO
    // ==================================================

    // --- GỐC ---
    { id: "rtd_a", group: "II. Rơi tự do", desc: "Gia tốc rơi", tex: "a = g \\approx 9.8" },
    { id: "rtd_v", group: "II. Rơi tự do", desc: "Vận tốc rơi", tex: "v = gt" },
    { id: "rtd_s", group: "II. Rơi tự do", desc: "Quãng đường rơi", tex: "S = \\frac{1}{2}gt^2" },
    { id: "rtd_doc_lap", group: "II. Rơi tự do", desc: "Độc lập (Rơi tự do)", tex: "v^2 = 2gS" },
    { id: "rtd_t", group: "II. Rơi tự do", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h}{g}}" },

    // --- SUY DIỄN (NÂNG CAO) ---
    { id: "rtd_t_from_v", group: "II. Rơi tự do (Suy rộng)", desc: "Tính thời gian rơi (từ v)", tex: "t = \\frac{v}{g}", advanced: true },
    { id: "rtd_t_from_s", group: "II. Rơi tự do (Suy rộng)", desc: "Tính thời gian (từ quãng đường S)", tex: "t = \\sqrt{\\frac{2S}{g}}", advanced: true },
    { id: "rtd_s_from_v", group: "II. Rơi tự do (Suy rộng)", desc: "Tính quãng đường/độ cao (từ v)", tex: "S = \\frac{v^2}{2g}", advanced: true },
    { id: "rtd_v_from_h", group: "II. Rơi tự do (Suy rộng)", desc: "Tính vận tốc (từ độ cao h)", tex: "v = \\sqrt{2gh}", advanced: true },
    { id: "rtd_giay_cuoi", group: "II. Rơi tự do (Khó)", desc: "Quãng đường rơi giây cuối", tex: "\\Delta S_{cuoi} = g(t - 0.5)", advanced: true },

    // ==================================================
    // III. CHUYỂN ĐỘNG NÉM NGANG
    // ==================================================

    // --- GỐC ---
    { id: "nn_t", group: "III. Ném ngang", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h}{g}}" },
    { id: "nn_l", group: "III. Ném ngang", desc: "Tầm xa (L)", tex: "L = v_0 \\sqrt{\\frac{2h}{g}}" },
    { id: "nn_v", group: "III. Ném ngang", desc: "Vận tốc chạm đất", tex: "v = \\sqrt{v_0^2 + (gt)^2}" },
    { id: "nn_tan", group: "III. Ném ngang", desc: "Góc lệch (tan alpha)", tex: "\\tan \\alpha = \\frac{gt}{v_0}" },
    { id: "nn_y", group: "III. Ném ngang", desc: "Phương trình quỹ đạo", tex: "y = \\frac{g}{2v_0^2}x^2" },

    // --- SUY DIỄN (NÂNG CAO) ---
    { id: "nn_v0_from_l", group: "III. Ném ngang (Suy rộng)", desc: "Tính vận tốc ném (từ L, h)", tex: "v_0 = L \\sqrt{\\frac{g}{2h}}", advanced: true },
    { id: "nn_h_from_l", group: "III. Ném ngang (Suy rộng)", desc: "Tính độ cao (từ L, v0)", tex: "h = \\frac{gL^2}{2v_0^2}", advanced: true },
    { id: "nn_vx", group: "III. Ném ngang (Chi tiết)", desc: "Vận tốc theo phương ngang (Vx)", tex: "v_x = v_0", advanced: true },
    { id: "nn_vy", group: "III. Ném ngang (Chi tiết)", desc: "Vận tốc theo phương thẳng đứng (Vy)", tex: "v_y = gt", advanced: true },
    { id: "nn_x_t", group: "III. Ném ngang (Chi tiết)", desc: "Tọa độ ngang (x)", tex: "x = v_0t", advanced: true },
    { id: "nn_y_t", group: "III. Ném ngang (Chi tiết)", desc: "Tọa độ đứng (y)", tex: "y = \\frac{1}{2}gt^2", advanced: true }
];

// ======================================================
// 2. LOGIC CẬP NHẬT & THEO DÕI HỌC TẬP
// ======================================================

let currentMode = 'mixed'; // Mặc định là chế độ thông minh
let currentItem = null;
let currentSubMode = ''; // Dùng cho chế độ mixed để biết đang hiển thị dạng nào
let isAnswered = false;

// Lưu trữ lịch sử trả lời: { "formula_id": weight }
// Weight càng cao -> càng hay làm sai -> xuất hiện càng nhiều
let formulaWeights = {};

document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo weights ban đầu nếu chưa có
    formulas.forEach(f => {
        if(!f.id) f.id = f.tex; // Fallback nếu quên ID
        formulaWeights[f.id] = 1; 
    });

    renderList();
    changeQuizMode();
    
    const mathField = document.getElementById('math-input');
    if(mathField) {
        mathField.addEventListener('input', () => {
             document.getElementById('feedback-msg').classList.add('hidden');
        });
    }
});

// ======================================================
// 3. LOGIC HIỂN THỊ DANH SÁCH (CÓ SUB-TAB & COLLAPSE)
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
        container.innerHTML = '<p style="text-align:center; color:#888;">Không có công thức nào trong mục này.</p>';
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

// -----------------------------------------------------
// LOGIC CHỌN CÂU HỎI & SMART REVIEW
// -----------------------------------------------------

function nextQuestion() {
    isAnswered = false;
    // Reset UI
    document.getElementById('feedback-msg').className = 'feedback hidden';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('correct-answer-display').className = 'hidden';
    document.getElementById('btn-next').classList.add('hidden');
    
    // Ẩn tất cả các khu vực câu hỏi trước
    ['flashcard-area', 'options-container', 'essay-area'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById('quiz-main-display').innerHTML = '';

    // 1. Lọc danh sách dựa trên toggle Nâng cao
    const isAdvancedMode = document.getElementById('advanced-toggle').checked;
    const activeFormulas = formulas.filter(item => isAdvancedMode ? true : !item.advanced);

    // 2. Chọn câu hỏi (Weighted Random cho chế độ Mixed)
    if (currentMode === 'mixed') {
        currentItem = getSmartWeightedQuestion(activeFormulas);
    } else {
        const randomIndex = Math.floor(Math.random() * activeFormulas.length);
        currentItem = activeFormulas[randomIndex];
    }
    
    const topicSuffix = currentItem.advanced ? " (Nâng cao)" : "";
    document.getElementById('quiz-category').textContent = currentItem.group + topicSuffix;

    // 3. Quyết định chế độ hiển thị (Sub-mode)
    let displayMode = currentMode;
    if (currentMode === 'mixed') {
        // Random chế độ hiển thị để đổi gió
        const modes = ['multiple', 'fill', 'essay', 'flashcard'];
        // Ưu tiên Essay cho các câu đã làm đúng nhiều lần để kiểm tra thực sự
        const w = formulaWeights[currentItem.id] || 1;
        if (w < 1) { // Đã thành thạo -> Hỏi khó (Tự luận)
            displayMode = Math.random() > 0.3 ? 'essay' : 'fill';
        } else { // Còn yếu -> Hỏi dễ (Trắc nghiệm/Flashcard)
            displayMode = modes[Math.floor(Math.random() * modes.length)];
        }
    }
    currentSubMode = displayMode; // Lưu lại để dùng khi check đáp án

    // 4. Setup giao diện
    if (displayMode === 'flashcard') setupFlashcard();
    else if (displayMode === 'multiple') setupMultipleChoice(activeFormulas);
    else if (displayMode === 'fill') setupFillInBlank(activeFormulas);
    else if (displayMode === 'essay') setupEssay();
}

// Thuật toán chọn câu hỏi dựa trên trọng số (Câu nào sai nhiều sẽ hiện nhiều)
function getSmartWeightedQuestion(availableList) {
    let pool = [];
    availableList.forEach(item => {
        const w = formulaWeights[item.id] || 1;
        // Nhân bản item trong pool dựa trên trọng số (tối đa 5 lần để không quá lệch)
        let count = Math.ceil(w * 2); 
        if(count > 5) count = 5;
        if(count < 1) count = 1;
        for(let i=0; i<count; i++) pool.push(item);
    });
    
    return pool[Math.floor(Math.random() * pool.length)];
}

// Cập nhật trọng số sau khi trả lời
function updateWeight(isCorrect) {
    const id = currentItem.id;
    if(!formulaWeights[id]) formulaWeights[id] = 1;

    if(isCorrect) {
        formulaWeights[id] *= 0.7; // Giảm trọng số nếu đúng (ít hiện lại)
        if(formulaWeights[id] < 0.2) formulaWeights[id] = 0.2;
    } else {
        formulaWeights[id] += 1.5; // Tăng mạnh trọng số nếu sai (hiện lại nhiều)
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
    // Flashcard xem như luôn đúng (tự đánh giá), giảm nhẹ weight
    updateWeight(true); 
}

function setupMultipleChoice(activeList) {
    document.getElementById('options-container').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Chọn công thức đúng: ${currentItem.desc}`;
    
    let options = [currentItem];
    while(options.length < 4) {
        let r = activeList[Math.floor(Math.random() * activeList.length)];
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
    while(options.length < 4) {
        let r = activeList[Math.floor(Math.random() * activeList.length)];
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
             // Logic tìm nút đúng để highlight (đơn giản hóa)
             if(b.innerHTML.includes(currentItem.tex) || (currentSubMode === 'fill' && currentItem.tex.includes(normalizeTex(b.textContent)))) {
                 b.classList.add('correct');
             }
        });
    }
    document.getElementById('btn-next').classList.remove('hidden');
}

// === NÂNG CẤP LOGIC CHẤM TỰ LUẬN ===
function checkEssayAnswer() {
    if(isAnswered) return;
    const mf = document.getElementById('math-input');
    const userInput = mf.value;
    const correctTex = currentItem.tex;

    // Sử dụng hàm so sánh thông minh mới
    const isCorrect = checkMathEquivalence(userInput, correctTex);

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

// === HÀM XỬ LÝ CHUỖI MATH (CORE LOGIC) ===

// So sánh 2 biểu thức toán học (cho phép đảo vế)
function checkMathEquivalence(input, target) {
    const cleanInput = normalizeTex(input);
    const cleanTarget = normalizeTex(target);

    // 1. So sánh trực tiếp
    if (cleanInput === cleanTarget) return true;

    // 2. So sánh đảo vế (Commutative of Equality)
    // Tách 2 vế bằng dấu =
    const splitInput = cleanInput.split('=');
    const splitTarget = cleanTarget.split('=');

    // Nếu không có dấu = ở cả 2 thì thua
    if (splitInput.length < 2 || splitTarget.length < 2) return false;

    const inL = splitInput[0];
    const inR = splitInput.slice(1).join('='); // Ghép lại nếu có nhiều dấu = (ít gặp)
    
    const tarL = splitTarget[0];
    const tarR = splitTarget.slice(1).join('=');

    // Kiểm tra chéo: Input(L=R) so với Target(R=L)
    if (inL === tarR && inR === tarL) return true;

    return false;
}

function normalizeTex(tex) {
    if(!tex) return "";
    let clean = tex;

    // Xóa các lệnh định dạng không ảnh hưởng toán học
    clean = clean.replace(/\\left/g, '');
    clean = clean.replace(/\\right/g, '');
    clean = clean.replace(/\\text\{.*?\}/g, '');
    clean = clean.replace(/\\mathrm\{.*?\}/g, '');
    clean = clean.replace(/\s/g, ''); // Xóa toàn bộ khoảng trắng
    
    // Chuẩn hóa các ký hiệu tương đương
    clean = clean.replace(/\\approx/g, '='); // Xem xấp xỉ như bằng
    clean = clean.replace(/\\cdot/g, '');    // Bỏ dấu nhân chấm
    clean = clean.replace(/\\times/g, '');   // Bỏ dấu nhân chéo
    
    // Chuẩn hóa phân số: \frac{a}{b} -> có thể giữ nguyên để so sánh string, 
    // nhưng cần đảm bảo user nhập đúng format mathlive.
    // MathLive thường output chuẩn nên so sánh string sau khi clean space là khá ổn.
    
    return clean.trim();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// ======================================================
// CƠ SỞ DỮ LIỆU CÔNG THỨC (FULL VERSION)
// ======================================================
const formulas = [
    // ==================================================
    // I. CHUYỂN ĐỘNG BIẾN ĐỔI ĐỀU
    // ==================================================
    
    // --- GỐC ---
    { group: "I. Biến đổi đều", desc: "Gia tốc (định nghĩa)", tex: "a = \\frac{v - v_0}{t}" },
    { group: "I. Biến đổi đều", desc: "Vận tốc tức thời", tex: "v = v_0 + at" },
    { group: "I. Biến đổi đều", desc: "Quãng đường (s)", tex: "s = v_0t + \\frac{1}{2}at^2" },
    { group: "I. Biến đổi đều", desc: "Phương trình tọa độ", tex: "x = x_0 + v_0t + \\frac{1}{2}at^2" },
    { group: "I. Biến đổi đều", desc: "Công thức độc lập thời gian", tex: "v^2 - v_0^2 = 2as" },

    // --- SUY DIỄN (NÂNG CAO) ---
    // Từ v = v0 + at
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính thời gian (từ v, a)", tex: "t = \\frac{v - v_0}{a}", advanced: true },
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính vận tốc đầu (v0)", tex: "v_0 = v - at", advanced: true },
    
    // Từ s = v0t + 1/2at^2
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính gia tốc (từ s, t, v0)", tex: "a = \\frac{2(s - v_0t)}{t^2}", advanced: true },
    
    // Từ v^2 - v0^2 = 2as
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính gia tốc (từ v, s)", tex: "a = \\frac{v^2 - v_0^2}{2s}", advanced: true },
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính quãng đường (từ v, a)", tex: "s = \\frac{v^2 - v_0^2}{2a}", advanced: true },
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính vận tốc sau (từ s, a)", tex: "v = \\sqrt{v_0^2 + 2as}", advanced: true },
    { group: "I. Biến đổi đều (Suy rộng)", desc: "Tính vận tốc đầu (từ s, a)", tex: "v_0 = \\sqrt{v^2 - 2as}", advanced: true },

    // Đặc biệt: Quãng đường đi được trong giây thứ n
    { group: "I. Biến đổi đều (Khó)", desc: "Quãng đường trong giây thứ n", tex: "\\Delta s_n = v_0 + \\frac{1}{2}a(2n - 1)", advanced: true },


    // ==================================================
    // II. CHUYỂN ĐỘNG RƠI TỰ DO
    // ==================================================

    // --- GỐC ---
    { group: "II. Rơi tự do", desc: "Gia tốc rơi", tex: "a = g \\approx 9.8" },
    { group: "II. Rơi tự do", desc: "Vận tốc rơi", tex: "v = gt" },
    { group: "II. Rơi tự do", desc: "Quãng đường rơi", tex: "S = \\frac{1}{2}gt^2" },
    { group: "II. Rơi tự do", desc: "Độc lập (Rơi tự do)", tex: "v^2 = 2gS" },
    { group: "II. Rơi tự do", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h}{g}}" },

    // --- SUY DIỄN (NÂNG CAO) ---
    // Từ v = gt
    { group: "II. Rơi tự do (Suy rộng)", desc: "Tính thời gian rơi (từ v)", tex: "t = \\frac{v}{g}", advanced: true },
    
    // Từ S = 1/2gt^2
    { group: "II. Rơi tự do (Suy rộng)", desc: "Tính thời gian (từ quãng đường S)", tex: "t = \\sqrt{\\frac{2S}{g}}", advanced: true },
    
    // Từ v^2 = 2gS
    { group: "II. Rơi tự do (Suy rộng)", desc: "Tính quãng đường/độ cao (từ v)", tex: "S = \\frac{v^2}{2g}", advanced: true },
    { group: "II. Rơi tự do (Suy rộng)", desc: "Tính vận tốc (từ độ cao h)", tex: "v = \\sqrt{2gh}", advanced: true },
    
    // Quãng đường rơi trong giây cuối cùng (Bài toán kinh điển)
    { group: "II. Rơi tự do (Khó)", desc: "Quãng đường rơi giây cuối", tex: "\\Delta S_{cuoi} = g(t - 0.5)", advanced: true },


    // ==================================================
    // III. CHUYỂN ĐỘNG NÉM NGANG
    // ==================================================

    // --- GỐC ---
    { group: "III. Ném ngang", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h}{g}}" },
    { group: "III. Ném ngang", desc: "Tầm xa (L)", tex: "L = v_0 \\sqrt{\\frac{2h}{g}}" },
    { group: "III. Ném ngang", desc: "Vận tốc chạm đất", tex: "v = \\sqrt{v_0^2 + (gt)^2}" },
    { group: "III. Ném ngang", desc: "Góc lệch (tan alpha)", tex: "\\tan \\alpha = \\frac{gt}{v_0}" },
    { group: "III. Ném ngang", desc: "Phương trình quỹ đạo", tex: "y = \\frac{g}{2v_0^2}x^2" },

    // --- SUY DIỄN (NÂNG CAO) ---
    // Từ L = v0 * t
    { group: "III. Ném ngang (Suy rộng)", desc: "Tính vận tốc ném (từ L, h)", tex: "v_0 = L \\sqrt{\\frac{g}{2h}}", advanced: true },
    { group: "III. Ném ngang (Suy rộng)", desc: "Tính độ cao (từ L, v0)", tex: "h = \\frac{gL^2}{2v_0^2}", advanced: true },

    // Vận tốc thành phần
    { group: "III. Ném ngang (Chi tiết)", desc: "Vận tốc theo phương ngang (Vx)", tex: "v_x = v_0", advanced: true },
    { group: "III. Ném ngang (Chi tiết)", desc: "Vận tốc theo phương thẳng đứng (Vy)", tex: "v_y = gt", advanced: true },
    
    // Tọa độ tại thời điểm t
    { group: "III. Ném ngang (Chi tiết)", desc: "Tọa độ ngang (x)", tex: "x = v_0t", advanced: true },
    { group: "III. Ném ngang (Chi tiết)", desc: "Tọa độ đứng (y)", tex: "y = \\frac{1}{2}gt^2", advanced: true }
];

// ======================================================
// 2. LOGIC CẬP NHẬT
// ======================================================

let currentMode = 'flashcard';
let currentItem = null;
let isAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
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

let currentListFilter = 'basic'; // Mặc định hiển thị Cơ bản

function switchListFilter(mode) {
    currentListFilter = mode;
    
    // Cập nhật giao diện nút bấm active
    const buttons = document.querySelectorAll('.sub-tab-btn');
    buttons.forEach(btn => {
        // Kiểm tra text nút hoặc logic onclick để set active (cách đơn giản nhất là reset hết rồi set lại)
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(mode)) {
            btn.classList.add('active');
        }
    });

    // Vẽ lại danh sách
    renderList();
}

function renderList() {
    const container = document.getElementById('formulas-container');
    container.innerHTML = '';
    
    // BƯỚC 1: LỌC DỮ LIỆU
    // Nếu mode là 'basic' -> chỉ lấy item không có advanced
    // Nếu mode là 'advanced' -> chỉ lấy item có advanced
    const filteredFormulas = formulas.filter(item => {
        if (currentListFilter === 'basic') return !item.advanced;
        if (currentListFilter === 'advanced') return item.advanced;
        return true;
    });

    if (filteredFormulas.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888;">Không có công thức nào trong mục này.</p>';
        return;
    }

    // BƯỚC 2: GOM NHÓM (Dựa trên dữ liệu đã lọc)
    const groups = {};
    filteredFormulas.forEach(item => {
        if (!groups[item.group]) {
            groups[item.group] = [];
        }
        groups[item.group].push(item);
    });

    // BƯỚC 3: VẼ GIAO DIỆN (Collapse logic)
    for (const [groupName, groupItems] of Object.entries(groups)) {
        
        // Header nhóm
        const header = document.createElement('div');
        header.className = 'group-header'; 
        // Mặc định mở ở chế độ nâng cao cho dễ nhìn, đóng ở cơ bản cho gọn
        if(currentListFilter === 'advanced') header.classList.add('active');

        header.innerHTML = `
            <h3>${groupName} (${groupItems.length})</h3>
            <span class="toggle-icon">▼</span>
        `;

        // Content nhóm
        const contentDiv = document.createElement('div');
        contentDiv.className = 'group-content';
        if(currentListFilter === 'advanced') contentDiv.classList.add('open');

        // Thẻ bài công thức
        groupItems.forEach(item => {
            const advClass = item.advanced ? 'advanced' : '';
            // Chỉ hiện sao đỏ nếu đang xem danh sách hỗn hợp (ở đây đã tách tab nên có thể bỏ badge nếu muốn)
            const badge = item.advanced ? '<span style="color:red; font-size:0.8em; margin-left:5px">★</span>' : '';

            const card = document.createElement('div');
            card.className = `formula-card ${advClass}`;
            card.innerHTML = `
                <div class="formula-desc">${item.desc} ${badge}</div>
                <div class="formula-content">\\[${item.tex}\\]</div>
            `;
            contentDiv.appendChild(card);
        });

        // Sự kiện click đóng mở
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
// LOGIC CHỌN CÂU HỎI (QUAN TRỌNG NHẤT)
// -----------------------------------------------------
function nextQuestion() {
    isAnswered = false;
    // Reset UI
    document.getElementById('feedback-msg').className = 'feedback hidden';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('correct-answer-display').className = 'hidden';
    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('flashcard-area').classList.add('hidden');
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('essay-area').classList.add('hidden');
    document.getElementById('quiz-main-display').innerHTML = '';

    // --- LỌC DỮ LIỆU DỰA VÀO CHECKBOX NÂNG CAO ---
    const isAdvancedMode = document.getElementById('advanced-toggle').checked;
    
    // Nếu tắt nâng cao -> Chỉ lấy công thức thường (!item.advanced)
    // Nếu bật nâng cao -> Lấy tất cả (bao gồm cả advanced)
    const activeFormulas = formulas.filter(item => {
        return isAdvancedMode ? true : !item.advanced;
    });

    // Random từ danh sách đã lọc
    const randomIndex = Math.floor(Math.random() * activeFormulas.length);
    currentItem = activeFormulas[randomIndex];
    
    // Hiển thị chủ đề (Thêm chữ Nâng cao nếu có)
    const topicSuffix = currentItem.advanced ? " (Nâng cao)" : "";
    document.getElementById('quiz-category').textContent = currentItem.group + topicSuffix;

    // Dispatch Mode
    if (currentMode === 'flashcard') setupFlashcard();
    else if (currentMode === 'multiple') setupMultipleChoice(activeFormulas); // Truyền list đã lọc vào để tạo đáp án nhiễu
    else if (currentMode === 'fill') setupFillInBlank(activeFormulas);
    else if (currentMode === 'essay') setupEssay();
}

// Các hàm Setup Mode (Giữ nguyên logic, chỉ lưu ý tham số activeList)

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
}

function setupMultipleChoice(activeList) {
    document.getElementById('options-container').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Chọn công thức đúng: ${currentItem.desc}`;
    
    let options = [currentItem];
    // Tạo đáp án nhiễu từ list đang kích hoạt (để độ khó tương đồng)
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

function checkEssayAnswer() {
    if(isAnswered) return;
    const mf = document.getElementById('math-input');
    const userInput = normalizeTex(mf.value);
    const correctAnswer = normalizeTex(currentItem.tex);
    const isCorrect = (userInput === correctAnswer);
    showFeedback(isCorrect);
    isAnswered = true;
    document.getElementById('btn-next').classList.remove('hidden');
}

function showHint() {
    const parts = currentItem.tex.split('=');
    const mf = document.getElementById('math-input');
    if(parts.length > 0) { mf.value = parts[0] + '='; mf.focus(); }
}

function checkMultipleChoice(btn, isCorrect) {
    if(isAnswered) return;
    isAnswered = true;
    if(isCorrect) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('wrong');
        showFeedback(false);
        // Highlight logic
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => {
             // Basic check for highlight
             if(currentMode === 'multiple' && b.innerHTML.includes(currentItem.tex)) b.classList.add('correct');
             // For fill mode, it's harder to auto-detect without exact string match, skipping for simplicity or need exact logic
        });
    }
    document.getElementById('btn-next').classList.remove('hidden');
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

function normalizeTex(tex) {
    if(!tex) return "";
    return tex
        .replace(/\\left/g, '').replace(/\\right/g, '')
        .replace(/\s/g, '').replace(/\\text{.*?}/g, '')
        .replace(/\\approx/g, '=')
        .trim();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
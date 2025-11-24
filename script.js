// ======================================================
// 1. CƠ SỞ DỮ LIỆU CÔNG THỨC (16 CÔNG THỨC CHUẨN)
// ======================================================
// Lưu ý: Dùng dấu "\\" để escape ký tự trong chuỗi JS
const formulas = [
    // --- I. Chuyển động biến đổi đều ---
    { group: "I. Biến đổi đều", desc: "Gia tốc", tex: "a = \\frac{v - v_0}{t}" },
    { group: "I. Biến đổi đều", desc: "Vận tốc tức thời", tex: "v = v_0 + at" },
    { group: "I. Biến đổi đều", desc: "Quãng đường (s)", tex: "s = v_0t + \\frac{1}{2}at^2" },
    { group: "I. Biến đổi đều", desc: "Phương trình tọa độ (x)", tex: "x = x_0 + v_0t + \\frac{1}{2}at^2" },
    { group: "I. Biến đổi đều", desc: "Công thức độc lập thời gian", tex: "v^2 - v_0^2 = 2as" },

    // --- II. Chuyển động rơi tự do ---
    { group: "II. Rơi tự do", desc: "Gia tốc rơi tự do", tex: "a = g \\approx 9.8" },
    { group: "II. Rơi tự do", desc: "Vận tốc rơi tự do", tex: "v = gt" },
    { group: "II. Rơi tự do", desc: "Quãng đường rơi", tex: "S = \\frac{1}{2}gt^2" },
    { group: "II. Rơi tự do", desc: "Công thức độc lập (Rơi tự do)", tex: "v^2 = 2gS" },
    { group: "II. Rơi tự do", desc: "Thời gian chạm đất", tex: "t = \\sqrt{\\frac{2h_{max}}{g}}" },

    // --- III. Chuyển động ném ---
    { group: "III. Chuyển động ném", desc: "Thời gian chạm đất (Ném ngang)", tex: "t = \\sqrt{\\frac{2h}{g}}" },
    { group: "III. Chuyển động ném", desc: "Tầm xa (L = x_max)", tex: "L = v_0 \\sqrt{\\frac{2h}{g}}" },
    { group: "III. Chuyển động ném", desc: "Vận tốc khi chạm đất", tex: "v = \\sqrt{v_0^2 + (gt)^2}" },
    { group: "III. Chuyển động ném", desc: "Góc lệch (tan alpha)", tex: "\\tan \\alpha = \\frac{gt}{v_0}" },
    { group: "III. Chuyển động ném", desc: "Phương trình quỹ đạo", tex: "y = \\frac{g}{2v_0^2}x^2" }
];

// ======================================================
// 2. BIẾN TRẠNG THÁI & KHỞI TẠO
// ======================================================
let currentMode = 'flashcard'; // Các chế độ: flashcard, multiple, fill, essay
let currentItem = null;        // Công thức đang hiển thị
let isAnswered = false;        // Đã trả lời chưa?

// Chạy khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderList();      // Vẽ tab Danh sách
    changeQuizMode();  // Thiết lập chế độ mặc định cho tab Luyện tập

    // Lắng nghe sự kiện gõ phím vào ô MathLive để xóa thông báo lỗi (nếu có)
    const mathField = document.getElementById('math-input');
    if(mathField) {
        mathField.addEventListener('input', () => {
             document.getElementById('feedback-msg').classList.add('hidden');
        });
    }
});

// Chuyển đổi Tab (Danh sách <-> Luyện tập)
function switchTab(tabName) {
    // Xóa class active ở tất cả view và nút
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    if (tabName === 'list') {
        document.getElementById('list-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'list\')"]').classList.add('active');
    } else {
        document.getElementById('quiz-view').classList.add('active');
        document.querySelector('button[onclick="switchTab(\'quiz\')"]').classList.add('active');
        if(!currentItem) nextQuestion(); // Nếu chưa có câu hỏi thì tạo mới
    }
}

// ======================================================
// 3. LOGIC HIỂN THỊ DANH SÁCH (TAB 1)
// ======================================================
function renderList() {
    const container = document.getElementById('formulas-container');
    container.innerHTML = '';
    
    let currentGroup = '';

    formulas.forEach(item => {
        // Tạo tiêu đề nhóm
        if (item.group !== currentGroup) {
            currentGroup = item.group;
            const title = document.createElement('h3');
            title.className = 'group-title';
            title.textContent = currentGroup;
            container.appendChild(title);
        }

        // Tạo thẻ công thức
        const card = document.createElement('div');
        card.className = 'formula-card';
        card.innerHTML = `
            <div class="formula-desc">${item.desc}</div>
            <div class="formula-content">\\[${item.tex}\\]</div>
        `;
        container.appendChild(card);
    });

    // Gọi MathJax render lại giao diện
    MathJax.typesetPromise();
}

// ======================================================
// 4. LOGIC QUIZ MASTER (TAB 2)
// ======================================================

// Đổi chế độ chơi từ Dropdown
function changeQuizMode() {
    currentMode = document.getElementById('quiz-mode').value;
    nextQuestion();
}

// Tạo câu hỏi mới
function nextQuestion() {
    isAnswered = false;

    // --- Reset toàn bộ giao diện ---
    document.getElementById('feedback-msg').className = 'feedback hidden';
    document.getElementById('feedback-msg').textContent = '';
    document.getElementById('correct-answer-display').className = 'hidden';
    document.getElementById('btn-next').classList.add('hidden');
    
    // Ẩn tất cả các vùng chức năng riêng
    document.getElementById('flashcard-area').classList.add('hidden');
    document.getElementById('options-container').classList.add('hidden');
    document.getElementById('essay-area').classList.add('hidden');
    document.getElementById('quiz-main-display').innerHTML = ''; // Xóa hiển thị cũ

    // --- Chọn công thức ngẫu nhiên ---
    const randomIndex = Math.floor(Math.random() * formulas.length);
    currentItem = formulas[randomIndex];
    document.getElementById('quiz-category').textContent = currentItem.group;

    // --- Điều hướng sang setup của từng chế độ ---
    if (currentMode === 'flashcard') {
        setupFlashcard();
    } else if (currentMode === 'multiple') {
        setupMultipleChoice();
    } else if (currentMode === 'fill') {
        setupFillInBlank();
    } else if (currentMode === 'essay') {
        setupEssay();
    }
}

// ------------------------------------------------------
// MODE A: FLASHCARD (LẬT THẺ)
// ------------------------------------------------------
function setupFlashcard() {
    document.getElementById('flashcard-area').classList.remove('hidden');
    document.getElementById('btn-reveal').classList.remove('hidden');
    document.getElementById('flashcard-answer').classList.add('hidden');
    
    document.getElementById('quiz-question').textContent = `Công thức tính: ${currentItem.desc}?`;
    
    // Chuẩn bị sẵn đáp án nhưng ẩn đi
    const ansDiv = document.getElementById('flashcard-answer');
    ansDiv.innerHTML = `\\[${currentItem.tex}\\]`;
    MathJax.typesetPromise([ansDiv]);
}

function revealFlashcard() {
    document.getElementById('flashcard-answer').classList.remove('hidden');
    document.getElementById('btn-reveal').classList.add('hidden');
    document.getElementById('btn-next').classList.remove('hidden');
}

// ------------------------------------------------------
// MODE B: TRẮC NGHIỆM (CHỌN ĐÁP ÁN ĐÚNG)
// ------------------------------------------------------
function setupMultipleChoice() {
    document.getElementById('options-container').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Chọn công thức đúng cho: ${currentItem.desc}`;
    
    // Tạo mảng đáp án: 1 đúng + 3 sai
    let options = [currentItem];
    while(options.length < 4) {
        let randomItem = formulas[Math.floor(Math.random() * formulas.length)];
        // Đảm bảo không trùng đáp án đã có
        if(!options.includes(randomItem)) {
            options.push(randomItem);
        }
    }
    // Trộn ngẫu nhiên vị trí
    options = shuffleArray(options);

    // Vẽ các nút bấm
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `\\(${opt.tex}\\)`; // MathJax inline
        btn.onclick = () => checkMultipleChoice(btn, opt === currentItem);
        container.appendChild(btn);
    });
    MathJax.typesetPromise([container]);
}

// ------------------------------------------------------
// MODE C: ĐIỀN KHUYẾT (TÌM MẢNH GHÉP)
// ------------------------------------------------------
function setupFillInBlank() {
    document.getElementById('options-container').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Hoàn thành công thức: ${currentItem.desc}`;

    // Tách công thức thành 2 vế: Trái = Phải
    let parts = currentItem.tex.split('=');
    // Nếu công thức không có dấu bằng (hiếm), xử lý an toàn
    let left = parts[0];
    let right = parts.length > 1 ? parts.slice(1).join('=') : ""; // Ghép lại nếu có nhiều dấu =

    // Hiển thị câu hỏi: Vế trái = [?]
    const displayDiv = document.getElementById('quiz-main-display');
    displayDiv.innerHTML = `\\[${left} = \\boxed{?}\\]`;
    MathJax.typesetPromise([displayDiv]);

    // Tạo đáp án nhiễu (lấy vế phải của các công thức khác)
    let options = [right];
    while(options.length < 4) {
        let randomItem = formulas[Math.floor(Math.random() * formulas.length)];
        let rParts = randomItem.tex.split('=');
        if(rParts.length > 1) {
            let rRight = rParts.slice(1).join('=');
            if(!options.includes(rRight)) {
                options.push(rRight);
            }
        }
    }
    options = shuffleArray(options);

    // Vẽ nút bấm
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

// ------------------------------------------------------
// MODE D: TỰ LUẬN (NHẬP LIỆU MATHLIVE)
// ------------------------------------------------------
function setupEssay() {
    document.getElementById('essay-area').classList.remove('hidden');
    document.getElementById('quiz-question').textContent = `Hãy nhập công thức tính: ${currentItem.desc}`;
    
    const mf = document.getElementById('math-input');
    mf.value = ''; // Xóa nội dung cũ
    
    // Tự động focus để hiện bàn phím ảo (trên mobile)
    setTimeout(() => mf.focus(), 100);
}

function checkEssayAnswer() {
    if(isAnswered) return;
    
    const mf = document.getElementById('math-input');
    // Lấy giá trị người dùng và chuẩn hóa
    const userInput = normalizeTex(mf.value);
    const correctAnswer = normalizeTex(currentItem.tex);

    console.log("Input:", userInput);
    console.log("Target:", correctAnswer);

    const isCorrect = (userInput === correctAnswer);
    
    showFeedback(isCorrect);
    isAnswered = true;
    document.getElementById('btn-next').classList.remove('hidden');
}

function showHint() {
    // Gợi ý vế trái của công thức
    const parts = currentItem.tex.split('=');
    const mf = document.getElementById('math-input');
    if(parts.length > 0) {
        mf.value = parts[0] + '='; 
        mf.focus();
    }
}

// ======================================================
// 5. CÁC HÀM XỬ LÝ CHUNG & BỔ TRỢ
// ======================================================

// Kiểm tra đáp án cho Trắc nghiệm & Điền khuyết
function checkMultipleChoice(btn, isCorrect) {
    if(isAnswered) return; // Chặn click nhiều lần
    isAnswered = true;
    
    if(isCorrect) {
        btn.classList.add('correct');
        showFeedback(true);
    } else {
        btn.classList.add('wrong');
        showFeedback(false);
        
        // Highlight đáp án đúng (để người dùng học)
        // Tìm nút nào chứa nội dung đúng thì tô xanh
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns.forEach(b => {
            // Logic so sánh nội dung nút với đáp án
            // Trong chế độ Fill: nút chứa vế phải
            // Trong chế độ Multiple: nút chứa cả công thức
            let parts = currentItem.tex.split('=');
            let right = parts.length > 1 ? parts.slice(1).join('=') : "";
            
            // MathLive/MathJax có thể thay đổi format, nên ta check 'contains' string
            if(currentMode === 'multiple' && b.innerHTML.includes(currentItem.tex)) {
                b.classList.add('correct');
            }
            if(currentMode === 'fill' && b.innerHTML.includes(right)) {
                b.classList.add('correct');
            }
        });
    }
    document.getElementById('btn-next').classList.remove('hidden');
}

// Hiển thị thông báo kết quả
function showFeedback(isCorrect) {
    const fb = document.getElementById('feedback-msg');
    const ansDisplay = document.getElementById('correct-answer-display');
    
    fb.classList.remove('hidden');
    
    if(isCorrect) {
        fb.textContent = "🎉 Xuất sắc! Bạn đã trả lời đúng.";
        fb.className = "feedback correct";
    } else {
        fb.textContent = "❌ Chưa đúng rồi. Đáp án chính xác là:";
        fb.className = "feedback wrong";
        
        // Hiện đáp án đúng ra
        ansDisplay.classList.remove('hidden');
        ansDisplay.innerHTML = `\\[${currentItem.tex}\\]`;
        MathJax.typesetPromise([ansDisplay]);
    }
}

// Hàm chuẩn hóa chuỗi LaTeX để so sánh
// (Giúp loại bỏ sự khác biệt do khoảng trắng hoặc các lệnh style thừa)
function normalizeTex(tex) {
    if(!tex) return "";
    return tex
        .replace(/\\left/g, '')     // Xóa \left
        .replace(/\\right/g, '')    // Xóa \right
        .replace(/\s/g, '')         // Xóa TẤT CẢ khoảng trắng
        .replace(/\\text{.*?}/g, '') // Xóa các ghi chú text
        .replace(/\\approx/g, '=')   // Coi xấp xỉ như dấu bằng để dễ chấm
        .trim();
}

// Hàm trộn mảng (Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
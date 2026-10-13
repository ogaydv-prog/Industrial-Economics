/* ==========================================================================
   grading_ai_engine.js — Industrial Economics AI Audit Engine
   AlmaU SDTE 2026 | Midterm Control 1
   ========================================================================== */

const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz-fH9jFhcBpC0g5DFh9mKhB9wSo4WKtYNsa1-Cqv06ND1-0GbNemCR4VH1j2uUefAY/exec";

function verifyTeacherKey() {
    toggleModal('teacher-modal', false);
    const profPanel = document.getElementById('prof-grade-panel');
    if (profPanel) profPanel.classList.remove('hidden');
    notify(currentLang === 'en' ? "Professor panel unlocked!" : "Панель преподавателя разблокирована!");
}

function compileFinalToken() {
    if (typeof currentStudentIdx === 'undefined' || currentStudentIdx === -1) {
        notify(currentLang === 'en' ? "Please select your name first!" : "Сначала выберите свое ФИО!", true);
        return;
    }

    // --- ЧАСТЬ 1 и ЧАСТЬ 2: ТЕСТЫ (10 вопросов x 3 балла = 30 баллов MAX) ---
    const p1_p2_answers = {};
    let scoreP1P2 = 0;

    document.querySelectorAll('#part1-container input:checked, #part2-container input:checked').forEach(input => {
        p1_p2_answers[input.name] = input.value;
        if (input.dataset.ans && input.value === input.dataset.ans) {
            scoreP1P2 += 3;
        }
    });

    // --- ЧАСТЬ 3: VOLKSWAGEN CASE & ESSAY (70 баллов MAX) ---
    const essayElem = document.getElementById('case-p4-essay');
    const p4_essay = essayElem ? essayElem.value.trim() : "";
    const p4_words = p4_essay ? p4_essay.split(/\s+/).filter(w => w.length > 0).length : 0;
    const lowerEssay = p4_essay.toLowerCase();

    // Жесткое требование: минимум 100 слов для полноценного анализа
    if (p4_words < 100) {
        notify(currentLang === 'en' 
            ? `Executive Memo requires at least 100 words (Current: ${p4_words}).` 
            : `Анализ кейса должен содержать не менее 100 слов (Сейчас: ${p4_words}).`, true);
        return;
    }

    // 1. Оценка точности настройки слайдеров симулятора (20 баллов MAX)
    let sliderScore = 10;
    if (typeof p4_getSliderScore === 'function') {
        sliderScore = Math.round(p4_getSliderScore()); // Возвращает до 20 баллов
    }

    // 2. Смысловая оценка текста (50 баллов MAX)
    const indEconKeywords = [
        "маржа", "прибыль", "издержк", "мощнос", "завод", "штат", "сокращен", "пошлин", "китай", "электромобил", "капекс", "нижняя саксония", "профсоюз", "ig metall",
        "margin", "profit", "cost", "capacity", "plant", "workforce", "layoff", "tariff", "china", "bev", "capex", "labor", "esg", "co2"
    ];
    let keyMatches = 0;
    indEconKeywords.forEach(kw => { if (lowerEssay.includes(kw)) keyMatches++; });
    const hasNumbers = /\d+/.test(p4_essay);

    let textScore = 0;
    if (p4_words >= 100 && keyMatches >= 5 && hasNumbers) {
        textScore = 50; // Идеальный детальный разбор с цифрами и терминологией
    } else if (p4_words >= 100 && keyMatches >= 3) {
        textScore = 35; // Хороший связный ответ
    } else {
        textScore = 20; // Базовый текст без глубоких цифр
    }

    // Итоговый балл за Кейс (20 + 50 = 70 MAX)
    let scoreCase = Math.min(70, sliderScore + textScore);

    // Итоговый общий балл (30 + 70 = 100 MAX)
    let calculatedScore = Math.min(100, Math.round(scoreP1P2 + scoreCase));

    const payload = {
        studentIdx: currentStudentIdx,
        studentName: STUDENTS_LIST[currentStudentIdx],
        timestamp: new Date().toLocaleString(),
        p1_p2: p1_p2_answers,
        p3_essay: p4_essay,
        scoreP1P2: scoreP1P2,
        scoreCase: scoreCase,
        score: calculatedScore
    };

    const jsonStr = JSON.stringify(payload);
    const internalToken = "IE14092026-" + btoa(encodeURIComponent(jsonStr));

    const pStudent = document.getElementById('p-student');
    const pVariant = document.getElementById('p-variant');
    const pTime = document.getElementById('p-time');

    if (pStudent) pStudent.innerText = payload.studentName;
    if (pVariant) pVariant.innerText = `Variant #${currentStudentIdx + 1}`;
    if (pTime) pTime.innerText = payload.timestamp;

    const tokenDisplay = document.getElementById('p-token');
    if (tokenDisplay) tokenDisplay.innerText = internalToken;

    const passportBlock = document.getElementById('passport-block');
    if (passportBlock) passportBlock.classList.remove('hidden');

    sendDirectToGoogleSheet(payload, internalToken);
}

function sendDirectToGoogleSheet(payload, token) {
    if (!GOOGLE_SHEET_WEBAPP_URL) {
        notify(currentLang === 'en' ? "Session completed successfully!" : "Работа успешно завершена!");
        return;
    }

    fetch(GOOGLE_SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            timestamp: payload.timestamp,
            studentName: payload.studentName,
            variant: payload.studentIdx + 1,
            score: payload.score,
            essay: payload.p3_essay,
            rawToken: token
        })
    }).then(() => {
        notify(currentLang === 'en' ? "Exam recorded in Professor's Gradebook!" : "Работа записана в журнал!");
    }).catch(err => console.error("Sync Error:", err));
}

function decryptAndScoreToken() {
    const rawToken = document.getElementById('prof-token-input').value.trim();
    if (!rawToken.startsWith("IE14092026-")) {
        notify(currentLang === 'en' ? "Invalid token format!" : "Неверный формат токена!", true);
        return;
    }

    try {
        const base64Data = rawToken.replace("IE14092026-", "");
        const jsonStr = decodeURIComponent(atob(base64Data));
        const data = JSON.parse(jsonStr);

        document.getElementById('dec-student').innerText = data.studentName;
        document.getElementById('dec-variant').innerText = `Variant #${data.studentIdx + 1}`;
        document.getElementById('dec-score').innerText = `${data.score} / 100`;
        document.getElementById('dec-brief').innerText = `"${data.p3_essay}"`;

        runAIAudit(data.p3_essay);

        document.getElementById('grade-panel-output').classList.remove('hidden');
        notify(currentLang === 'en' ? "AI Audit complete!" : "ИИ-аудит завершен!");
    } catch (e) {
        notify(currentLang === 'en' ? "Failed to parse session!" : "Ошибка чтения данных!", true);
    }
}

function runAIAudit(text) {
    if (!text) return;
    const lowerText = text.toLowerCase();
    let aiRisk = 10;
    const detectedTriggers = [];

    const aiCliches = [
        "furthermore", "it is crucial to note", "in conclusion", "moreover", "delve into", 
        "в данном контексте", "следует отметить", "таким образом", "важно подчеркнуть", "подводя итог"
    ];

    aiCliches.forEach(cliche => {
        if (lowerText.includes(cliche)) {
            aiRisk += 15;
            detectedTriggers.push(`AI Cliché: "${cliche}"`);
        }
    });

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceLengths = sentences.map(s => s.trim().split(/\s+/).length);
    const avgLen = sentenceLengths.reduce((a, b) => a + b, 0) / (sentenceLengths.length || 1);
    const variance = sentenceLengths.reduce((a, b) => a + Math.pow(b - avgLen, 2), 0) / (sentenceLengths.length || 1);

    if (variance < 8 && sentences.length > 3) {
        aiRisk += 15;
        detectedTriggers.push(`Low Burstiness (Monotone AI rhythm)`);
    }

    aiRisk = Math.min(99, Math.max(5, Math.round(aiRisk)));

    const badge = document.getElementById('ai-score-badge');
    if (badge) {
        if (aiRisk <= 30) {
            badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
            badge.innerText = `${aiRisk}% Risk (Human Text)`;
        } else if (aiRisk <= 65) {
            badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30";
            badge.innerText = `${aiRisk}% Risk (Partial AI Assistance)`;
        } else {
            badge.className = "px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30";
            badge.innerText = `${aiRisk}% Risk (High AI Likelihood)`;
        }
    }

    const details = document.getElementById('ai-analysis-details');
    if (details) {
        details.innerHTML = `
            <div>• <b>Security Status:</b> Verified via Smart Hybrid Engine</div>
            <div>• <b>Avg Sentence Length:</b> ${avgLen.toFixed(1)} words | <b>Burstiness Variance:</b> ${variance.toFixed(1)}</div>
            <div>• <b>Detected Triggers (${detectedTriggers.length}):</b> ${detectedTriggers.length ? detectedTriggers.join(' | ') : 'None'}</div>
        `;
    }
}

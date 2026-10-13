/**
 * Industrial Economics • Case Study P4 Module (Volkswagen AG Simulator)
 * Personalised Case Tasks for AlmaU SDTE 2026 Students
 */

const CASE_STUDENTS_DATA = [
    {
        name: "Кривенко Ника Витальевна",
        focusTab: "finance",
        focusTitleEn: "Scenario A: Operating Margin Restructuring under Asian Headwinds",
        focusTitleRu: "Сценарий А: Реструктуризация операционной маржи в условиях кризиса в Азии",
        presetParams: { jobs: 0, plants: 0, models: 0, bev: 35, china: -25, tariffs: 5, eco: 5, ai: 2 },
        taskDescriptionEn: "Set China Trend to -25% and Tariffs to €5B. Your goal is to achieve an Operating Margin of at least 6.0% by 2030 using Workforce Cut, Plant Closures, and AI Efficiency. Analyze the financial trade-off in your response (~100 words).",
        taskDescriptionRu: "Установите тренд Китая (China Trend) на -25% и пошлины (Tariffs) на €5B. Ваша цель — путем сокращения штата, закрытия заводов и внедрения ИИ вывести операционную маржу к 2030 году минимум на 6.0%. Проанализируйте финансовый компромисс в отчете (~100 слов).",
        targetCriteria: { minMargin: 6.0, maxConflict: 85 }
    },
    {
        name: "Қабдолда Камилла Болатқызы",
        focusTab: "social",
        focusTitleEn: "Scenario B: Labor Tension Management & Lower Saxony Stakeholders",
        focusTitleRu: "Сценарий Б: Управление социальным конфликтом и рисками профсоюза IG Metall",
        presetParams: { jobs: 45, plants: 2, models: 10, bev: 35, china: -20, tariffs: 4, eco: 5, ai: 2 },
        taskDescriptionEn: "Set Workforce Reduction to 45k and Plant Closures to 2 plants. Notice the Labour Tension Index spike! Adjust BEV Share and AI Efficiency to balance productivity without causing a full-scale strike. Explain your stakeholder strategy (~100 words).",
        taskDescriptionRu: "Установите Сокращение штата на 45 тыс. и Закрытие заводов на 2 объекта. Обратите внимание на скачок Индекса конфликта! Отрегулируйте долю BEV и эффект ИИ, чтобы сбалансировать производительность и сгладить риск забастовки. Объясните стратегию взаимодействия с акционерами (~100 слов).",
        targetCriteria: { maxConflict: 70, minMargin: 5.0 }
    },
    {
        name: "Макульбекова Жасмин",
        focusTab: "markets",
        focusTitleEn: "Scenario C: Geographic Market Rebalancing & Tariff Mitigation",
        focusTitleRu: "Сценарий В: Географическая ребалансировка рынков и нивелирование пошлин",
        presetParams: { jobs: 10, plants: 0, models: 25, bev: 40, china: -30, tariffs: 8, eco: 6, ai: 3 },
        taskDescriptionEn: "Set China Sales Trend to -30% and Tariffs to €8B. Explore how Model Lineup Reduction and BEV expansion alter regional volume distribution across Europe and the US. Summarize your supply chain reallocation strategy (~100 words).",
        taskDescriptionRu: "Установите продажу в Китае на -30% и пошлины на €8B. Исследуйте, как сокращение модельного ряда и рост доли электромобилей (BEV) меняют распределение объемов между Европой и США. Опишите стратегию перестройки цепочек поставок (~100 слов).",
        targetCriteria: { minMargin: 5.2, minBev: 45 }
    },
    {
        name: "Махсед Дәулет Махмудович",
        focusTab: "lineup",
        focusTitleEn: "Scenario D: Electrification Speedometer & Fleet CO2 Compliance",
        focusTitleRu: "Сценарий Г: Электрификация модельного ряда (BEV Speedometer) и штрафы CO₂",
        presetParams: { jobs: 15, plants: 1, models: 15, bev: 70, china: -15, tariffs: 3, eco: 8, ai: 4 },
        taskDescriptionEn: "Set BEV Share to 70% (check the gauge speedometer!) and Eco-Regulations Index to 8. Observe the reduction in CO2 penalties vs increase in Transformation Capex. Evaluate whether aggressive BEV transition stabilizes overall EBIT margin (~100 words).",
        taskDescriptionRu: "Установите долю BEV на 70% (проверьте спидометр баланса!) и Индекс эко-регулирования на 8. Оцените снижение штрафов за CO₂ в сравнении с ростом Capex. Обоснуйте, стабилизирует ли агрессивный переход на электромобили операционную маржу (~100 слов).",
        targetCriteria: { minBev: 65, minMargin: 5.5 }
    },
    {
        name: "Тян Кирилл Михайлович",
        focusTab: "capacity",
        focusTitleEn: "Scenario E: Overcapacity Resolution & Domestic Factory Rationalization",
        focusTitleRu: "Сценарий Д: Ликвидация избыточных мощностей и оптимизация заводов в ФРГ",
        presetParams: { jobs: 20, plants: 0, models: 30, bev: 30, china: -20, tariffs: 4, eco: 5, ai: 3 },
        taskDescriptionEn: "Set Plant Closures to 0 and Model Lineup Reduction to -30%. Compare the gap between Production Capacity and Actual Sales in Tab 2. Determine how many German plant closures are strictly needed to eliminate idle capacity without collapsing revenue (~100 words).",
        taskDescriptionRu: "Установите закрытие заводов на 0, а сокращение модельного ряда на -30%. Сравните разрыв между мощностями и продажами во Вкладке 2. Обоснуйте, сколько заводов в ФРГ необходимо закрыть для устранения простоя без обвала выручки (~100 слов).",
        targetCriteria: { minPlants: 1, minMargin: 5.8 }
    }
];

function renderCaseP4(studentIdx, lang = 'en') {
    const container = document.getElementById('part3-container');
    if (!container) return;

    const studentData = CASE_STUDENTS_DATA[studentIdx] || CASE_STUDENTS_DATA[0];

    const title = lang === 'en' ? studentData.focusTitleEn : studentData.focusTitleRu;
    const taskDesc = lang === 'en' ? studentData.taskDescriptionEn : studentData.taskDescriptionRu;

    container.innerHTML = `
        <div class="card p-6 border-t-4 border-indigo-500 space-y-6">
            <!-- Header Banner -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-4 gap-4">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-950/80 border border-indigo-800/50 px-3 py-1 rounded-full">
                        Industrial Economics Case Study • Part 3
                    </span>
                    <h2 class="text-xl font-bold text-white mt-2">${title}</h2>
                    <p class="text-xs text-slate-400 mt-1">
                        Candidate: <strong class="text-slate-200">${studentData.name}</strong>
                    </p>
                </div>
                <div class="bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-right">
                    <span class="text-[10px] text-slate-500 uppercase block">Target Focus Tab</span>
                    <span class="text-xs font-bold text-emerald-400 uppercase font-mono">${studentData.focusTab.toUpperCase()}</span>
                </div>
            </div>

            <!-- Task Instructions Box -->
            <div class="bg-indigo-950/20 border border-indigo-500/30 p-4 rounded-xl space-y-2">
                <h4 class="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
                    <i class="fas fa-tasks text-indigo-400"></i> Individual Assignment Directives:
                </h4>
                <p class="text-xs text-slate-200 leading-relaxed font-sans">${taskDesc}</p>
            </div>

            <!-- Embedded Simulator Frame -->
            <div class="bg-slate-950 p-2 rounded-2xl border border-slate-800 shadow-2xl">
                <iframe id="vw-simulator-iframe" src="vw_simulator.html" class="w-full h-[780px] rounded-xl border-0"></iframe>
            </div>

            <!-- Student Analysis Input Box -->
            <div class="space-y-3 pt-2">
                <label class="block text-xs uppercase font-bold text-slate-300 tracking-wider flex justify-between items-center">
                    <span><i class="fas fa-pen-alt mr-1.5 text-indigo-400"></i> Strategic Executive Memo (~100–150 words)</span>
                    <span class="text-[10px] text-slate-500 font-normal">Auto-audited for economic reasoning & parameters</span>
                </label>
                <textarea id="case-p4-essay" rows="5" 
                    class="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-100 focus:border-indigo-500 outline-none transition custom-scrollbar font-sans leading-relaxed"
                    placeholder="${lang === 'en' ? 'Formulate your strategic executive summary based on the simulator outcomes...' : 'Сформулируйте ваше стратегическое резюме на основе результатов работы симулятора...'}"></textarea>
            </div>
        </div>
    `;

    // Inject preset params to iframe after loading
    const iframe = document.getElementById('vw-simulator-iframe');
    if (iframe) {
        iframe.onload = () => {
            try {
                if (iframe.contentWindow && iframe.contentWindow.applyPresetParams) {
                    iframe.contentWindow.applyPresetParams(studentData.presetParams, studentData.focusTab);
                }
            } catch (e) {
                console.log("Iframe preset initialization:", e);
            }
        };
    }
}

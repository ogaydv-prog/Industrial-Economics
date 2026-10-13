/* ==========================================
   MIDTERM CONTROL 1 • FULL QUESTION BANK
   AlmaU SDTE 2026 • Industrial Economics
   Fully Checked, Balanced & Interactive
   ========================================== */

const STUDENTS_LIST = [
    "Кривенко Ника Витальевна",
    "Қабдолда Камилла Болатқызы",
    "Макульбекова Жасмин",
    "Махсед Дәулет Махмудович",
    "Тян Кирилл Михайлович"
];

// Глобальный объект для хранения выбранных ответов (защита от сброса при смене языка)
let userAnswers = {};

// ПУЛ 1: ВВЕДЕНИЕ, ПРОИЗВОДСТВО И ЭВОЛЮЦИЯ ТЕОРИИ (14 ВОПРОСОВ)
const PART1_POOL = [
    {
        q_en: "Industrial Economics (Economics of Industrial Markets) is primarily defined as the study of?",
        q_ru: "Индустриальная экономика (Economics of Industrial Markets) прежде всего изучает?",
        opts_en: [
            "A) Methods of accounting and financial reporting in private firms",
            "B) Features of organization, economic consequences of market functioning, and behavioral strategies of producers",
            "C) Macroeconomic indicators including national inflation and currency depreciation",
            "D) Public administration and taxation rules for small businesses",
            "E) Methods for liquidating non-profitable state enterprises"
        ],
        opts_ru: [
            "A) Методы бухгалтерского учета и финансовой отчетности частных фирм",
            "B) Особенности организации, экономические последствия функционирования рынков и стратегии производителей",
            "C) Макроэкономические показатели, включая инфляцию и девальвацию валюты",
            "D) Государственное управление и правила налогообложения малого бизнеса",
            "E) Методы ликвидации убыточных государственных предприятий"
        ],
        ans: "B"
    },
    {
        q_en: "In industrial economics, how is the production process defined?",
        q_ru: "Как определяется процесс производства в индустриальной экономике?",
        opts_en: [
            "A) A set of activities aimed at creating value by transforming resources (inputs) into final products (outputs)",
            "B) Solely mechanical operations of factory machines and equipment",
            "C) The transportation and logistics of raw materials between warehouses",
            "D) Marketing research conducted before launching a product",
            "E) Financial budgeting for corporate operating expenses"
        ],
        opts_ru: [
            "A) Совокупность видов деятельности по созданию ценности путем преобразования ресурсов (входов) в продукты (выходы)",
            "B) Исключительно механическая работа фабричных станков и оборудования",
            "C) Транспортировка и логистика сырья между складскими помещениями",
            "D) Маркетинговые исследования, проводимые перед запуском продукта",
            "E) Финансовое бюджетирование операционных расходов корпорации"
        ],
        ans: "A"
    },
    {
        q_en: "What are the three core functional areas in the organization of goods and services production?",
        q_ru: "Каковы три основные функциональные сферы при организации производства товаров и услуг?",
        opts_en: [
            "A) Procurement, Logistics, Customer Service",
            "B) Research & Development, Public Relations, Legal Support",
            "C) Marketing, Production/Operations, Finance/Accounting",
            "D) Human Resources, Quality Control, Environmental Auditing",
            "E) Strategic Management, IT Infrastructure, Merchandising"
        ],
        opts_ru: [
            "A) Закупки, логистика, клиентское обслуживание",
            "B) НИОКР (R&D), связки с общественностью (PR), юридическое сопровождение",
            "C) Маркетинг, производство/операции, финансы/учет",
            "D) Кадровый учет (HR), контроль качества, экологический аудит",
            "E) Стратегический менеджмент, IT-инфраструктура, мерчандайзинг"
        ],
        ans: "C"
    },
    {
        q_en: "Which long-run trend characterized the industrial share of GDP in advanced economies (USA, UK) after the mid-20th century?",
        q_ru: "Какая долгосрочная тенденция характеризовала долю промышленности в ВВП развитых стран (США, Великобритания) во второй половине XX века?",
        opts_en: [
            "A) Rapid growth to over 60% of GDP",
            "B) Complete stabilization at a constant 50% of GDP",
            "C) Peak at ~35-40% in the 1950s followed by a decline as services expanded",
            "D) Total decline to 0% due to full outsourcing",
            "E) Immediate transition to agrarian-dominated production"
        ],
        opts_ru: [
            "A) Быстрый рост до уровня более 60% ВВП",
            "B) Полная стабилизация на постоянном уровне 50% ВВП",
            "C) Пик на уровне ~35-40% в 1950-х с последующим снижением из-за роста сферы услуг",
            "D) Полное падение до 0% из-за тотального аутсорсинга",
            "E) Мгновенный переход к аграрному типу производства"
        ],
        ans: "C"
    },
    {
        q_en: "Which major nation maintains a high industrial share (~30% of GDP) due to reliance on energy and heavy commodities?",
        q_ru: "Какая крупная страна сохраняет высокую долю промышленности в ВВП (~30%) благодаря сырьевому и энергетическому сектору?",
        opts_en: [
            "A) United Kingdom",
            "B) United States",
            "C) France",
            "D) Russia",
            "E) Japan"
        ],
        opts_ru: [
            "A) Великобритания",
            "B) Соединенные Штаты Америки",
            "C) Франция",
            "D) Россия",
            "E) Япония"
        ],
        ans: "D"
    },
    {
        q_en: "The first Industrial Revolution (Great Britain, ~1760) is fundamentally characterized by?",
        q_ru: "Первая промышленная революция (Великобритания, ~1760) фундаментально характеризуется?",
        opts_en: [
            "A) Transition from hand production to machines and rise of the mechanized factory system",
            "B) Widespread implementation of Big Data analytics and automation",
            "C) Development of global e-commerce and internet platforms",
            "D) Complete reliance on nuclear and solar power sources",
            "E) Dominance of service-oriented multinational corporations"
        ],
        opts_ru: [
            "A) Переходом от ручного труда к машинам и становлением фабричной системы",
            "B) Широким внедрением аналитики больших данных (Big Data) и автоматизации",
            "C) Развитием глобальной интернет-торговли и цифровых платформ",
            "D) Полным переходом на атомную и солнечную энергетику",
            "E) Доминированием транснациональных сервисных корпораций"
        ],
        ans: "A"
    },
    {
        q_en: "Early concepts focused on production cost reduction (1776-1880) included Labor Specialization developed by?",
        q_ru: "Ранние концепции снижения издержек (1776-1880) включали разделение труда (Labor Specialization), разработанное?",
        opts_en: [
            "A) Henry Ford and Walter Shewhart",
            "B) Frederick Taylor and Frank Gilbreth",
            "C) Adam Smith and Charles Babbage",
            "D) Agner Erlang and Joseph Juran",
            "E) Eli Whitney and W. Edwards Deming"
        ],
        opts_ru: [
            "A) Генри Фордом и Уолтером Шухартом",
            "B) Фредериком Тейлором и Фрэнком Гилбретом",
            "C) Адамом Смитом и Чарльзом Бэббиджем",
            "D) Агнером Эрлангом и Джозефом Джураном",
            "E) Эли Уитни и Эдвардсом Демингом"
        ],
        ans: "C"
    },
    {
        q_en: "Which production tools were introduced during the Scientific Management Era (1880-1910)?",
        q_ru: "Какие инструменты управления производством появились в Эру научного менеджмента (1880-1910)?",
        opts_en: [
            "A) Internet-based ERP systems and ISO standards",
            "B) Gantt Charts, Motion and Time Studies (Gilbreth), and Process Analysis (Taylor)",
            "C) Material Requirements Planning (MRP) and Linear Programming",
            "D) Assembly lines and statistical quality sampling",
            "E) Crowdfunding and sharing economy platforms"
        ],
        opts_ru: [
            "A) Облачные ERP-системы и стандарты ISO",
            "B) Диаграммы Гантта, исследование движений/времени (Гилбрет) и анализ процессов (Тейлор)",
            "C) Система планирования потребностей в материалах (MRP) и линейное программирование",
            "D) Поточные сборочные конвейеры и статистический контроль качества",
            "E) Краудфандинг и платформы шеринговой экономики"
        ],
        ans: "B"
    },
    {
        q_en: "The Mass Production Era (1910-1980) is primarily recognized for the innovation of?",
        q_ru: "Эра массового производства (1910-1980) в первую очередь известна внедрением?",
        opts_en: [
            "A) Customized assembly to order",
            "B) Moving Flow Assembly Line (Ford/Sorensen)",
            "C) Decentralized blockchain transactions",
            "D) Individual handicraft tailoring",
            "E) Full elimination of inventory holding"
        ],
        opts_ru: [
            "A) Индивидуальной сборки под заказ",
            "B) Поточного сборочного конвейера (Форд / Соренсен)",
            "C) Децентрализованных блокчейн-транзакций",
            "D) Индивидуального кустарного пошива",
            "E) Полного отказа от производственных запасов"
        ],
        ans: "B"
    },
    {
        q_en: "The Era of Mass Customization (1995-2015) was characterized by which combination of factors?",
        q_ru: "Эра массовой кастомизации (1995-2015) характеризовалась каким сочетанием факторов?",
        opts_en: [
            "A) Manual labor, localized markets, and lack of standards",
            "B) Strict government price controls and state ownership",
            "C) Steam engines, water power, and heavy mechanization",
            "D) Globalization, Internet/e-commerce, ERP systems, and Supply Chain Management",
            "E) Total rejection of environmental sustainability standards"
        ],
        opts_ru: [
            "A) Ручной труд, локальные рынки и отсутствие стандартизации",
            "B) Строгий государственный контроль цен и государственная собственность",
            "C) Паровые двигатели, гидравлическая энергия и тяжелая механизация",
            "D) Глобализация, интернет-торговля, ERP-системы и управление цепями поставок",
            "E) Полный отказ от стандартов экологической устойчивости"
        ],
        ans: "D"
    },
    {
        q_en: "What defines a 'Prosumer' in modern economics?",
        q_ru: "Кто такой «Просьюмер» (Prosumer) в современной экономике?",
        opts_en: [
            "A) An individual who both consumes and produces value for self-consumption or others",
            "B) A professional buyer who purchases wholesale raw materials for factories",
            "C) A government auditor who evaluates product safety standards",
            "D) A consumer who exclusively buys luxury imported items",
            "E) A manufacturer who sells products without any marketing"
        ],
        opts_ru: [
            "A) Индивид, который одновременно потребляет и производит ценность для себя или других",
            "B) Профессиональный закупщик, приобретающий оптовое сырье для заводов",
            "C) Государственный инспектор, проверяющий безопасность продукции",
            "D) Потребитель, покупающий исключительно элитные импортные товары",
            "E) Производитель, продающий продукцию без маркетингового продвижения"
        ],
        ans: "A"
    },
    {
        q_en: "Which scenario represents an example of prosumerism?",
        q_ru: "Какой из сценариев представляет собой пример просьюмеризма?",
        opts_en: [
            "A) A customer buying a ticket at a traditional cinema box office",
            "B) A factory worker assembling vehicles on a conveyor line",
            "C) A household generating solar energy and feeding surplus back into the grid",
            "D) An airline purchasing aviation fuel from a refinery",
            "E) A firm paying annual licensing fees to city authorities"
        ],
        opts_ru: [
            "A) Покупатель, приобретающий билет в традиционной кассе кинотеатра",
            "B) Рабочий завода, собирающий автомобили на конвейерной линии",
            "C) Домохозяйство, генерирующее солнечную энергию и отдающее излишки в сеть",
            "D) Авиакомпания, закупающая авиационное топливо у НПЗ",
            "E) Фирма, оплачивающая ежегодный лицензионный сбор городским властям"
        ],
        ans: "C"
    },
    {
        q_en: "Under the principles of McDonaldization, what does 'Calculability' emphasize?",
        q_ru: "В концепции «Макдональдизации» что подчеркивает принцип «Просчитываемости» (Calculability)?",
        opts_en: [
            "A) Exclusive focus on unique individual craftsmanship",
            "B) Quantitative indicators where speed and volume equal efficiency ('more = better')",
            "C) Complex mathematical risk evaluation for long-term investments",
            "D) Allowing employees to set flexible working schedules",
            "E) Eliminating discounts and special promotional pricing"
        ],
        opts_ru: [
            "A) Исключительную ориентацию на уникальное индивидуальное мастерство",
            "B) Количественные показатели, где скорость и объем приравниваются к эффективности («больше = лучше»)",
            "C) Сложную математическую оценку рисков долгосрочных инвестиций",
            "D) Предоставление сотрудникам возможности устанавливать гибкий график",
            "E) Полный отказ от скидок и специальных рекламных акций"
        ],
        ans: "B"
    },
    {
        q_en: "How is 'Control' primarily enforced in McDonaldized production systems?",
        q_ru: "Как достигается «Контроль» (Control) в производственных системах Макдональдизации?",
        opts_en: [
            "A) By replacing human technologies with automated, standardized processes and strict instructions",
            "B) By delegating strategic decision-making to shop-floor workers",
            "C) By hiring external creative consultants for every production step",
            "D) By eliminating standardized operational manuals",
            "E) By establishing flat non-hierarchical organizational structures"
        ],
        opts_ru: [
            "A) Заменой человеческого фактора автоматизированными процессами и четкими инструкциями",
            "B) Делегированием стратегических решений рабочим сборочного цеха",
            "C) Наймом внешних креативных консультантов для каждого шага",
            "D) Полной отменой стандартизированных операционных руководств",
            "E) Созданием плоских неиерархических организационных структур"
        ],
        ans: "A"
    }
];

// ПУЛ 2: РЫНОЧНЫЕ СТРУКТУРЫ, ЭКОНОМИКА ОТРАСЛЕЙ И M&A (15 ВОПРОСОВ)
const PART2_POOL = [
    {
        q_en: "Which market structure is typically observed in electricity distribution, rail infrastructure, and mail delivery?",
        q_ru: "Какая рыночная структура характерна для распределения электроэнергии, ж/д инфраструктуры и почты?",
        opts_en: [
            "A) Perfect Competition",
            "B) Monopolistic Competition",
            "C) Natural or Local Monopolies",
            "D) Pure Oligopoly",
            "E) Monopsony"
        ],
        opts_ru: [
            "A) Совершенная конкуренция",
            "B) Монополистическая конкуренция",
            "C) Естественные или локальные монополии",
            "D) Чистая олигополия",
            "E) Монопсония"
        ],
        ans: "C"
    },
    {
        q_en: "Telecommunications, Automotive, Semiconductors, and Big Tech platforms operate primarily under which market structure?",
        q_ru: "Телекоммуникации, автомобилестроение, полупроводники и Big Tech работают преимущественно в условиях?",
        opts_en: [
            "A) Monopoly",
            "B) Oligopoly",
            "C) Monopolistic Competition",
            "D) Perfect Competition",
            "E) Monopsony"
        ],
        opts_ru: [
            "A) Монополии",
            "B) Олигополии",
            "C) Монополистической конкуренции",
            "D) Совершенной конкуренции",
            "E) Монопсонии"
        ],
        ans: "B"
    },
    {
        q_en: "Retail supermarkets, restaurants, apparel brands, and professional services are classic examples of?",
        q_ru: "Розничные супермаркеты, рестораны, бренды одежды и профессиональные услуги являются примерами?",
        opts_en: [
            "A) Monopolistic Competition (many firms with differentiated products)",
            "B) Natural Monopoly",
            "C) Tight Duopoly",
            "D) Monopsony",
            "E) Perfect Competition with standardized commodities"
        ],
        opts_ru: [
            "A) Монополистической конкуренции (много фирм с дифференцированным продуктом)",
            "B) Естественной монополии",
            "C) Жесткой дуополии",
            "D) Монопсонии",
            "E) Совершенной конкуренции со стандартизированным товаром"
        ],
        ans: "A"
    },
    {
        q_en: "In commercial airline economics, what represents one of the largest single operational expense categories for a long-haul flight?",
        q_ru: "В экономике дальнемагистральных авиаперевозок что является одной из крупнейших статей операционных расходов?",
        opts_en: [
            "A) In-flight catering and entertainment",
            "B) Technical Aircraft Maintenance and Base Operations Service",
            "C) Fuel Costs and Labor Costs",
            "D) Passenger luggage tag printing",
            "E) Airport Duty-Free concession fees"
        ],
        opts_ru: [
            "A) Бортовое питание и развлечения",
            "B) Техническое обслуживание самолетов (Aircraft Maintenance) и базовый сервис",
            "C) Затраты на топливо (Fuel Costs) и оплату труда (Labor Costs)",
            "D) Печать багажных бирок для пассажиров",
            "E) Концессионные сборы магазинов Duty-Free"
        ],
        ans: "C"
    },
    {
        q_en: "Comparing revenue streams per long-haul flight, which category generates the highest yield relative to cabin floor space?",
        q_ru: "Сравнивая источники доходов за рейс, какой сегмент обеспечивает наибольшую доходность на единицу площади салона?",
        opts_en: [
            "A) Economy class passengers",
            "B) Commercial cargo and mail in belly holds",
            "C) Premium Business and First class passengers",
            "D) Standby charter passengers",
            "E) Onboard duty-free buyers"
        ],
        opts_ru: [
            "A) Пассажиры эконом-класса",
            "B) Коммерческий груз и почта в багажном отсеке",
            "C) Пассажиры бизнес- и первого классов",
            "D) Пассажиры чартерных резервов",
            "E) Покупатели товаров duty-free на борту"
        ],
        ans: "C"
    },
    {
        q_en: "In M&A transactions, what is cited as the most common financial reason for transaction failure?",
        q_ru: "Что называется самой распространенной финансовой причиной провала сделок слияний и поглощений (M&A)?",
        opts_en: [
            "A) Overpaying for the target company",
            "B) Excessive speed during negotiation",
            "C) Using equity instead of debt financing",
            "D) Paying zero premium over share price",
            "E) Underestimating target brand awareness"
        ],
        opts_ru: [
            "A) Переплата за целевую компанию (Overpaying)",
            "B) Чрезмерная скорость проведения переговоров",
            "C) Использование акций вместо долгового финансирования",
            "D) Отсутствие премии к рыночной цене акций",
            "E) Недооценка узнаваемости бренда целевой компании"
        ],
        ans: "A"
    },
    {
        q_en: "Why is overestimating synergies particularly dangerous in M&A deals?",
        q_ru: "Почему завышенная оценка синергии (Overestimating synergies) особо опасна при сделках M&A?",
        opts_en: [
            "A) It leads to instant legal sanctions by tax authorities",
            "B) It serves as the first step toward overpaying, as cost/revenue synergies are hard to realize",
            "C) It forces the acquiring firm to change its corporate logo",
            "D) It automatically lowers employee salary expectations",
            "E) It causes immediate cancellation of all supplier contracts"
        ],
        opts_ru: [
            "A) Это ведет к немедленным правовым санкциям со стороны налоговых органов",
            "B) Это первый шаг к переплате, так как синергию издержек и доходов сложно реализовать на практике",
            "C) Это вынуждает покупателя сменить свой корпоративный логотип",
            "D) Это автоматически снижает требования сотрудников по зарплате",
            "E) Это вызывает мгновенную отмену всех контрактов с поставщиками"
        ],
        ans: "B"
    },
    {
        q_en: "What agency problem arises during Due Diligence in M&A transactions?",
        q_ru: "Какая агентская проблема возникает во время проведения проверки (Due Diligence) при M&A?",
        opts_en: [
            "A) Acquirers refuse to pay fees to external auditing agencies",
            "B) Target management is incentivized to hide or explain away uncomplimentary information",
            "C) Government agencies refuse to issue registration licenses",
            "D) Shareholders demand higher dividend distributions immediately",
            "E) Commercial banks refuse to perform wire transfers"
        ],
        opts_ru: [
            "A) Покупатели отказываются платить аудиторским агентствам",
            "B) Менеджмент целевой компании склонен скрывать или искажать негативную информацию",
            "C) Государственные органы отказывают в выдаче регистрационных лицензий",
            "D) Акционеры требуют немедленной выплаты повышенных дивидендов",
            "E) Коммерческие банки отказываются осуществлять денежные переводы"
        ],
        ans: "B"
    },
    {
        q_en: "In M&A studies, what does 'Empire Building' by corporate managers refer to?",
        q_ru: "Что означает понятие «Строительство империи» (Empire Building) со стороны менеджеров при M&A?",
        opts_en: [
            "A) Pursuing acquisitions out of hubris and desire for personal power rather than economic value",
            "B) Constructing physical manufacturing plants in offshore locations",
            "C) Building vertically integrated supply networks to reduce transport costs",
            "D) Expanding into state-owned infrastructure sectors",
            "E) Developing monopolistic positions through price wars"
        ],
        opts_ru: [
            "A) Проведение поглощений из-за гордыни и стремления к личной власти, а не ради экономической выгоды",
            "B) Строительство реальных производственных заводов в оффшорных зонах",
            "C) Создание вертикально интегрированных сетей для снижения транспортных расходов",
            "D) Экспансия в государственные инфраструктурные секторы",
            "E) Формирование монопольного положения путем ценовых войн"
        ],
        ans: "A"
    },
    {
        q_en: "Underestimating 'Cultural Fit' during corporate integration frequently leads to?",
        q_ru: "Недооценка «Культурного соответствия» (Cultural Fit) при интеграции компаний приводит к?",
        opts_en: [
            "A) Massive destruction of firm value due to inability to bridge organizational gaps",
            "B) Automatic increase in labor productivity across all departments",
            "C) Exemption from corporate income tax duties",
            "D) Immediate convergence of IT infrastructure software",
            "E) Rapid growth in consumer loyalty"
        ],
        opts_ru: [
            "A) Масштабному разрушению стоимости компании из-за неспособности преодолеть культурный барьер",
            "B) Автоматическому росту производительности труда во всех отделах",
            "C) Освобождению компании от уплаты налога на прибыль",
            "D) Мгновенной интеграции программного обеспечения IT-инфраструктуры",
            "E) Быстрому росту лояльности потребителей"
        ],
        ans: "A"
    },
    {
        q_en: "Which triad of strategic elements summarizes modern firm behavior in industrial organization?",
        q_ru: "Какая триада элементов характеризует поведение современных фирм в индустриальной экономике?",
        opts_en: [
            "A) Manual production, local isolation, and fixed pricing",
            "B) Cost reduction, Big Data analytics, and Global scaling",
            "C) State subsidies, craft customization, and trade protectionism",
            "D) Price-fixing cartels, labor expansion, and paper record-keeping",
            "E) Debt elimination, zero marketing, and asset divestment"
        ],
        opts_ru: [
            "A) Ручное производство, локальная изоляция и фиксированные цены",
            "B) Снижение затрат, аналитика больших данных (Big Data) и глобальное масштабирование",
            "C) Государственные субсидии, кустарная кастомизация и протекционизм",
            "D) Ценовые картели, расширение штата и бумажный документооборот",
            "E) Полное погашение долгов, отсутствие маркетинга и распродажа активов"
        ],
        ans: "B"
    },
    {
        q_en: "Which strategy is considered a valid and sound strategic motive for an M&A transaction?",
        q_ru: "Какая стратегия считается обоснованным и качественным мотивом для сделки M&A?",
        opts_en: [
            "A) 'Becoming a visionary icon in the industry'",
            "B) 'Achieving sustainable market share expansion and scale economies'",
            "C) 'Maximizing managerial executive compensation'",
            "D) 'Disguising declining revenue in core business lines'",
            "E) 'Satisfying executive hubris without due diligence'"
        ],
        opts_ru: [
            "A) «Стать великим пророком и иконой в индустрии»",
            "B) «Завоевание устойчивой доли рынка и получение экономии на масштабе»",
            "C) «Максимизация личного вознаграждения топ-менеджеров»",
            "D) «Маскировка падающих доходов в основном бизнесе»",
            "E) «Удовлетворение амбиций руководства без проведения проверки»"
        ],
        ans: "B"
    }
];

// ГРАФИЧЕСКИЕ СЦЕНАРИИ (BAR CHARTS) ДЛЯ ВОПРОСА 2.6
const GRAPH_SCENARIOS = [
    {
        type: "eu_auto_jobs",
        prompt_en: "Analyze the chart showing Automotive Sector impact in the EU. According to ACEA industry data, what is the exact economic contribution in terms of jobs and GDP share?",
        prompt_ru: "Изучите диаграмму вклада автопрома в экономику ЕС. Согласно данным ACEA, каков точный вклад сектора по рабочим местам и доле в ВВП?",
        opts_en: [
            "A) 5.0 Million jobs and 3.0% of EU GDP",
            "B) 13.2 Million jobs and 7.5% of EU GDP",
            "C) 25.0 Million jobs and 15.0% of EU GDP",
            "D) 1.2 Million jobs and 0.5% of EU GDP",
            "E) 40.0 Million jobs and 30.0% of EU GDP"
        ],
        opts_ru: [
            "A) 5.0 млн рабочих мест и 3.0% ВВП ЕС",
            "B) 13.2 млн рабочих мест и 7.5% ВВП ЕС",
            "C) 25.0 млн рабочих мест и 15.0% ВВП ЕС",
            "D) 1.2 млн рабочих мест и 0.5% ВВП ЕС",
            "E) 40.0 млн рабочих мест и 30.0% ВВП ЕС"
        ],
        ans: "B",
        chartData: {
            title: "EU Automotive Contribution",
            labels: ["Jobs (Millions)", "GDP Share (%)", "Tax (€ Billions)"],
            values: [13.2, 7.5, 38.4],
            displayValues: ["13.2M", "7.5%", "€383.7B"],
            colors: ["#3b82f6", "#10b981", "#f59e0b"]
        }
    },
    {
        type: "mna_failure_rate",
        prompt_en: "Examine the chart representing M&A deal performance according to Harvard Business Review research. What percentage range of M&A deals are deemed a failure?",
        prompt_ru: "Изучите диаграмму результатов сделок M&A по данным Harvard Business Review. Какой процент сделок M&A признается неудачным?",
        opts_en: [
            "A) 10% - 25%",
            "B) 30% - 45%",
            "C) 50% - 60%",
            "D) 70% - 90%",
            "E) 95% - 100%"
        ],
        opts_ru: [
            "A) От 10% до 25%",
            "B) От 30% до 45%",
            "C) От 50% до 60%",
            "D) От 70% до 90%",
            "E) От 95% до 100%"
        ],
        ans: "D",
        chartData: {
            title: "M&A Deal Outcome Rates (HBR)",
            labels: ["Successful Deals", "Failed Deals (Range)"],
            values: [20, 80],
            displayValues: ["10%-30%", "70%-90%"],
            colors: ["#10b981", "#ef4444"]
        }
    },
    {
        type: "mna_success_factors",
        prompt_en: "Refer to the chart detailing M&A Success Factors (Accenture & EIU Survey). What factor ranks highest in contributing to deal success?",
        prompt_ru: "Обратитесь к диаграмме факторов успеха M&A (опрос Accenture & EIU). Какой фактор занимает первое место по важности?",
        opts_en: [
            "A) Achieving optimal price (20%)",
            "B) Conducting due diligence (42%)",
            "C) Planning and executing integration process (48%)",
            "D) Negotiation process (10%)",
            "E) Early M&A strategy (32%)"
        ],
        opts_ru: [
            "A) Достижение оптимальной цены (20%)",
            "B) Проведение Due Diligence (42%)",
            "C) Планирование и проведение интеграции (48%)",
            "D) Процесс переговоров (10%)",
            "E) Ранняя разработка стратегии (32%)"
        ],
        ans: "C",
        chartData: {
            title: "Top M&A Success Factors (%)",
            labels: ["Integration", "Due Diligence", "Cultural Fit", "Strategy"],
            values: [48, 42, 38, 32],
            displayValues: ["48%", "42%", "38%", "32%"],
            colors: ["#6366f1", "#3b82f6", "#06b6d4", "#10b981"]
        }
    },
    {
        type: "industrial_gdp_shares",
        prompt_en: "Analyze the chart comparing Industry Share of GDP across major economies. Which structural pattern correctly describes late industrializing emerging markets?",
        prompt_ru: "Изучите диаграмму доли промышленности в ВВП. Какая структура верно характеризует страны с поздней индустриализацией?",
        opts_en: [
            "A) Industrial share continuously below 10%",
            "B) High industrial share (~30%+) due to export-led manufacturing growth",
            "C) Zero service sector presence",
            "D) Complete reliance on agricultural exports",
            "E) Equal 33% split between all economic sectors"
        ],
        opts_ru: [
            "A) Доля промышленности постоянно ниже 10%",
            "B) Высокая доля промышленности (~30%+) благодаря экспортному росту",
            "C) Полное отсутствие сектора услуг",
            "D) Полная зависимость от экспорта сельхозпродукции",
            "E) Равное деление по 33% между всеми секторами"
        ],
        ans: "B",
        chartData: {
            title: "Industry % of GDP by Country Type",
            labels: ["US/UK (Advanced)", "Germany/Japan", "China/Vietnam"],
            values: [18, 25, 32],
            displayValues: ["~15-20%", "~25%", "~30%+#"],
            colors: ["#94a3b8", "#3b82f6", "#10b981"]
        }
    },
    {
        type: "market_structure_counts",
        prompt_en: "Based on market structure distributions across major economies, which structure accounts for the vast majority of sectors in modern industrialized nations?",
        prompt_ru: "На основе распределения рыночных структур, какая структура охватывает большинство секторов в развитых странах?",
        opts_en: [
            "A) Pure Monopoly",
            "B) Oligopoly",
            "C) Perfect Competition",
            "D) Monopsony",
            "E) Command Market"
        ],
        opts_ru: [
            "A) Чистая монополия",
            "B) Олигополия",
            "C) Совершенная конкуренция",
            "D) Монопсония",
            "E) Командный рынок"
        ],
        ans: "B",
        chartData: {
            title: "Sectors by Market Structure (Out of 12)",
            labels: ["Monopoly", "Oligopoly", "Monop. Comp."],
            values: [1.5, 8.5, 2.0],
            displayValues: ["1-2", "8-9", "2"],
            colors: ["#f59e0b", "#3b82f6", "#10b981"]
        }
    }
];

// Выборка индивидуального набора вопросов для каждого студента
function getStudentQuestions(studentIdx) {
    const pseudoRandom = (seed) => {
        let x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    };

    const getSelection = (pool, count, offset) => {
        let result = [];
        let usedIndexes = new Set();
        let i = 0;
        while (result.length < count) {
            let idx = Math.floor(pseudoRandom(studentIdx * 17 + offset + i * 31) * pool.length);
            if (!usedIndexes.has(idx)) {
                usedIndexes.add(idx);
                result.push(pool[idx]);
            }
            i++;
        }
        return result;
    };

    return {
        part1: getSelection(PART1_POOL, 4, 101),
        part2: getSelection(PART2_POOL, 5, 202)
    };
}

// Отслеживание и сохранение ответов пользователя во избежание сброса при переключении языка
document.addEventListener('change', (e) => {
    if (e.target.matches('input[type="radio"]')) {
        userAnswers[e.target.name] = e.target.value;
    }
});

function renderQuestionsP1P2(studentIdx, lang) {
    studentIdx = (studentIdx + 1) % STUDENTS_LIST.length;
    const selected = getStudentQuestions(studentIdx);

    // РЕНДЕРИНГ ЧАСТИ 1 (4 ВОПРОСА)
    const container1 = document.getElementById('part1-container');
    if (container1) {
        container1.innerHTML = '';
        selected.part1.forEach((qObj, i) => {
            const qText = (lang === 'en' ? qObj.q_en : qObj.q_ru).replace(/^\d+\.\s*/, '');
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            const qName = `p1-q${i+1}`;
            const savedVal = userAnswers[qName] || '';

            let optionsHTML = '';
            for (let oIdx = 0; oIdx < opts.length; oIdx++) {
                const optText = opts[oIdx];
                const letter = String.fromCharCode(65 + oIdx);
                const isChecked = savedVal === letter ? 'checked' : '';
                optionsHTML += `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                        <input type="radio" name="${qName}" value="${letter}" data-ans="${qObj.ans}" ${isChecked} class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>
                `;
            }

            container1.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 1.${i + 1}</span>
                    <h4 class="text-base md:text-lg font-bold text-slate-100 leading-snug">${qText}</h4>
                    <div class="space-y-2.5 pt-1">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        });
    }

    // РЕНДЕРИНГ ЧАСТИ 2 (5 ВОПРОСОВ + 1 ВОПРОС С ДИАГРАММОЙ)
    const container2 = document.getElementById('part2-container');
    if (container2) {
        container2.innerHTML = '';
        selected.part2.forEach((qObj, i) => {
            const qText = (lang === 'en' ? qObj.q_en : qObj.q_ru).replace(/^\d+\.\s*/, '');
            const opts = lang === 'en' ? qObj.opts_en : qObj.opts_ru;
            const qName = `p2-q${i+1}`;
            const savedVal = userAnswers[qName] || '';

            let optionsHTML = '';
            for (let oIdx = 0; oIdx < opts.length; oIdx++) {
                const optText = opts[oIdx];
                const letter = String.fromCharCode(65 + oIdx);
                const isChecked = savedVal === letter ? 'checked' : '';
                optionsHTML += `
                    <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                        <input type="radio" name="${qName}" value="${letter}" data-ans="${qObj.ans}" ${isChecked} class="mt-1 accent-indigo-500 w-4 h-4">
                        <span>${optText}</span>
                    </label>
                `;
            }

            container2.innerHTML += `
                <div class="card p-6 space-y-4 border-t-2 border-slate-700 hover:border-indigo-500">
                    <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 2.${i + 1}</span>
                    <h4 class="text-base md:text-lg font-bold text-slate-100 leading-snug">${qText}</h4>
                    <div class="space-y-2.5 pt-1">
                        ${optionsHTML}
                    </div>
                </div>
            `;
        });

        // ВОПРОС 2.6 С ДИАГРАММОЙ (BAR CHART)
        const sc = GRAPH_SCENARIOS[studentIdx % GRAPH_SCENARIOS.length];
        const prompt = lang === 'en' ? sc.prompt_en : sc.prompt_ru;
        const opts = lang === 'en' ? sc.opts_en : sc.opts_ru;
        const qName = `p2-q6`;
        const savedVal = userAnswers[qName] || '';

        let graphOptionsHTML = '';
        for (let oIdx = 0; oIdx < opts.length; oIdx++) {
            const optText = opts[oIdx];
            const letter = String.fromCharCode(65 + oIdx);
            const isChecked = savedVal === letter ? 'checked' : '';
            graphOptionsHTML += `
                <label class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:bg-slate-800/80 cursor-pointer transition text-sm md:text-base text-slate-200">
                    <input type="radio" name="${qName}" value="${letter}" data-ans="${sc.ans}" ${isChecked} class="mt-1 accent-indigo-500 w-4 h-4">
                    <span>${optText}</span>
                </label>
            `;
        }

        container2.innerHTML += `
            <div class="card p-6 space-y-4 border-t-2 border-indigo-500">
                <span class="text-xs bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20 uppercase font-black tracking-widest inline-block">Question 2.6</span>
                <p class="text-base font-bold text-slate-100 leading-snug">${prompt}</p>

                <div class="space-y-4 pt-1">
                    <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center shadow-inner">
                        <canvas id="marketCanvas" width="300" height="180"></canvas>
                    </div>
                    <div class="space-y-2.5">
                        ${graphOptionsHTML}
                    </div>
                </div>
            </div>
        `;

        setTimeout(() => drawBarChart(sc.chartData), 150);
    }
}

// ОТРИСОВКА ДИАГРАММ (BAR CHARTS)
function drawBarChart(chartData) {
    const cvs = document.getElementById('marketCanvas');
    if (!cvs || !chartData) return;
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0, 0, cvs.width, cvs.height);

    const padding = 35;
    const chartWidth = cvs.width - padding * 2;
    const chartHeight = cvs.height - padding * 2;

    // Заголовок
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(chartData.title, cvs.width / 2, 18);

    const maxVal = Math.max(...chartData.values) * 1.25 || 1;
    const barWidth = Math.min(35, (chartWidth / chartData.labels.length) - 15);

    chartData.labels.forEach((label, i) => {
        const val = chartData.values[i];
        const barH = (val / maxVal) * chartHeight;
        const x = padding + i * (chartWidth / chartData.labels.length) + 10;
        const y = cvs.height - padding - barH;

        // Столбец
        ctx.fillStyle = chartData.colors[i % chartData.colors.length];
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
        } else {
            ctx.rect(x, y, barWidth, barH);
        }
        ctx.fill();

        // Значение над столбцом
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(chartData.displayValues[i], x + barWidth / 2, y - 5);

        // Подпись снизу
        ctx.fillStyle = '#94a3b8';
        ctx.font = '9px Inter, sans-serif';
        const shortLabel = label.length > 10 ? label.substring(0, 9) + '..' : label;
        ctx.fillText(shortLabel, x + barWidth / 2, cvs.height - 12);
    });

    // Осевая линия
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, cvs.height - padding);
    ctx.lineTo(cvs.width - padding, cvs.height - padding);
    ctx.stroke();
}

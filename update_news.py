import os
from datetime import datetime

def generate_news_page():
    today_str = datetime.now().strftime("%B %d, %Y")
    
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Industrial Economics | Global Industrial News & Analysis</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body {{ font-family: 'Inter', sans-serif; background-color: #fcfbf9; color: #111111; }}
        .serif {{ font-family: 'Merriweather', Georgia, serif; }}
        .brand-red {{ background-color: #e5001c; }}
        .text-brand-red {{ color: #e5001c; }}
        .border-brand-red {{ border-color: #e5001c; }}
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-red-600 selection:text-white border-t-4 border-brand-red">

    <header class="bg-white border-b border-stone-300 sticky top-0 z-40 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div class="flex items-center space-x-4">
                <a href="index.html" class="brand-red text-white font-extrabold px-3 py-1.5 text-lg sm:text-xl tracking-tighter serif shadow-sm inline-block">
                    The Industrial Economics
                </a>
                <div class="hidden md:block border-l border-stone-300 pl-4">
                    <span class="text-xs font-bold tracking-widest text-stone-500 uppercase block">Academic Intelligence Hub</span>
                    <span class="text-xs text-stone-700">AlmaU • School of Economics and Digital Technologies</span>
                </div>
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3">
                <a href="index.html" class="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-all border border-stone-300 flex items-center space-x-1.5 rounded-sm">
                    <i class="fa-solid fa-arrow-left text-brand-red"></i>
                    <span>Main Hub</span>
                </a>
                <div class="border-l border-stone-300 pl-3 ml-1">
                    <img src="https://ogaydv-prog.github.io/principles-economics/almau.jpg" alt="AlmaU Logo" class="h-9 w-auto object-contain bg-white p-0.5 border border-stone-200 rounded-sm">
                </div>
            </div>
        </div>
    </header>

    <div class="bg-stone-100 border-b border-stone-200 py-2">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-stone-600">
            <span class="font-semibold uppercase tracking-wider"><i class="fa-solid fa-rotate text-brand-red mr-1"></i> Automated Weekly Briefing ({today_str})</span>
            <span class="serif italic">Updates Every Wednesday at 06:00 ALMT</span>
        </div>
    </div>

    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="border-b-2 border-stone-900 pb-6 mb-8">
            <span class="text-xs font-extrabold text-brand-red uppercase tracking-widest block mb-1">Industrial Sector Intelligence</span>
            <h1 class="text-3xl sm:text-4xl font-black text-stone-900 serif leading-tight">
                Industrial Economics: Global Manufacturing, Supply Chains & Policy
            </h1>
            <p class="text-sm sm:text-base text-stone-600 mt-2 max-w-4xl leading-relaxed serif">
                Curated industrial economics headlines covering plant restructuring, supply chain logistics, and heavy manufacturing.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="space-y-3 border-t-2 border-stone-900 pt-4 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-brand-red uppercase tracking-widest">The Guardian</span>
                    <h3 class="text-lg font-bold text-stone-900 serif leading-snug mt-1">
                        Volkswagen CEO urges deep plant restructuring and job cuts amid fierce Chinese EV competition
                    </h3>
                    <p class="text-xs text-stone-600 leading-relaxed mt-2">
                        Factory floor pressures mount in Wolfsburg as management weighs significant workforce reductions to offset rising European production costs...
                    </p>
                </div>
                <div class="pt-4 font-sans">
                    <a href="https://www.theguardian.com/business/2026/aug/25/vw-workers-boo-boss-as-he-urges-them-to-pull-together-amid-job-cuts" target="_blank" rel="noopener noreferrer" class="text-xs text-brand-red font-bold hover:underline flex items-center space-x-1">
                        <span>Read Full Original Article →</span>
                    </a>
                </div>
            </div>

            <div class="space-y-3 border-t-2 border-stone-900 pt-4 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-brand-red uppercase tracking-widest">BBC News</span>
                    <h3 class="text-lg font-bold text-stone-900 serif leading-snug mt-1">
                        Global manufacturing and heavy industry face heavy tariff pressures and component bottlenecks
                    </h3>
                    <p class="text-xs text-stone-600 leading-relaxed mt-2">
                        Industrial producers across Europe and North America monitor shifting cross-border trade policies affecting raw materials and factory inputs...
                    </p>
                </div>
                <div class="pt-4 font-sans">
                    <a href="https://www.bbc.com/news/business" target="_blank" rel="noopener noreferrer" class="text-xs text-brand-red font-bold hover:underline flex items-center space-x-1">
                        <span>Read Full Original Article →</span>
                    </a>
                </div>
            </div>

            <div class="space-y-3 border-t-2 border-stone-900 pt-4 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold text-brand-red uppercase tracking-widest">Euronews</span>
                    <h3 class="text-lg font-bold text-stone-900 serif leading-snug mt-1">
                        Eurozone industrial manufacturing output adapts to shifting energy constraints and automation
                    </h3>
                    <p class="text-xs text-stone-600 leading-relaxed mt-2">
                        Factory managers across the euro zone recalibrate production lines and energy utilization as industrial policy metrics and automation evolve...
                    </p>
                </div>
                <div class="pt-4 font-sans">
                    <a href="https://www.euronews.com/business" target="_blank" rel="noopener noreferrer" class="text-xs text-brand-red font-bold hover:underline flex items-center space-x-1">
                        <span>Read Full Original Article →</span>
                    </a>
                </div>
            </div>
        </div>
    </main>

    <footer class="bg-stone-900 text-stone-400 py-8 border-t-4 border-brand-red mt-12 text-xs">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center space-x-3">
                <span class="brand-red text-white font-black px-2 py-1 text-sm serif">The Industrial Economics</span>
                <span>Industrial Economics News Hub • Almaty Management University</span>
            </div>
            <p class="text-stone-500 text-center md:text-right">
                Automatically updated via GitHub Actions every Wednesday at 06:00 AM Almaty Time.
            </p>
        </div>
    </footer>
</body>
</html>
"""
    
    with open("news.html", "w", encoding="utf-8") as f:
        f.write(html_content)
    print("News page successfully generated with clean article links!")

if __name__ == "__main__":
    generate_news_page()

import { translations } from './translations.js';
import { architectureData } from './data.js';

class BerserkPortal {
    constructor() {
        this.lang = 'en';
        this.mode = 'pitch'; // 'pitch' or 'deep'
        this.init();
    }

    init() {
        this.setupListeners();
        this.applyMode();
        this.render();
        this.initAnimations();
        lucide.createIcons();
    }

    setupListeners() {
        document.getElementById('lang-pt').addEventListener('click', () => this.setLanguage('pt'));
        document.getElementById('lang-en').addEventListener('click', () => this.setLanguage('en'));
        
        document.getElementById('mode-pitch').addEventListener('click', () => this.setMode('pitch'));
        document.getElementById('mode-deep').addEventListener('click', () => this.setMode('deep'));
        
        document.getElementById('close-panel').addEventListener('click', () => this.togglePanel(false));
        document.getElementById('side-panel-overlay').addEventListener('click', () => this.togglePanel(false));
    }

    setLanguage(lang) {
        this.lang = lang;
        this.render();
        this.updateLangButtons();
    }

    setMode(mode) {
        this.mode = mode;
        this.applyMode();
        this.render(); // Re-render to update drawer states
    }

    applyMode() {
        const body = document.body;
        const btnPitch = document.getElementById('mode-pitch');
        const btnDeep = document.getElementById('mode-deep');

        if (this.mode === 'pitch') {
            body.classList.add('pitch-mode');
            btnPitch.className = "px-4 md:px-6 py-2 md:py-2.5 rounded-xl transition-all font-bold text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2 bg-white text-black shadow-lg";
            btnDeep.className = "px-4 md:px-6 py-2 md:py-2.5 rounded-xl transition-all font-bold text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2 text-white/40 hover:text-white";
        } else {
            body.classList.remove('pitch-mode');
            btnDeep.className = "px-4 md:px-6 py-2 md:py-2.5 rounded-xl transition-all font-bold text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2 bg-white text-black shadow-lg";
            btnPitch.className = "px-4 md:px-6 py-2 md:py-2.5 rounded-xl transition-all font-bold text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2 text-white/40 hover:text-white";
        }
    }

    updateLangButtons() {
        const btnPt = document.getElementById('lang-pt');
        const btnEn = document.getElementById('lang-en');
        const isPt = this.lang === 'pt';
        
        btnPt.className = isPt ? "px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white text-black shadow-lg transition-all" : "px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all hover:text-white";
        btnEn.className = !isPt ? "px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white text-black shadow-lg transition-all" : "px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all hover:text-white";
    }

    render() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.lang][key]) el.innerText = translations[this.lang][key];
        });

        document.getElementById('backend-intro').innerText = architectureData.backend[this.lang].intro;
        document.getElementById('frontend-intro').innerText = architectureData.frontend[this.lang].intro;
        document.getElementById('strategy-content').innerText = architectureData.strategy[this.lang];

        this.renderDrawers('backend-drawers', architectureData.backend[this.lang].drawers);
        this.renderDrawers('frontend-drawers', architectureData.frontend[this.lang].drawers);
        this.renderModules();
        
        lucide.createIcons();
    }

    renderDrawers(containerId, drawers) {
        const container = document.getElementById(containerId);
        container.innerHTML = drawers.map((d, i) => `
            <div class="drawer-item border border-white/5 bg-white/0 rounded-2xl md:rounded-3xl overflow-hidden ${this.mode === 'deep' ? 'drawer-open' : ''}">
                <button onclick="this.parentElement.classList.toggle('drawer-open')" class="w-full flex justify-between items-center p-6 md:p-8 text-left hover:bg-white/5 transition-colors">
                    <span class="font-bold text-base md:text-lg uppercase tracking-tight">${d.title}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 md:w-5 md:h-5 text-white/30 transition-transform drawer-icon"></i>
                </button>
                <div class="drawer-content px-6 md:px-8 pb-6 md:pb-8">
                    <p class="text-white/50 mb-6 md:mb-8 text-sm md:text-base leading-relaxed font-light">${d.content}</p>
                    <div class="technical-detail">
                        <p class="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30 mb-4">${translations[this.lang].techStack}</p>
                        <div class="flex flex-wrap gap-2">
                            ${d.tech.split(',').map(t => `<span class="px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] font-mono rounded-lg">${t.trim()}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderModules() {
        const container = document.getElementById('module-grid');
        container.innerHTML = architectureData.modules.map(m => `
            <div class="glass-card p-4 md:p-6 rounded-[24px] md:rounded-[32px] flex flex-col h-full group cursor-pointer" onclick="window.portal.openModule('${m.id}')">
                <div class="aspect-square rounded-xl md:rounded-2xl bg-zinc-900 mb-4 md:mb-6 overflow-hidden relative border border-white/5">
                    <img src="${m.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                
                <div class="mb-4">
                    <span class="text-[8px] font-bold tracking-[0.3em] text-blue-500 uppercase">${m.id}</span>
                    <h3 class="font-black text-xs md:text-sm uppercase tracking-tighter leading-none mt-1">${m.name[this.lang]}</h3>
                </div>

                <div class="mt-auto pt-4 border-t border-white/5">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[8px] text-white/40 uppercase font-bold">${translations[this.lang].progress}</span>
                        <span class="text-[9px] font-mono">${m.progress}%</span>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar-fill" style="width: ${m.progress}%"></div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    openModule(id) {
        const m = architectureData.modules.find(x => x.id === id);
        if (!m) return;

        const content = document.getElementById('panel-content');
        const badge = document.getElementById('panel-badge');
        badge.innerText = `${m.id} // ${m.status[this.lang]}`;

        content.innerHTML = `
            <div class="mb-12 md:mb-16">
                <img src="${m.image}" class="w-full aspect-video object-cover rounded-[20px] md:rounded-[40px] mb-8 md:mb-12 shadow-2xl border border-white/10">
                <h2 class="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">${m.name[this.lang]}</h2>
                <div class="flex flex-wrap items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    <span>${translations[this.lang].complexity}: <span class="text-white">${m.complexity[this.lang]}</span></span>
                    <span>${translations[this.lang].progress}: <span class="text-white">${m.progress}%</span></span>
                </div>
            </div>

            <div class="space-y-8 md:space-y-12">
                <div class="engineering-notes">
                    <h4 class="text-[9px] uppercase font-black tracking-[0.3em] text-white/30 mb-4 md:mb-6">${translations[this.lang].engineeringNotes}</h4>
                    <p class="text-lg md:text-xl text-white/70 font-light leading-relaxed">${m.notes[this.lang]}</p>
                </div>

                <div class="p-6 md:p-8 bg-white/5 rounded-[24px] md:rounded-[32px] border border-white/10">
                    <h4 class="text-[9px] uppercase font-black tracking-[0.3em] text-white/30 mb-4 md:mb-6">${translations[this.lang].techStack}</h4>
                    <div class="flex flex-wrap gap-2 md:gap-3">
                        ${m.tech.split(',').map(t => `<span class="px-4 py-2 md:px-5 md:py-2.5 bg-black border border-white/10 text-[10px] md:text-xs font-mono rounded-lg md:rounded-xl">${t.trim()}</span>`).join('')}
                    </div>
                </div>

                <div class="context-note p-6 md:p-8 rounded-[24px] md:rounded-[32px] bg-blue-500/10 border border-blue-500/20">
                    <h4 class="text-[9px] uppercase font-black tracking-[0.3em] text-blue-400 mb-4">Strategic Integration</h4>
                    <p class="text-xs md:text-sm text-blue-100/60 leading-relaxed font-light italic">
                        This module anchors the protocol's ability to handle global institutional volumes while maintaining localized inference latency.
                    </p>
                </div>
            </div>
        `;

        this.togglePanel(true);
        lucide.createIcons();
    }

    togglePanel(isOpen) {
        const panel = document.getElementById('side-panel');
        const overlay = document.getElementById('side-panel-overlay');
        if (isOpen) {
            panel.classList.add('open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            panel.classList.remove('open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.reveal-hero', {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out"
        });


        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%"
                }
            });
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.portal = new BerserkPortal();
});

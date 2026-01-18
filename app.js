import { avatars, techSpecs, ambientMusic } from './data.js';
import { updateTelemetry } from './telemetry.js';
import { AudioManager } from './audio_manager.js';

class App {
    constructor() {
        this.currentAvatar = 'rafaela';
        this.audio = new AudioManager();
        this.init();
    }

    init() {
        lucide.createIcons();
        this.setupEventListeners();
        this.audio.initAmbient(ambientMusic);
        this.switchAvatar(this.currentAvatar);
        this.renderTechSpecs();
    }

    setupEventListeners() {

        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-avatar');
                this.switchAvatar(id);
                
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });


        document.getElementById('play-voice').addEventListener('click', () => {
            const avatar = avatars[this.currentAvatar];
            const btn = document.getElementById('play-voice');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Processing...`;
            lucide.createIcons();

            this.audio.playVoice(avatar.voice, () => {
                btn.innerHTML = originalContent;
                lucide.createIcons();
            });
        });


        document.getElementById('volume-slider').addEventListener('input', (e) => {
            this.audio.setAmbientVolume(e.target.value);
        });


        document.getElementById('tech-specs-trigger').addEventListener('click', () => {
            document.getElementById('tech-modal').classList.remove('hidden');
            document.getElementById('tech-modal').classList.add('flex');
        });

        const closeBtn = document.getElementById('close-modal');
        const modalBg = document.getElementById('close-modal-bg');
        const closeModal = () => {
            document.getElementById('tech-modal').classList.add('hidden');
            document.getElementById('tech-modal').classList.remove('flex');
        };
        closeBtn.addEventListener('click', closeModal);
        modalBg.addEventListener('click', closeModal);
    }

    switchAvatar(id) {
        const container = document.getElementById('content-container');
        container.style.opacity = '0';
        
        setTimeout(() => {
            this.currentAvatar = id;
            const avatar = avatars[id];
            

            document.documentElement.style.setProperty('--accent-color', avatar.accent);
            

            document.getElementById('avatar-name').textContent = avatar.name;
            document.getElementById('avatar-mode').textContent = avatar.mode;
            document.getElementById('avatar-bio').textContent = avatar.bio;
            document.getElementById('avatar-bg').style.backgroundImage = `url('${avatar.image}')`;
            document.getElementById('system-constraint').textContent = avatar.constraint;
            

            this.animateValue('stat-precision', avatar.stats.precision, '%');
            this.animateValue('stat-response', avatar.stats.latency, 'ms');
            
            document.getElementById('bar-precision').style.width = `${avatar.stats.precision}%`;
            document.getElementById('bar-response').style.width = `${(1 - avatar.stats.latency/300) * 100}%`;


            updateTelemetry('telemetryChart', avatar.stats, avatar.accent);
            

            container.style.opacity = '1';
            lucide.createIcons();
        }, 300);
    }

    animateValue(id, target, suffix = '') {
        const obj = document.getElementById(id);
        let start = 0;
        const duration = 1000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * target);
            obj.innerHTML = current + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        requestAnimationFrame(update);
    }

    renderTechSpecs() {
        const target = document.getElementById('tech-specs-content');
        target.innerHTML = `
            <div class="flex items-center gap-4 mb-8">
                <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <i data-lucide="cpu" class="w-6 h-6 text-white"></i>
                </div>
                <div>
                    <h3 class="text-3xl font-bold">Tech Specs</h3>
                    <p class="text-zinc-500">${techSpecs.model}</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                ${techSpecs.features.map(f => `
                    <div class="p-6 bg-white/5 rounded-2xl border border-white/5">
                        <h4 class="text-lg font-bold mb-2">${f.title}</h4>
                        <p class="text-zinc-400 text-sm leading-relaxed">${f.description}</p>
                    </div>
                `).join('')}
            </div>
            <div class="p-6 border-l-2 border-white/20 bg-white/5 italic text-zinc-300">
                "${techSpecs.quote}"
            </div>
        `;
        lucide.createIcons();
    }
}


window.addEventListener('DOMContentLoaded', () => {
    new App();
});

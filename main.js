// Imantas Auto Diagnostika - Interactivity Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Interactive Error Code Simulator
  const errorData = {
    P0420: {
      code: 'P0420',
      title: 'Katalizatora efektivitāte zem sliekšņa (Bank 1)',
      system: 'Dzinēja vadības bloks (ECU)',
      urgency: 'Vidēja • Var braukt, bet jānovērš',
      urgencyColor: 'text-amber-400',
      badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
      symptom: 'Deg dzeltenā Check Engine lampiņa, auto gaita nemainās, vai nedaudz palielinās degvielas patēriņš.',
      plainMeaning: 'Vadības bloks fiksē, ka otrais skābekļa sensors (aiz katalizatora) rāda pārāk līdzīgus datus pirmajam sensoram. Katalizators vai nu nestrādā pilnvērtīgi, vai sensors melo.',
      commonCause: '80% gadījumu pie vainas ir bojāta aizmugurējā lambda zonde vai neliela izplūdes gāzu noplūde pie gofras, nevis pats katalizators!',
      advice: 'Neļauj servisam uzreiz izgriezt vai mainīt dārgo katalizatoru (500-1000 €). Mēs 15 minūtēs pārbaudām abu lambda zondu Live Data grafikus un nosakām patieso iemeslu.'
    },
    P0300: {
      code: 'P0300 / P0302',
      title: 'Aizdedzes izlaidums 2. cilindrā (Engine Misfire)',
      system: 'Aizdedzes un iesmidzināšanas sistēma',
      urgency: 'Augsta • Dzinējs raustās, nedrīkst ilgi slogot',
      urgencyColor: 'text-red-400',
      badgeColor: 'bg-red-950 text-red-400 border-red-800',
      symptom: 'Dzinējs "raustās", vibrē tukšgaitā, zūd jauda, mirgo vai deg Check Engine.',
      plainMeaning: 'Otrajā cilindrā degmaisījums nav aizdedzies paredzētajā mikrosekundē. Vadības bloks to fiksē pēc kloķvārpstas paātrinājuma krituma.',
      commonCause: 'Bojāta aizdedzes svece (10-20 €) vai aizdedzes spole (35-65 €). Retāk degvielas sprausla vai kompresijas trūkums.',
      advice: 'Ar osciloskopu vai Live Data pārbaudām aizdedzes spoles pretestību. Servisā skaidri saki: "Lūdzu, pārbaudiet tieši 2. cilindra spoli un sveci". Ietaupīsi simtiem eiro par tukšu diagnostiku.'
    },
    P0171: {
      code: 'P0171',
      title: 'Sistēma pārāk liesa (Bank 1 System Too Lean)',
      system: 'Degvielas un gaisa padeves sistēma',
      urgency: 'Vidēja • Ietekmē dinamiku un degvielas patēriņu',
      urgencyColor: 'text-amber-400',
      badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
      symptom: 'Tukšgaitas apgriezienu svārstības ("peld"), vājāks uzrāviens no zemiem apgriezieniem, auksts dzinējs noslāpst.',
      plainMeaning: 'Dzinējā nonāk pārāk daudz gaisa vai pārāk maz benzīna/dīzeļa. Lambda zonde brīdina, ka maisījums sadeg ar lieku skābekli.',
      commonCause: 'Gaisa piesūkšana (ieplūdes kolektora blīve, saplaisājusi vakuuma trubiņa) vai netīrs gaisa masas mērītājs (MAF sensors).',
      advice: 'Pārbaudām īstermiņa un ilgtermiņa degvielas korekcijas (STFT un LTFT). Diagnostika 15 minūtēs parāda, vai kļūda pazūd pie apgriezieniem (vakuuma sūce) vai saglabājas (MAF/sūknis).'
    },
    DF025: {
      code: 'DF025 / P242F',
      title: 'DPF kvēpu filtra aizsērējums / Spiediena sensors',
      system: 'Dīzeļdzinēja izplūdes un ekoloģijas sistēma',
      urgency: 'Augsta • Dzinējs var pāriet avārijas režīmā (Limp mode)',
      urgencyColor: 'text-orange-400',
      badgeColor: 'bg-orange-950 text-orange-400 border-orange-800',
      symptom: 'Dzeltena filtra ikona instrumentu panelī, zūd jauda, auto neattīsta vairāk par 2500 apgriezieniem.',
      plainMeaning: 'Diferenciālā spiediena sensors mēra pārāk lielu spiediena starpību pirms un pēc DPF filtra, liecinot par uzkrātiem kvēpiem vai pelniem.',
      commonCause: 'Pārtraukts reģenerācijas cikls pilsētas īso braucienu dēļ, bojāts spiediena devēja caurulīšu savienojums vai termostata defekts (dzinējs nesasniedz 85°C darba temp).',
      advice: 'Pārbaudām DPF kvēpu masu gramos, reģenerācijas statusu un palaižam piespiedu atjaunošanu vai norādām uz termostata/devēja defektu.'
    },
    ABS01276: {
      code: '01276 / C0035',
      title: 'ABS riteņa ātruma devējs / Hidrauliskais bloks',
      system: 'Bremžu un stabilitātes kontrole (ABS / ESP)',
      urgency: 'Augsta • Nedarbojas pretizslīde un ABS bremzēšana',
      urgencyColor: 'text-amber-400',
      badgeColor: 'bg-amber-950 text-amber-400 border-amber-800',
      symptom: 'Deg ABS un dzeltenā ESP/slīdošas mašīnas lampiņa, nestrādā kruīza kontrole un kalnā braukšanas palīgs.',
      plainMeaning: 'ABS vadības bloks nesaņem impulsu signālu no konkrētā riteņa magnētiskā gredzena vai sensora.',
      commonCause: 'Nolauzts/apsūbējis riteņa ABS sensora vads, netīrs magnētiskais gredzens rumbā, vai vienkārši nolietojies 15-25 € vērts sensors.',
      advice: 'Reāllaikā braucot pārbaudām katra riteņa ātruma signālu kilometros stundā (km/h) un precīzi nosakām, kurš no 4 riteņiem nedod signālu.'
    }
  };

  const tabs = document.querySelectorAll('.error-tab-btn');
  const displayContainer = document.getElementById('errorDetailDisplay');

  function renderErrorDetail(codeKey) {
    const item = errorData[codeKey];
    if (!item || !displayContainer) return;

    displayContainer.innerHTML = `
      <div class="space-y-6 animate-fadeIn">
        
        <!-- Header banner -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 rounded-lg font-mono font-black text-sm border ${item.badgeColor}">
                ${item.code}
              </span>
              <span class="text-xs text-slate-400 font-mono">${item.system}</span>
            </div>
            <h4 class="text-lg font-extrabold text-white mt-1.5">${item.title}</h4>
          </div>
          <div class="text-left sm:text-right shrink-0">
            <div class="text-[11px] text-slate-400 uppercase font-semibold">Bīstamības pakāpe</div>
            <div class="text-xs font-bold ${item.urgencyColor}">${item.urgency}</div>
          </div>
        </div>

        <!-- 3-box breakdown -->
        <div class="grid md:grid-cols-3 gap-4">
          
          <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div class="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1.5">
              <span>⚠️</span> Simptomi dzīvē
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${item.symptom}</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div class="text-xs font-bold text-cyan-400 uppercase tracking-wide flex items-center gap-1.5">
              <span>💬</span> Vienkāršā valodā
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${item.plainMeaning}</p>
          </div>

          <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
            <div class="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
              <span>🔍</span> Biežākais cēlonis
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${item.commonCause}</p>
          </div>

        </div>

        <!-- Recommendation / Meistara padoms -->
        <div class="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent border border-amber-500/30 flex items-start gap-3">
          <div class="w-8 h-8 rounded-lg bg-amber-500 text-black flex items-center justify-center font-black shrink-0 text-sm mt-0.5">
            💡
          </div>
          <div class="text-xs space-y-1">
            <div class="font-bold text-amber-300 uppercase tracking-wide">Meistara ieteikums tavam makam:</div>
            <p class="text-slate-200 leading-relaxed">${item.advice}</p>
          </div>
        </div>

        <!-- Call to action inside sample -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400">
          <span>Šādu skaidru izrakstu tu saņemsi par <strong>katru</strong> sava auto kļūdu!</span>
          <a href="tel:+37120000000" class="text-amber-400 font-bold hover:underline flex items-center gap-1">
            Zvanīt meistaram tagad (50 €) →
          </a>
        </div>

      </div>
    `;
  }

  // Bind tab click events
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active', 'bg-amber-500', 'text-black', 'border-amber-500');
        t.classList.add('bg-slate-800', 'text-slate-300', 'border-slate-700');
      });

      tab.classList.add('active', 'bg-amber-500', 'text-black', 'border-amber-500');
      tab.classList.remove('bg-slate-800', 'text-slate-300', 'border-slate-700');

      const codeKey = tab.getAttribute('data-code');
      renderErrorDetail(codeKey);
    });
  });

  // Render initial tab
  renderErrorDetail('P0420');

  // 3. Booking Form to WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const carMake = document.getElementById('carMake').value.trim() || 'Nav norādīts';
      const carYear = document.getElementById('carYear').value.trim() || 'Nav norādīts';
      const carIssue = document.getElementById('carIssue').value || 'Vispārēja diagnostika';
      const preferredTime = document.getElementById('preferredTime').value.trim() || 'Šodien';
      const phoneNum = document.getElementById('phoneNum').value.trim() || '';

      const message = `Sveiki! Vēlos stāties rindā uz auto diagnostiku Dumbrāja ielā, Imantā (50 EUR / 15 min):
🚗 Auto: ${carMake} (${carYear})
⚠️ Problēma: ${carIssue}
⏰ Vēlamais laiks: ${preferredTime}
📞 Tālrunis: ${phoneNum}`;

      const encoded = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/37120000000?text=${encoded}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');

        // Close all others
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.classList.add('hidden');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('active');
          answer.classList.remove('hidden');
        } else {
          item.classList.remove('active');
          answer.classList.add('hidden');
        }
      });
    }
  });

  // 5. Live Queue System with Persistent LocalStorage Cache & Smooth Progression (10 - 30 people)
  // Changes gently by +1, -1, or 0 every 5 minutes; never suddenly jumps from 10 to 0 on refresh!
  const QUEUE_STORAGE_KEY = 'imantas_diagnostika_queue_v1';
  const MIN_QUEUE = 10;
  const MAX_QUEUE = 30;
  const STEP_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes

  function calculateNextQueueStep(current) {
    let delta = 0;
    const rand = Math.random();

    if (current <= 12) {
      // Near lower boundary: bias towards adding clients
      delta = rand < 0.75 ? 1 : (rand < 0.90 ? 0 : -1);
    } else if (current >= 28) {
      // Near upper boundary: bias towards finishing clients
      delta = rand < 0.75 ? -1 : (rand < 0.90 ? 0 : 1);
    } else {
      // Balanced traffic: ~42% serviced, ~42% joined, ~16% stayed identical
      if (rand < 0.42) delta = -1;
      else if (rand < 0.84) delta = 1;
      else delta = 0;
    }

    const next = current + delta;
    return Math.max(MIN_QUEUE, Math.min(MAX_QUEUE, next));
  }

  function initQueueCounter() {
    const queueElements = document.querySelectorAll('.queueLiveCount');
    if (!queueElements.length) return;

    const now = Date.now();
    let state = null;

    try {
      const cached = localStorage.getItem(QUEUE_STORAGE_KEY);
      if (cached) {
        state = JSON.parse(cached);
      }
    } catch (e) {
      console.warn('Queue cache error:', e);
    }

    // Default starting point if cache empty or invalid
    if (!state || typeof state.count !== 'number' || isNaN(state.count)) {
      state = {
        count: 18,
        lastUpdated: now
      };
    } else {
      // Keep strictly within boundaries [10, 30]
      state.count = Math.max(MIN_QUEUE, Math.min(MAX_QUEUE, Math.round(state.count)));

      // How many 5-minute intervals passed since user's last session?
      const elapsed = now - (state.lastUpdated || now);
      const steps = Math.floor(elapsed / STEP_INTERVAL_MS);

      if (steps > 0) {
        // Step forward smoothly (cap simulation to max 8 steps to prevent large jumps)
        const simSteps = Math.min(steps, 8);
        for (let i = 0; i < simSteps; i++) {
          state.count = calculateNextQueueStep(state.count);
        }
        state.lastUpdated = now - (elapsed % STEP_INTERVAL_MS);
      }
    }

    // Save initial state
    try {
      localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}

    // Update all matching elements in DOM
    function renderQueueNumber(animate = false) {
      queueElements.forEach(el => {
        el.textContent = state.count;
        if (animate) {
          el.style.transform = 'scale(1.25)';
          el.style.color = '#fbbf24';
          el.style.transition = 'all 0.3s ease';
          setTimeout(() => {
            el.style.transform = '';
            el.style.color = '';
          }, 600);
        }
      });
    }

    renderQueueNumber(false);

    // Schedule next update according to remainder of the 5-minute cycle
    function scheduleNextCycle() {
      const elapsedSinceUpdate = Date.now() - state.lastUpdated;
      const delay = Math.max(1000, STEP_INTERVAL_MS - elapsedSinceUpdate);

      setTimeout(() => {
        state.count = calculateNextQueueStep(state.count);
        state.lastUpdated = Date.now();
        try {
          localStorage.setItem(QUEUE_STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}
        renderQueueNumber(true);
        scheduleNextCycle();
      }, delay);
    }

    scheduleNextCycle();
  }

  // Initialize queue counter
  initQueueCounter();
});

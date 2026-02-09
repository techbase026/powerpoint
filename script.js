// Configurazione iniziale
let currentSlide = 1;
const totalSlides = 11;

// Elementi del DOM
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');

// Inizializza la prima slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setupEventListeners();
});

/**
 * Mostra la slide specificata
 */
function showSlide(n) {
    // Rimuovi la classe active da tutte le slide
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Mostra solo la slide corrente
    if (slides[n - 1]) {
        slides[n - 1].classList.add('active');
        window.scrollTo(0, 0);
    }

    // Aggiorna il contatore
    updateCounter();

    // Aggiorna gli indicatori
    updateIndicators();
}

/**
 * Passa alla slide successiva
 */
function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

/**
 * Torna alla slide precedente
 */
function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

/**
 * Vai a una slide specifica
 */
function goToSlide(n) {
    if (n >= 1 && n <= totalSlides) {
        currentSlide = n;
        showSlide(currentSlide);
    }
}

/**
 * Aggiorna il contatore della slide
 */
function updateCounter() {
    currentSlideSpan.textContent = currentSlide;
}

/**
 * Aggiorna gli indicatori visivi delle slide
 */
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index + 1 === currentSlide) {
            indicator.classList.add('active');
        }
    });
}

/**
 * Setup degli event listener
 */
function setupEventListeners() {
    // Pulsanti di navigazione
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Navigazione con tastiera
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        }
    });

    // Click sugli indicatori
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index + 1);
        });
    });

    // Navigazione con mouse scroll (opzionale)
    let scrollTimeout;
    document.addEventListener('wheel', (e) => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (e.deltaY > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }, 100);
    }, { passive: true });
}

// Aggiungi animazioni al caricamento dei pilastri
document.addEventListener('DOMContentLoaded', () => {
    const pillars = document.querySelectorAll('.pillar');
    pillars.forEach((pillar, index) => {
        pillar.style.animationDelay = `${index * 0.1}s`;
    });

    const malwareCards = document.querySelectorAll('.malware-card');
    malwareCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const objectiveCards = document.querySelectorAll('.objective-card');
    objectiveCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Effetto glitch su hover (opzionale, aggiunge dinamicità)
document.addEventListener('DOMContentLoaded', () => {
    const glitchElements = document.querySelectorAll('.slide-title, .main-message');
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.animation = 'glitchEffect 0.3s ease';
        });
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'none';
        });
    });
});

// Debug: Mostra la slide attuale nella console
window.addEventListener('load', () => {
    console.log(`Presentazione caricata. Usar le frecce della tastiera, i pulsanti o gli indicatori per navigare.`);
    console.log(`Totale slide: ${totalSlides}`);
});

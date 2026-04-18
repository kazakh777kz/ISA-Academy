// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Close mobile menu when clicking on links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Modal Functions
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Open modal from header CTA button
document.getElementById('headerCta').addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

// Phone Input Mask
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }
        
        let formattedValue = '+7';
        if (value.length > 0) {
            formattedValue += ' (' + value.substring(0, 3);
        }
        if (value.length >= 3) {
            formattedValue += ') ' + value.substring(3, 6);
        }
        if (value.length >= 6) {
            formattedValue += '-' + value.substring(6, 8);
        }
        if (value.length >= 8) {
            formattedValue += '-' + value.substring(8, 10);
        }
        
        e.target.value = formattedValue;
    });
}

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ===== ВИДЕО-ФУНКЦИИ =====
function playSideVideo(card, videoUrl) {
    // Находим главное видео
    const featured = document.querySelector('.video-featured iframe');
    
    // Меняем iframe с анимацией
    featured.style.opacity = '0';
    featured.style.transition = 'opacity 0.3s';
    
    setTimeout(() => {
        featured.src = videoUrl;
        featured.onload = () => {
            featured.style.opacity = '1';
        };
    }, 300);
    
    // Прокручиваем к видео
    document.querySelector('.video-featured').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
    });
}

function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    iframe.src = videoUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    modal.classList.remove('active');
    iframe.src = '';
    document.body.style.overflow = '';
}

document.getElementById('videoModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('videoModal')) {
        closeVideoModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});

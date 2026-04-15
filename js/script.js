// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Modal
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modal')) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

document.getElementById('headerCta').addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

// Phone mask (для красоты форматирования)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('7') || value.startsWith('8')) {
            value = value.substring(1);
        }
        
        let formattedValue = '+7';
        if (value.length > 0) formattedValue += ' (' + value.substring(0, 3);
        if (value.length >= 3) formattedValue += ') ' + value.substring(3, 6);
        if (value.length >= 6) formattedValue += '-' + value.substring(6, 8);
        if (value.length >= 8) formattedValue += '-' + value.substring(8, 10);
        
        e.target.value = formattedValue;
    });
}

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// SMOOTH SCROLL
document.querySelectorAll(".explore-btn").forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        const targetId = btn.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// GALAXY STARFIELD WITH COLORS & PARALLAX
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const starColors = ["#00fff7", "#b368ff", "#7f8aff"];
const stars = [];
for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        color: starColors[Math.floor(Math.random() * starColors.length)]
    });
}

let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
        const offsetX = (mouseX - canvas.width/2) * s.r * 0.002;
        const offsetY = (mouseY - canvas.height/2) * s.r * 0.002;
        ctx.beginPath();
        ctx.arc(s.x + offsetX, s.y + offsetY, s.r, 0, Math.PI*2);
        ctx.fillStyle = s.color;
        ctx.fill();
        s.y -= s.speed;
        if (s.y < 0) s.y = canvas.height;
    }
    requestAnimationFrame(animateStars);
}
animateStars();
window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });

// 3D CARD PARALLAX ON MOUSE
document.querySelectorAll('.planet-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        card.style.transform = `rotateY(${dx*15}deg) rotateX(${-dy*15}deg) scale(1.08)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'; });
});

// SCROLL ANIMATION: fade in cards
const cards = document.querySelectorAll('.planet-card');
function revealCards() {
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) card.classList.add('visible');
    });
}
window.addEventListener('scroll', revealCards);
revealCards();

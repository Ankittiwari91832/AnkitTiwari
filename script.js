// Smooth scroll + navbar active
document.querySelectorAll(".nav-links li a, .explore-btn").forEach(btn=>{
    btn.addEventListener("click", e=>{
        e.preventDefault();
        const targetId = btn.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({behavior:"smooth"});
        document.querySelectorAll('.nav-links li a').forEach(l=>l.classList.remove('active'));
        if(btn.classList.contains('nav-links')) btn.classList.add('active');
    });
});

// Fade-in cards on scroll
const cards=document.querySelectorAll('.planet-card');
function revealCards(){
    const triggerBottom=window.innerHeight*0.85;
    cards.forEach(card=>{ if(card.getBoundingClientRect().top<triggerBottom) card.style.opacity=1; });
}
window.addEventListener('scroll', revealCards);
revealCards();

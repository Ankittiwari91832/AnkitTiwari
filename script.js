// Smooth scroll for Explore buttons
document.querySelectorAll(".explore-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

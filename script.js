// ————— CONFIG —————
const API_KEY = "AIzaSyBtWXs6954u0k-3epCdr7jUJFVYHsiSmvA"; 
const playlists = {
    personal: "YOUR_PERSONAL_UPLOADS_PLAYLIST_ID",
    gaming:  "YOUR_GAMING_UPLOADS_PLAYLIST_ID",
    roast:   "YOUR_ROAST_UPLOADS_PLAYLIST_ID"
};
// ————————————

async function fetchLatestVideo(playlistId) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.items[0].snippet.resourceId.videoId;
}

async function loadAllLatest() {
    try {
        const personal = await fetchLatestVideo(playlists.personal);
        const gaming  = await fetchLatestVideo(playlists.gaming);
        const roast   = await fetchLatestVideo(playlists.roast);

        document.getElementById("personalVideo").src = `https://www.youtube.com/embed/${personal}?autoplay=0`;
        document.getElementById("gamingVideo").src  = `https://www.youtube.com/embed/${gaming}?autoplay=0`;
        document.getElementById("roastVideo").src   = `https://www.youtube.com/embed/${roast}?autoplay=0`;
    } catch (err) {
        console.error("Failed to load latest videos:", err);
    }
}

// Smooth scroll for Explore buttons
document.querySelectorAll(".explore-btn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// LOAD VIDEOS
loadAllLatest();

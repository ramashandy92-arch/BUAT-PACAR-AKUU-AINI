
// Membuat bintang
const stars = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}

// Emoji love
const emojis = [
    "❤️", "💖", "💕", "💗",
    "💘", "💝", "🩷", "💓"
];

// Efek ledakan love
function explosion() {

    for (let i = 0; i < 150; i++) {

        const heart = document.createElement("div");

        heart.className = "burst";

        heart.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.fontSize =
            (15 + Math.random() * 35) + "px";

        heart.style.setProperty(
            "--x",
            (Math.random() * window.innerWidth -
            window.innerWidth / 2) + "px"
        );

        heart.style.setProperty(
            "--y",
            (Math.random() * window.innerHeight -
            window.innerHeight / 2) + "px"
        );

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}

// Love beterbangan
function createLove() {

    const heart = document.createElement("div");

    heart.className = "love";

    heart.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-50px";

    heart.style.fontSize =
        (20 + Math.random() * 35) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

// Tombol buka hadiah
const openButton = document.getElementById("openButton");

openButton.addEventListener("click", function () {

    // Hilangkan halaman pembuka
    document.getElementById("opening").classList.add("hide");

    // Munculkan tulisan cinta
    document.getElementById("main").classList.add("show");

    // Love meledak
    explosion();

    // Love langsung memenuhi layar
    for (let i = 0; i < 100; i++) {
        setTimeout(createLove, i * 30);
    }

    // Love terus muncul
    setInterval(createLove, 150);

});

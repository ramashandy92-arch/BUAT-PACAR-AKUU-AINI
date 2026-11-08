
// ==========================================
// LITTLE HAPPINESS FOR YOU 💗
// FULL JAVASCRIPT - MOBILE OPTIMIZED
// ==========================================


// ==========================================
// MENGAMBIL ELEMEN HTML
// ==========================================

const startButton = document.getElementById("startButton");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

const letterButton = document.getElementById("letterButton");
const letterContent = document.getElementById("letterContent");

const floatingHearts = document.getElementById("floatingHearts");


// ==========================================
// KONDISI AWAL
// ==========================================

mainContent.classList.add("hidden");
letterContent.classList.add("hidden");
musicButton.classList.add("hidden");


// ==========================================
// TOMBOL BUKA HADIAH
// ==========================================

startButton.addEventListener("click", async function () {

    mainContent.classList.remove("hidden");
    intro.classList.add("hide");
    musicButton.classList.remove("hidden");

    try {

        await music.play();
        musicButton.textContent = "🎵";

    } catch (error) {

        musicButton.textContent = "🔇";
        console.log("Musik belum tersedia.");

    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// TOMBOL MUSIK
// ==========================================

musicButton.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();
            musicButton.textContent = "🎵";

        } catch (error) {

            musicButton.textContent = "🔇";
            console.log("Musik tidak dapat diputar.");

        }

    } else {

        music.pause();
        musicButton.textContent = "🔇";

    }

});


// ==========================================
// TOMBOL SURAT RAHASIA
// ==========================================

letterButton.addEventListener("click", function () {

    const isHidden = letterContent.classList.contains("hidden");

    letterContent.classList.toggle("hidden");

    if (isHidden) {

        letterButton.textContent = "Tutup surat 💌";

        setTimeout(function () {

            letterContent.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    } else {

        letterButton.textContent = "Buka surat rahasia 💗";

    }

});


// ==========================================
// TOMBOL KEJUTAN
// ==========================================

const choiceButtons = document.querySelectorAll(".choice-button");

const choiceMessage = document.getElementById("choiceMessage");

choiceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const message = button.dataset.message;

        choiceMessage.textContent = message;

        choiceMessage.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(10px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 500,
                easing: "ease"
            }
        );

        createHeart();

    });

});


// ==========================================
// MEMBUAT HATI MELAYANG
// ==========================================

function createHeart() {

    // Batasi jumlah hati
    if (floatingHearts.children.length >= 12) {
        return;
    }

    const heart = document.createElement("div");

    heart.className = "heart";

    const heartList = [
        "💗",
        "💕",
        "💖",
        "💞",
        "♡",
        "🌸"
    ];

    heart.textContent =
        heartList[Math.floor(Math.random() * heartList.length)];

    heart.style.left = Math.random() * 90 + "%";

    heart.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 7000);

}


// ==========================================
// HATI OTOMATIS
// ==========================================

setInterval(function () {

    if (!mainContent.classList.contains("hidden")) {

        createHeart();

    }

}, 1500);


// ==========================================
// PESAN DI CONSOLE
// ==========================================

console.log("Little Happiness For You berhasil dimuat! 💗");

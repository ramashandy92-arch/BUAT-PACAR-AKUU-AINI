
// ============================
// PINDAH HALAMAN
// ============================

function goPage(number) {

    const pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.classList.remove('active');
    });

    const selectedPage = document.getElementById('page' + number);

    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    createHearts(15);
}


// ============================
// MEMBUKA SURAT
// ============================

function showLetter() {

    const letter = document.getElementById('letter');

    const nextButton = document.getElementById('nextBtn');

    const letterButton = document.getElementById('letterButton');

    letter.classList.add('show');

    nextButton.classList.remove('hidden');

    letterButton.style.display = 'none';

    createHearts(20);
}


// ============================
// ANIMASI HATI
// ============================

function createHearts(amount) {

    const hearts = [
        '💗',
        '💕',
        '💖',
        '💘',
        '❤️'
    ];

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement('div');

        heart.className = 'floating-heart';

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + 'vw';

        heart.style.fontSize =
            (15 + Math.random() * 22) + 'px';

        heart.style.animationDuration =
            (3 + Math.random() * 4) + 's';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7500);

    }
}


// ============================
// TOMBOL KIRIM CINTA
// ============================

function sendLove() {

    createHearts(65);

    const button = document.querySelector('#page3 .btn');

    button.innerHTML = 'Banyak cinta untuk kamu! 💗';

}


// ============================
// HATI OTOMATIS
// ============================

setInterval(() => {

    const heart = document.createElement('div');

    heart.className = 'floating-heart';

    heart.innerHTML = '♡';

    heart.style.left =
        Math.random() * 100 + 'vw';

    heart.style.fontSize = '20px';

    heart.style.animationDuration = '7s';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 1500);


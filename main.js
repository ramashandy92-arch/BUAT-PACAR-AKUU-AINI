/* =====================================================
   AMBIL ELEMENT
===================================================== */

const startButton =
    document.getElementById("startButton");

const intro =
    document.getElementById("intro");

const garden =
    document.getElementById("garden");

const particles =
    document.getElementById("particles");



/* =====================================================
   BUAT PARTIKEL
===================================================== */

function createParticles() {

    const totalParticles = 100;


    for (
        let i = 0;
        i < totalParticles;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "particle"
        );


        /* Posisi random */

        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        /* Ukuran random */

        const size =
            Math.random() * 3 + 1;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        /* Kecepatan random */

        const duration =
            Math.random() * 5 + 4;


        particle.style.animationDuration =
            duration + "s";


        /* Delay random */

        const delay =
            Math.random() * 5;


        particle.style.animationDelay =
            delay + "s";


        particles.appendChild(
            particle
        );

    }

}



/* Jalankan partikel */

createParticles();



/* =====================================================
   FUNGSI WAIT
===================================================== */

function wait(ms) {

    return new Promise(
        function(resolve) {

            setTimeout(
                resolve,
                ms
            );

        }
    );

}



/* =====================================================
   ANIMASI UTAMA
===================================================== */

async function startAnimation() {


    /* ---------------------------------------------
       1. HILANGKAN HALAMAN PEMBUKA
    --------------------------------------------- */

    intro.classList.add("hide");


    /* Tunggu fade */

    await wait(1600);



    /* ---------------------------------------------
       2. TAMPIlKAN TAMAN
    --------------------------------------------- */

    garden.classList.add("show");


    await wait(700);



    /* ---------------------------------------------
       3. TAMPILKAN AREA BUNGA
    --------------------------------------------- */

    garden.classList.add(
        "flowers-show"
    );


    await wait(500);



    /* ---------------------------------------------
       4. BATANG + DAUN TUMBUH
    --------------------------------------------- */

    garden.classList.add(
        "grow"
    );


    /* Tunggu batang */

    await wait(3400);



    /* ---------------------------------------------
       5. BUNGA MEKAR
    --------------------------------------------- */

    garden.classList.add(
        "bloom"
    );


    /*
       SELESAI.

       Tidak ada tulisan "i hope".

       Tidak ada tulisan akhir.

       Bunga tetap berada di layar.
    */

}



/* =====================================================
   TOMBOL CLICK
===================================================== */

startButton.addEventListener(
    "click",
    function() {


        /* Cegah klik berkali-kali */

        if (
            startButton.disabled
        ) {

            return;
        }


        /* Matikan tombol */

        startButton.disabled =
            true;


        /* Jalankan animasi */

        startAnimation();

    }
);
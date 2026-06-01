// ===========================
// HAPJA E ZARFIT
// ===========================

function openEnvelope() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.add("open");

    createConfetti();

    setTimeout(() => {

        document.getElementById("mainContent").style.display = "block";

        document.getElementById("mainContent").scrollIntoView({
            behavior: "smooth"
        });

    }, 1500);
}


// ===========================
// COUNTDOWN
// ===========================

const birthdayDate =
new Date("June 12, 2026 18:30:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    const dayEl = document.getElementById("days");
    const hourEl = document.getElementById("hours");
    const minuteEl = document.getElementById("minutes");
    const secondEl = document.getElementById("seconds");

    if(dayEl) dayEl.innerHTML = days;
    if(hourEl) hourEl.innerHTML = hours;
    if(minuteEl) minuteEl.innerHTML = minutes;
    if(secondEl) secondEl.innerHTML = seconds;

    if(distance < 0){

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
        `
        <h2>
        🎉 Gëzuar Ditëlindjen Daers! 🎉
        </h2>
        `;
    }

},1000);


// ===========================
// KONFETI
// ===========================

function createConfetti(){

    for(let i = 0; i < 80; i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random() * window.innerWidth + "px";

        confetti.style.animationDelay =
        Math.random() * 3 + "s";

        confetti.style.background =
        randomColor();

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        },4000);

    }

}


// ===========================
// NGJYRAT E KONFETIT
// ===========================

function randomColor(){

    const colors = [

        "#FFD700",
        "#FFB703",
        "#8ECAE6",
        "#FB8500",
        "#FFFFFF",
        "#FFC8DD"

    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}


// ===========================
// YJE NË SFOND
// ===========================

for(let i = 0; i < 40; i++){

    const star =
    document.createElement("div");

    star.classList.add("star");

    star.style.left =
    Math.random() * 100 + "%";

    star.style.top =
    Math.random() * 100 + "%";

    star.style.animationDelay =
    Math.random() * 3 + "s";

    document.body.appendChild(star);

}


// ===========================
// BALONA
// ===========================

for(let i = 0; i < 10; i++){

    const balloon =
    document.createElement("div");

    balloon.classList.add("balloon");

    balloon.style.left =
    Math.random() * 100 + "%";

    balloon.style.animationDuration =
    8 + Math.random() * 8 + "s";

    balloon.style.animationDelay =
    Math.random() * 5 + "s";

    document.body.appendChild(balloon);

}


// ===========================
// ANIMACION SCROLL
// ===========================

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(
".countdown-section,.photo-overlay,.save-date,.rsvp"
)
.forEach((section)=>{

    observer.observe(section);

});


// ===========================
// PARALLAX FOTO 1
// ===========================

window.addEventListener("scroll",()=>{

    const heroImage =
    document.querySelector(".hero img");

    if(heroImage){

        const value =
        window.scrollY * 0.1;

        heroImage.style.transform =
        `translateY(${value}px)`;

    }

});


// ===========================
// MESAZH
// ===========================

console.log(
"Daers Birthday Invitation Loaded Successfully 🎂"
);
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

const popup = document.getElementById('popup');
const links = document.getElementById('links');

const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

const audio = document.getElementById('myAudio');
const rootStyle = document.documentElement.style;

const announcement = document.getElementById('announcement');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=> {
        logoSpan.forEach((span, idx)=> {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(() => {
            intro.style.top ='-100vh';
        }, 2300)
    })
})

function playGradient() {
    rootStyle.setProperty('--blue1', '#ca4fb0');
    rootStyle.setProperty('--blue2', '#ef65a5');
    rootStyle.setProperty('--blue3', '#f497ab');
    rootStyle.setProperty('--blue4', '#f8c8be');
    rootStyle.setProperty('--blue5', '#f8e3c7');
}

function stopGradient() {
    rootStyle.setProperty('--blue1', '#0071ac');
    rootStyle.setProperty('--blue2', '#008a9f');
    rootStyle.setProperty('--blue3', '#09b6a4');
    rootStyle.setProperty('--blue4', '#9ce0b7');
    rootStyle.setProperty('--blue5', '#d8f3c1');
}

function showAbout() {
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);
}

function hideAbout () {
    popup.style.opacity = '0'; 
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

function showLinks() {
    links.style.display = 'block';
    setTimeout(() => {
        links.style.opacity = '1';
    }, 10);
}

function hideLinks () {
    links.style.opacity = '0'; 
    setTimeout(() => {
        links.style.display = 'none';
    }, 300);
}

// Play button click event
playBtn.addEventListener('click', () => {
    audio.play(); // Start playing the audio
    announcement.style.color = '#000'
    playGradient();
});

// Pause button click event
pauseBtn.addEventListener('click', () => {
    audio.pause(); // Pause the audio
    announcement.style.color = '#fff';
    stopGradient();
});

document.getElementById('about-btn').addEventListener('click', showAbout);
document.getElementById('close-about-btn').addEventListener('click', hideAbout);

document.getElementById('links-btn').addEventListener('click', showLinks);
document.getElementById('close-links-btn').addEventListener('click', hideLinks);
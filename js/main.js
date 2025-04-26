
// Мобильное меню

document.addEventListener('click', burgerInit)

function burgerInit(e) {
    const burgerIcon = e.target.closest('.mobile-menu')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1024) return

    const openElement = document.querySelector('.mobile-menu--open');
    const closeElement = document.querySelector('.mobile-menu--close');

    openElement.classList.toggle('mobile-menu--inactive');
    closeElement.classList.toggle('mobile-menu--active');

    const isOpened = document.body.classList.contains('body--opened-menu')

    if (isOpened) {
        document.body.classList.remove('body--opened-menu')
    } else {
        document.body.classList.add('body--opened-menu')
    }
}

// Время

function updateKrasnoyarskTime() {
    const now = new Date();
    const options = {
        timeZone: 'Asia/Krasnoyarsk',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat('ru-RU', options);
    const timeString = formatter.format(now);

    document.getElementById('time').textContent = timeString;
}

updateKrasnoyarskTime();

setInterval(updateKrasnoyarskTime, 60000);

// Скролл

SmoothScroll({
    animationTime: 800,
    stepSize: 75,
    accelerationDelta: 30,
    accelerationMax: 2,
    keyboardSupport: true,
    arrowScroll: 50,
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: true,
})
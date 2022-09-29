function revealButtonAndObscureBackgroundMenu() {
    const backgroundCarta = document.getElementById('background-carta');
    const linkCarta = document.getElementById('link-carta');

    backgroundCarta.style.filter = "blur(3px)";
    linkCarta.style.filter = "none";
    backgroundCarta.style.backgroundSize = "120%"

    linkCarta.style.color = "rgba(255,255,255,1)"
}

function revertRevealButtonAndObscureBackgroundMenu() {
    const backgroundCarta = document.getElementById('background-carta');
    const linkCarta = document.getElementById('link-carta');

    backgroundCarta.style.filter = "none";
    backgroundCarta.style.backgroundSize = "100%"

    linkCarta.style.color = "rgba(255,255,255,0)"
}

function revealDishName(number) {
    dishName = document.getElementById('nombre-plato-' + number)
    dishBackground = document.getElementById('background-plato-' + number)
    dishName.style.filter = "none"
    dishName.style.color = 'rgba(255,255,255,1)'
    dishBackground.style.backgroundSize = "120%"

    dishBackground.style.filter = "blur(3px)"
}

function hideDishName(number) {
    dishName = document.getElementById('nombre-plato-' + number)
    dishBackground = document.getElementById('background-plato-' + number)
    dishName.style.filter = "none"
    dishName.style.color = 'rgba(255,255,255,0)'
    dishBackground.style.backgroundSize = "100%"

    dishBackground.style.filter = "none"
}
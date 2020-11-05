let pageCounter = 1;
let callBack;

document.addEventListener('DOMContentLoaded', () => {
    nextDisabled();
    backDisabled();
    eventListeners();
});

const nextDisabled = () => {
    btnNext.disabled = true;
    btnNext.style.background = 'grey';
}

const nextEnabled = () => {
    btnNext.disabled = false;
    btnNext.style.background = 'blue';
}

const backDisabled = () => {
    btnBack.disabled = true;
    btnBack.style.background = 'grey';
}

const backEnabled = () => {
    btnBack.disabled = false;
    btnBack.style.background = 'lightsalmon';
}

const eventListeners = () => {
    const btnNext = document.getElementById('btnNext');
    const btnBack = document.getElementById('btnBack');
    const cbURL = document.getElementById('callBackURL');

    cbURL.addEventListener('input', () => {
        cbURL.value === '' ? nextDisabled() : nextEnabled();
    });

    btnBack.addEventListener('click', (event) => {
        pageCounter--;
        changeScreen(pageCounter);
    });

    btnNext.addEventListener('click', (event) => {
        pageCounter++;
        changeScreen(pageCounter);
    });
}

const changeScreen = () => {
    const scr1 = document.getElementById('screen1');
    const scr2 = document.getElementById('screen2');
    const scr3 = document.getElementById('screen3');
    const scr4 = document.getElementById('screen4');
    const cbURL = document.getElementById('callBackURL');

    scr1.style.display = "none";
    scr2.style.display = "none";
    scr3.style.display = "none";
    scr4.style.display = "none";

    backEnabled();

    switch (pageCounter) {
        case 1:
            scr1.style.display = "block";
            backDisabled();
            break;
        case 2:
            scr2.style.display = "block";
            callBack = cbURL.value;
            break;
        case 3:
            scr3.style.display = "block";
            break;
        case 4:
            scr4.style.display = "block";
            break;
        default:
            scr1.style.display = "block";
            pageCounter = 1;
            backDisabled();
            break;
    }
}
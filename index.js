let pageCounter = 1;
let callBack;

document.addEventListener('DOMContentLoaded', () => {
    btnNextSwitch(false);
    btnBackSwitch(false);
    eventListeners();
});

const btnNextSwitch = (latch) => {
    if (latch) {
        btnNext.disabled = false;
        btnNext.style.background = 'blue';
    }else{
        btnNext.disabled = true;
        btnNext.style.background = 'grey';
    }
}

const btnBackSwitch = (latch) => {
    if (latch) {
        btnBack.disabled = false;
        btnBack.style.background = 'lightsalmon';
    }else{
        btnBack.disabled = true;
        btnBack.style.background = 'grey';
    }
}

const eventListeners = () => {
    const btnNext = document.getElementById('btnNext');
    const btnBack = document.getElementById('btnBack');
    const cbURL = document.getElementById('callBackURL');
    const tbNameSurname = document.getElementById('tbNameSurname');
    const birthDate = document.getElementById('birthDate');
    const postalCode = document.getElementById('postalCode');
    const textTown = document.getElementById('textTown');
    const generalError = document.getElementById('generalError');
    const tbNameSurnameError = document.getElementById('tbNameSurnameError');
    const birthDateError = document.getElementById('birthDateError');
    const postalCodeError = document.getElementById('postalCodeError');
    const textTownError = document.getElementById('textTownError');

    cbURL.addEventListener('input', () => {
        cbURL.value === '' ? btnNextSwitch(false) : btnNextSwitch(true);
    });

    btnBack.addEventListener('click', (event) => {
        pageCounter--;
        changeScreen(pageCounter);
    });

    btnNext.addEventListener('click', (event) => {
        pageCounter++;
        changeScreen(pageCounter);
    });

    tbNameSurname.addEventListener('click', (event) => { //Mejorable
        tbNameSurname.value === '' ?  tbNameSurnameError.style.display = 'block' : tbNameSurnameError.style.display = 'none';
        checkScreen2();
    });

    tbNameSurname.addEventListener('input', (event) => { //Mejorable
        tbNameSurname.value === '' ?  tbNameSurnameError.style.display = 'block' : tbNameSurnameError.style.display = 'none';
        checkScreen2();
    });

    birthDate.addEventListener('click', (event) => { //NO VA
        birthDate.value === '' ? birthDateError.style.display = 'block' : birthDateError.style.display = 'none';
        checkScreen2();
    });

    birthDate.addEventListener('input', (event) => { //NO VA
        birthDate.value === '' ? birthDateError.style.display = 'block' : birthDateError.style.display = 'none';
        checkScreen2();
    });

    postalCode.addEventListener('click', (event) => { //Mejorable
        postalCode.value.length != 5 ? postalCodeError.style.display = 'block' : postalCodeError.style.display = 'none';
        checkScreen2();
    });

    postalCode.addEventListener('input', (event) => { //Mejorable
        postalCode.value.length != 5 ? postalCodeError.style.display = 'block' : postalCodeError.style.display = 'none';
        checkScreen2();
    });

    textTown.addEventListener('click', (event) => { //Mejorable
        textTown.value === '' ? textTownError.style.display = 'block' : textTownError.style.display = 'none';
        textTown.value = textTown.value.toUpperCase();
        checkScreen2();
    });

    textTown.addEventListener('input', (event) => { //Mejorable
        textTown.value === '' ? textTownError.style.display = 'block' : textTownError.style.display = 'none';
        textTown.value = textTown.value.toUpperCase();
        checkScreen2();
    });

    const checkScreen2 = () => {
        if (textTownError.style.display == 'none' && postalCodeError.style.display == 'none' && birthDateError.style.display == 'none' && tbNameSurnameError.style.display == 'none') {
            btnNextSwitch(true);
            generalError.style.display = 'none';
        }else{
            btnNextSwitch(false);
            generalError.style.display = 'block';
            document.getElementById('generalError').innerHTML = '';
            if ( tbNameSurnameError.style.display == 'block') {document.getElementById('generalError').innerHTML += 'Error en el campo: Nombre y apellidos<br>';}
            if ( birthDateError.style.display == 'block') {document.getElementById('generalError').innerHTML += 'Error en el campo: Fecha de nacimiento<br>';}
            if ( postalCodeError.style.display == 'block') {document.getElementById('generalError').innerHTML += 'Error en el campo: Código postal<br>';}
            if ( textTownError.style.display == 'block') { document.getElementById('generalError').innerHTML += 'Error en el campo: Municipio<br>';}
        }
    }
}

const changeScreen = () => {
    const scr1 = document.getElementById('screen1');
    const scr2 = document.getElementById('screen2');
    const scr3 = document.getElementById('screen3');

    scr1.style.display = 'none';
    scr2.style.display = 'none';
    scr3.style.display = 'none';

    btnBackSwitch(true);

    switch (pageCounter) {  
        case 1:
            goToPage1();
            break;
        case 2:
            goToPage2();
            break;
        case 3:
            goToPage3();
            break;
        case 4:
            goToPage4();
            break;
        case 5:
            goToPage5();
            break;
        default:
            pageCounter = 1;
            goToPage1();
            break;
    }
}

const goToPage1 = () => {
    const scr1 = document.getElementById('screen1');
    scr1.style.display = 'block';
    btnBackSwitch(false);
}

const goToPage2 = () => {
    const scr2 = document.getElementById('screen2');
    const cbURL = document.getElementById('callBackURL');
    const tbNameSurname = document.getElementById('tbNameSurname');
    const birthDate = document.getElementById('birthDate');
    const direction = document.getElementById('direction');
    const postalCode = document.getElementById('postalCode');
    const textProvince = document.getElementById('textProvince');
    const textTown = document.getElementById('textTown');
    document.getElementById('lblHeader').innerHTML = 'Formulario de solicitud de datos';
    btnNextSwitch(false);

    scr2.style.display = 'block';
    callBack = cbURL.value;
    tbNameSurname.disabled = false;
    birthDate.disabled = false;
    direction.disabled = false;
    postalCode.disabled = false;
    textProvince.disabled = false;
    textTown.disabled = false;
}

const goToPage3 = () => {
    const scr2 = document.getElementById('screen2');
    const tbNameSurname = document.getElementById('tbNameSurname');
    const birthDate = document.getElementById('birthDate');
    const direction = document.getElementById('direction');
    const postalCode = document.getElementById('postalCode');
    const textProvince = document.getElementById('textProvince');
    const textTown = document.getElementById('textTown');
    document.getElementById('lblHeader').innerHTML = 'Confirmación de datos';

    scr2.style.display = 'block';
    tbNameSurname.disabled = true;
    birthDate.disabled = true;
    direction.disabled = true;
    postalCode.disabled = true;
    textProvince.disabled = true;
    textTown.disabled = true;
}

const goToPage4 = () => {
    const scr3 = document.getElementById('screen3');
    const btnNext = document.getElementById('btnNext');
    scr3.style.display = 'block';
    btnBackSwitch(false);
    btnNext.text = 'Finalizar';
}

const goToPage5 = () => {
    btnBackSwitch(false);  
    btnNextSwitch(false);
    window.location.replace('http://'+callBack);
}
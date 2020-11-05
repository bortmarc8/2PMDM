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
    } else {
        btnNext.disabled = true;
        btnNext.style.background = 'grey';
    }
}

const btnBackSwitch = (latch) => {
    if (latch) {
        btnBack.disabled = false;
        btnBack.style.background = 'lightsalmon';
    } else {
        btnBack.disabled = true;
        btnBack.style.background = 'grey';
    }
}

const eventListeners = () => {
    const BTN_NEXT = document.getElementById('btnNext');
    const BTN_BACK = document.getElementById('btnBack');
    const CB_URL = document.getElementById('callBackURL');
    const TB_NAME_SURNAME = document.getElementById('tbNameSurname');
    const BIRTH_DATE = document.getElementById('birthDate');
    const POSTAL_CODE = document.getElementById('postalCode');
    const TEXT_TOWN = document.getElementById('textTown');
    const GENERAL_ERROR = document.getElementById('generalError');
    const TB_NAME_SURNAME_ERROR = document.getElementById('tbNameSurnameError');
    const BIRTH_DATE_ERROR = document.getElementById('birthDateError');
    const POSTAL_CODE_ERROR = document.getElementById('postalCodeError');
    const TEXT_TOWN_ERROR = document.getElementById('textTownError');

    CB_URL.addEventListener('input', () => {
        CB_URL.value === '' ? btnNextSwitch(false) : btnNextSwitch(true);
    });

    BTN_BACK.addEventListener('click', (event) => {
        pageCounter--;
        changeScreen(pageCounter);
    });

    BTN_NEXT.addEventListener('click', (event) => {
        pageCounter++;
        changeScreen(pageCounter);
    });

    TB_NAME_SURNAME.addEventListener('click', (event) => {
        TB_NAME_SURNAME.value === '' ? TB_NAME_SURNAME_ERROR.style.display = 'block' : TB_NAME_SURNAME_ERROR.style.display = 'none';
        checkScreen2();
    });

    TB_NAME_SURNAME.addEventListener('input', (event) => {
        TB_NAME_SURNAME.value === '' ? TB_NAME_SURNAME_ERROR.style.display = 'block' : TB_NAME_SURNAME_ERROR.style.display = 'none';
        checkScreen2();
    });

    BIRTH_DATE.addEventListener('click', (event) => {
        BIRTH_DATE.value === '' ? BIRTH_DATE_ERROR.style.display = 'block' : BIRTH_DATE_ERROR.style.display = 'none';
        checkScreen2();
    });

    BIRTH_DATE.addEventListener('input', (event) => {
        BIRTH_DATE.value === '' ? BIRTH_DATE_ERROR.style.display = 'block' : BIRTH_DATE_ERROR.style.display = 'none';
        checkScreen2();
    });

    POSTAL_CODE.addEventListener('click', (event) => {
        POSTAL_CODE.value.length != 5 ? POSTAL_CODE_ERROR.style.display = 'block' : POSTAL_CODE_ERROR.style.display = 'none';
        checkScreen2();
    });

    POSTAL_CODE.addEventListener('input', (event) => {
        POSTAL_CODE.value.length != 5 ? POSTAL_CODE_ERROR.style.display = 'block' : POSTAL_CODE_ERROR.style.display = 'none';
        checkScreen2();
    });

    TEXT_TOWN.addEventListener('click', (event) => {
        TEXT_TOWN.value === '' ? TEXT_TOWN_ERROR.style.display = 'block' : TEXT_TOWN_ERROR.style.display = 'none';
        TEXT_TOWN.value = TEXT_TOWN.value.toUpperCase();
        checkScreen2();
    });

    TEXT_TOWN.addEventListener('input', (event) => {
        TEXT_TOWN.value === '' ? TEXT_TOWN_ERROR.style.display = 'block' : TEXT_TOWN_ERROR.style.display = 'none';
        TEXT_TOWN.value = TEXT_TOWN.value.toUpperCase();
        checkScreen2();
    });

    const checkScreen2 = () => {
        if (TEXT_TOWN_ERROR.style.display == 'none' && POSTAL_CODE_ERROR.style.display == 'none' && BIRTH_DATE_ERROR.style.display == 'none' && TB_NAME_SURNAME_ERROR.style.display == 'none') {
            btnNextSwitch(true);
            GENERAL_ERROR.style.display = 'none';
        } else {
            btnNextSwitch(false);
            GENERAL_ERROR.style.display = 'block';
            document.getElementById('generalError').innerHTML = '';
            if (TB_NAME_SURNAME_ERROR.style.display == 'block') { document.getElementById('generalError').innerHTML += 'Error en el campo: Nombre y apellidos<br>'; }
            if (BIRTH_DATE_ERROR.style.display == 'block') { document.getElementById('generalError').innerHTML += 'Error en el campo: Fecha de nacimiento<br>'; }
            if (POSTAL_CODE_ERROR.style.display == 'block') { document.getElementById('generalError').innerHTML += 'Error en el campo: Código postal<br>'; }
            if (TEXT_TOWN_ERROR.style.display == 'block') { document.getElementById('generalError').innerHTML += 'Error en el campo: Municipio<br>'; }
        }
    }
}

const changeScreen = () => {
    const SCR1 = document.getElementById('screen1');
    const SCR2 = document.getElementById('screen2');
    const SCR3 = document.getElementById('screen3');

    SCR1.style.display = 'none';
    SCR2.style.display = 'none';
    SCR3.style.display = 'none';

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
    const SCR1 = document.getElementById('screen1');
    SCR1.style.display = 'block';
    btnBackSwitch(false);
}

const goToPage2 = () => {
    const SCR2 = document.getElementById('screen2');
    const CBURL = document.getElementById('callBackURL');
    const TB_NAME_SURNAME = document.getElementById('tbNameSurname');
    const BIRTH_DATE = document.getElementById('birthDate');
    const DIRECION = document.getElementById('direction');
    const POSTAL_CODE = document.getElementById('postalCode');
    const TEXT_PROVINCE = document.getElementById('textProvince');
    const TEXT_DOWN = document.getElementById('textTown');
    document.getElementById('lblHeader').innerHTML = 'Formulario de solicitud de datos';
    btnNextSwitch(false);

    SCR2.style.display = 'block';
    callBack = CBURL.value;
    TB_NAME_SURNAME.disabled = false;
    BIRTH_DATE.disabled = false;
    DIRECION.disabled = false;
    POSTAL_CODE.disabled = false;
    TEXT_PROVINCE.disabled = false;
    TEXT_DOWN.disabled = false;
}

const goToPage3 = () => {
    const SCR2 = document.getElementById('screen2');
    const TB_NAME_SURNAME = document.getElementById('tbNameSurname');
    const BIRTH_DATE = document.getElementById('birthDate');
    const DIRECTION = document.getElementById('direction');
    const POSTAL_CODE = document.getElementById('postalCode');
    const TEXT_PROVINCE = document.getElementById('textProvince');
    const TEXT_TOWN = document.getElementById('textTown');
    document.getElementById('lblHeader').innerHTML = 'Confirmación de datos';

    SCR2.style.display = 'block';
    TB_NAME_SURNAME.disabled = true;
    BIRTH_DATE.disabled = true;
    DIRECTION.disabled = true;
    POSTAL_CODE.disabled = true;
    TEXT_PROVINCE.disabled = true;
    TEXT_TOWN.disabled = true;
}

const goToPage4 = () => {
    const SCR3 = document.getElementById('screen3');
    SCR3.style.display = 'block';
    btnBackSwitch(false);
    document.getElementById('btnNext').firstChild.data = 'Terminar';
}

const goToPage5 = () => {
    btnBackSwitch(false);
    btnNextSwitch(false);
    document.getElementById('mainDiv').style.display = 'none';
    window.location.replace('http://' + callBack);
}
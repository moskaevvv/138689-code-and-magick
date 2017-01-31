'use strict';


//открытие-закрытие поп-апа
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var setupOpenRun = function() {
    setup.classList.remove('invisible');    
};
var setupCloseRun = function() {
    setup.classList.add('invisible');    
};

setupOpen.addEventListener('click', setupOpenRun);
setupClose.addEventListener('click', setupCloseRun);


//валидация ввода имени
var setupUserName = setup.querySelector('.setup-user-name');
setupUserName.required = true;
setupUserName.maxLength = '50';


//смена цвета накидки
var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

var wizardCoat = document.querySelector('#wizard-coat');
var colorNumber = 0;

var colorCount = function() {
    if (colorNumber < wizardCoatColors.length - 1) {
        return colorNumber = colorNumber + 1;
    } else {
        return colorNumber = 0;
    };
};

var wizardCoatColorChange = function() {
    wizardCoat.style.fill = wizardCoatColors[colorCount()];
};

wizardCoat.addEventListener('click', wizardCoatColorChange);



//рандомная смена цвета глаз
var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

var wizardEyes = document.querySelector('#wizard-eyes');
var getRandomEyeColor = function() {
    return Math.floor(Math.random() * wizardEyesColors.length);
};

var wizardEyesColorChange = function() {
    wizardEyes.style.fill = wizardEyesColors[getRandomEyeColor()];
};
wizardEyes.addEventListener('click', wizardEyesColorChange);


//смена цвета файрболов
var fireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];

var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColorNumber = 0;

var fireballColorCount = function() {
    if (fireballColorNumber < fireballColors.length - 1) {
        return fireballColorNumber = fireballColorNumber + 1;
    } else {
        return fireballColorNumber = 0;
    };
};

var fireballColorChange = function() {
    fireball.style.backgroundColor = fireballColors[fireballColorCount()];
};

fireball.addEventListener('click', fireballColorChange);

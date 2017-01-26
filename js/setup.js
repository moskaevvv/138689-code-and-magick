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
var wizardCoatColorChange = function() {
    wizardCoat.style.fill = wizardCoatColors[colorNumber];
};

var colorNumber = 1;
var colorCount = function() {
    if (colorNumber < wizardCoatColors.length - 1) {
        return colorNumber++;
    } else {
        colorNumber = 0;
    };
};

wizardCoat.addEventListener('click', wizardCoatColorChange);
wizardCoat.addEventListener('click', colorCount);


//рандомная смена цвета глаз
var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColorChange = function() {
    wizardEyes.style.fill = wizardEyesColors [
        Math.floor(Math.random() * (wizardEyesColors.length + 1))
    ];
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
var fireballColorChange = function() {
    fireball.style.backgroundColor = fireballColors[fireballColorNumber];
};

var fireballColorNumber = 1;
var fireballColorCount = function() {
    if (fireballColorNumber < fireballColors.length - 1) {
        return fireballColorNumber++;
    } else {
        fireballColorNumber = 0;
    };
};

fireball.addEventListener('click', fireballColorChange);
fireball.addEventListener('click', fireballColorCount);

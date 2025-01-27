
// Function to change background color 

function changeColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById('imgContainer').style.backgroundColor = color;
}

// function to change background color using the color picker 

function changeColorPickerBG(color) {
        document.body.style.backgroundColor = color;
        document.getElementById('imgContainer').style.backgroundColor = color;
}

// function to change text color for all text in the website

function changeColorPickerText(color) {
    document.querySelector('h1').style.color = color;

    const verticalText = document.querySelectorAll('.vertical-text');
    verticalText.forEach(verticalText =>{
        verticalText.style.color = color;
    });    

    const imgDescriptions = document.querySelectorAll('.imgDescription');
    imgDescriptions.forEach(description => {
        description.style.color = color;
    });

    const fullscreenDescription = document.querySelectorAll('.fullscreenDescription');
    fullscreenDescription.forEach(description => {
        description.style.color = color;
    });
}

// function to change text style for all text in the website from color picker button

function changeFontStyle(style) {
    document.querySelector('h1').style.fontFamily = style;

    const verticalText = document.querySelectorAll('.vertical-text');
    verticalText.forEach(verticalText =>{
        verticalText.style.fontFamily = style;
    });

    const imgDescriptions = document.querySelectorAll('.imgDescription');
    imgDescriptions.forEach(description => {
        description.style.fontFamily = style;
    });

    const fullscreenDescription = document.querySelectorAll('.fullscreenDescription');
    fullscreenDescription.forEach(description => {
        description.style.fontFamily = style;
    });
}

// function to change text color for all text in the website

function changeTextColor(color) {
    document.querySelector('h1').style.color = color;

    const verticalText = document.querySelectorAll('.vertical-text');
    verticalText.forEach(verticalText =>{
        verticalText.style.color = color;
    });    

    const imgDescriptions = document.querySelectorAll('.imgDescription');
    imgDescriptions.forEach(description => {
        description.style.color = color;
    });

    const fullscreenDescription = document.querySelectorAll('.fullscreenDescription');
    fullscreenDescription.forEach(description => {
        description.style.color = color;
    });
}

// function to increase the size of text for all text in the website 


function increaseTextSize() {
    const verticalText = document.querySelectorAll('.vertical-text');
    
    verticalText.forEach(item => {
        var fontSize = parseFloat(window.getComputedStyle(item, null).getPropertyValue('font-size'));
        var newSize = fontSize + 2;
        item.style.fontSize = newSize > 20 ? '20px' : newSize + 'px';
    });
    const imgDescriptions = document.querySelectorAll('.imgDescription');
    imgDescriptions.forEach(description => {
        var fontSize = parseFloat(window.getComputedStyle(description, null).getPropertyValue('font-size'));
        var newSize = fontSize + 2;
        description.style.fontSize = newSize > 20 ? '20px' : newSize + 'px';
    });
    const heading = document.querySelectorAll('h1');
    heading.forEach(h1 => {
        var fontSize = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
        var newSize = fontSize + 2;
        h1.style.fontSize = newSize > 56 ? '56px' : newSize + 'px';
    });

    const fullscreenDescription = document.querySelectorAll('.fullscreenDescription');
    fullscreenDescription.forEach(fDescription => {
        var fontSize = parseFloat(window.getComputedStyle(fDescription, null).getPropertyValue('font-size'));
        var newSize = fontSize + 2;
        fDescription.style.fontSize = newSize > 26 ? '26px' : newSize + 'px';
    });
}

// function to decrease the size of text for all text in the website 

function decreaseTextSize() {
    const verticalText = document.querySelectorAll('.vertical-text');
    verticalText.forEach(item => {
        var fontSize = parseFloat(window.getComputedStyle(item, null).getPropertyValue('font-size'));
        var newSize = fontSize - 2;
        item.style.fontSize = newSize < 10 ? '10px' : newSize + 'px';
    });
    const imgDescriptions = document.querySelectorAll('.imgDescription');
    imgDescriptions.forEach(description => {
        var fontSize = parseFloat(window.getComputedStyle(description, null).getPropertyValue('font-size'));
        var newSize = fontSize - 2;
        description.style.fontSize = newSize < 10 ? '10px' : newSize + 'px';
    });
    const heading = document.querySelectorAll('h1');
    heading.forEach(h1 => {
        var fontSize = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));
        var newSize = fontSize - 2;
        h1.style.fontSize = newSize < 46 ? '46px' : newSize + 'px';
    });
    const fullscreenDescription = document.querySelectorAll('.fullscreenDescription');
    fullscreenDescription.forEach(fDescription => {
        var fontSize = parseFloat(window.getComputedStyle(fDescription, null).getPropertyValue('font-size'));
        var newSize = fontSize - 2;
        fDescription.style.fontSize = newSize < 18 ? '18px' : newSize + 'px';
    });
}



        
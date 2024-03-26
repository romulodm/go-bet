const betButton = document.getElementById('roulette-double-bet-button');

function setupWheel() {
    var wheel = document.querySelector('.roulette-container .wheel'),
    row = "";
    
    row += "<div class='row'>";
    row += "  <div class='card red'>1<\/div>";
    row += "  <div class='card black'>14<\/div>";
    row += "  <div class='card red'>2<\/div>";
    row += "  <div class='card black'>13<\/div>";
    row += "  <div class='card red'>3<\/div>";
    row += "  <div class='card black'>12<\/div>";
    row += "  <div class='card red'>4<\/div>";
    row += "  <div class='card green'>0<\/div>";
    row += "  <div class='card black'>11<\/div>";
    row += "  <div class='card red'>5<\/div>";
    row += "  <div class='card black'>10<\/div>";
    row += "  <div class='card red'>6<\/div>";
    row += "  <div class='card black'>9<\/div>";
    row += "  <div class='card red'>7<\/div>";
    row += "  <div class='card black'>8<\/div>";
    row += "<\/div>";
    
    for (var x = 0; x < 29; x++) {
        wheel.insertAdjacentHTML('beforeend', row);
    }
}

function spinWheel(roll) {
    var wheel = document.querySelector('.roulette-container .wheel')
    var order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4]
    var position = order.indexOf(roll);

    var rows = 12
    var card = 75 + 3 * 2
    var landingPosition = (rows * 15 * card) + (position * card);

    var randomize = Math.floor(Math.random() * 75) - (75 / 2);

    landingPosition = landingPosition + randomize;

    var object = {
        x: Math.floor(Math.random() * 50) / 100,
        y: Math.floor(Math.random() * 20) / 100
    };

    wheel.style.transitionTimingFunction = 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)';
    wheel.style.transitionDuration = '6s';
    wheel.style.transform = 'translate3d(-' + landingPosition + 'px, 0px, 0px)';

    setTimeout(function() {
        wheel.style.transitionTimingFunction = '';
        wheel.style.transitionDuration = '';

        var resetTo = -(position * card + randomize);
        wheel.style.transform = 'translate3d(' + resetTo + 'px, 0px, 0px)';
    }, 6 * 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    setupWheel();
});

betButton.addEventListener('click', function() {
    console.log("oi");
    spinWheel(2);
});
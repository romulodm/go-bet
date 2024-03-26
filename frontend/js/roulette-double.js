
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

document.addEventListener('DOMContentLoaded', function() {
    setupWheel();
});
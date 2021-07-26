const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const huhu = $('html')
const control = $('.control')
const continues = $('.continue')
const li = $$('li')
const message1 = $('.message1')
const message2 = $('.message2')
const clockdiv = $('.clockdiv')
const smalltext = $$('.smalltext')
const hihi = $('.music')
const happyBirthday = $('.happy-birthday')
const videos = $('.videos')
const colorRed = $$('.fa-kiss-wink-heart')
console.log(colorRed)

control.onclick = function () {
    control.style.background-color, rgb(182, 41, 41);

}

setInterval(() => {
  colorRed.classList.add('.color-red')
},1000);
control.onclick = function () {
    message1.classList.remove('active')
    message2.classList.remove('active')
    clockdiv.classList.remove('active')
    hihi.play();
    control.classList.add('active')
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var minutesSpan = clock.querySelector('.minutes');
      var secondsSpan = clock.querySelector('.seconds');
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    
    var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 2 * 61 * 1000);
    initializeClock('clockdiv', deadline);
    setTimeout(() => {
      continues.classList.remove('active')
    },122000);

}
continues.onclick = function () {
    hihi.pause();
    happyBirthday.classList.add('active')
    videos.classList.remove('active')
}


//------------

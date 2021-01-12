window.onload = () => {

  var isMobile = /iPhone|Android/i.test(navigator.userAgent);
    if (isMobile) {
      var element = document.getElementById('mobileDiv');
      document.getElementById("mobileDiv").style.pointerEvents = "all";
      element.style.opacity = "1";
      element.style.filter  = 'alpha(opacity=90)'; // IE fallback
    }

// On Campus Button
  document.getElementById("Button1").addEventListener('click', function() {location.href = 'index.html'}, false);

// In Industry Button
  //document.getElementById('Button2').addEventListener('click', function() {location.href = 'OnCampus.html'}, false);
  document.getElementById("Button2").onclick = function() {myF()};
  function myF() {
    window.open('OnCampus.html', '_blank');
  }

// LinkedIn Button
  document.getElementById("Button3").addEventListener("click", toLinkedIn);

    function toLinkedIn() {
      window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/', '_blank');
    }

// Contact Button
  document.getElementById("Button4").addEventListener('click', function() {location.href = 'ConnectWithMe.html'}, false);


// Funny quotes playback (for those of you who scrolled down this far)
document.getElementById("icon1").addEventListener("click", playPulp);
var audio = false; // declare audio globally so that audio doesn't play in an overlap
var playPulpDuration = 3.3437 * 1000;

  function playPulp() {
    if (!audio) {
      audio = new Audio('marsellus.mp3');
    }
    setTimeout(() => {  audio = false; }, playPulpDuration);
    audio.loop = false;
    audio.play();
  }

document.getElementById("icon2").addEventListener("click", playBoats);
var playBoatsDuration = 2.976 * 1000;

  function playBoats() {
    if (!audio) {
      audio = new Audio('boats.mp3');
    }
    audio.loop = false;
    setTimeout(() => {  audio = false; }, playBoatsDuration);
    audio.play();
  }

document.getElementById("icon3").addEventListener("click", playTim);
var playTimDuration = 71.352 * 1000;
function playTim() {
  if (!audio) {
    audio = new Audio('friday_night.mp3');
  }
  audio.loop = false;
  setTimeout(() => {  audio = false; }, playTimDuration);
  audio.play();
}


}

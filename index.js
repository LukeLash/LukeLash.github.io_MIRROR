window.onload = () => {
/*
if (typeof window.orientation !== "undefined") {
  // this means the user is on a mobile device, so they need to be redirected to the mobile version of the site
  window.location.replace("mobileIndex.html");
}

if (screen.width <= 699) {
  document.location = "w3docs.com";
}
  function isMobileDevice() {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };*/


  var vertBool = "Did you click on the vertical blue bar?"
  var horizBool = "Did you click on the horizontal blue bar?";
  var suitBool = "Did you click on my suit?";
  var secretArray = [vertBool, horizBool, suitBool];
  var secretArrayNew = secretArray;

// apologies to who might be reading this, the code below is so woefully unoptimized
  document.getElementById("decoBarHoriz").addEventListener('click', function() {
    secretArray = secretArray.filter(e => e !== horizBool);
    if (secretArray.length == 0) {
      alertAndReset();
    } else {
    document.getElementById('horizSecretMessage').style.opacity = 1;
    var printedMessage = secretBoolCounter();
    document.getElementById("horizSecretMessage").innerHTML = printedMessage;
    document.getElementById('horizSecretMessage').style.backgroundColor = "#00ADB5";
    }
  });

  document.getElementById("decoBarVert").addEventListener('click', function() {
    secretArray = secretArray.filter(e => e !== vertBool);
    if (secretArray.length == 0) {
      alertAndReset();
    } else {
    document.getElementById('vertSecretMessage').style.opacity = 1;
    var printedMessage = secretBoolCounter();
    document.getElementById("vertSecretMessage").innerHTML = printedMessage;
    }
  });

  document.getElementById("suitSecretMessageDiv").addEventListener('click', function() {
    secretArray = secretArray.filter(e => e !== suitBool);
    if (secretArray.length == 0) {
      alertAndReset();
    } else {
    document.getElementById('suitSecretMessage').style.opacity = 1;
    var printedMessage = secretBoolCounter();
    document.getElementById("suitSecretMessage").innerHTML = printedMessage;
    document.getElementById('suitSecretMessage').style.backgroundColor = "#00ADB5";
    }
  });

  function secretBoolCounter() {
    randomNum = Math.floor(Math.random() * secretArray.length);
    return secretArray[randomNum];
  }

  function alertAndReset() {
    alert("Did you click the three blue logos? And did you turn your sound on?");
    secretArray = secretArrayNew;
    document.getElementById('horizSecretMessage').style.opacity = 0;
    document.getElementById('vertSecretMessage').style.opacity = 0;
    document.getElementById('suitSecretMessage').style.opacity = 0;
  }
  
// On Campus Button
  document.getElementById("Button1").addEventListener('click', function() {location.href = 'index.html'}, false);

// In Industry Button
  //document.getElementById('Button2').addEventListener('click', function() {location.href = 'campusAndIndustry.html'}, false);
 document.getElementById("Button2").addEventListener('click', function() {location.href = 'campusAndIndustry.html'}, false);

// LinkedIn Button
  document.getElementById("Button3").addEventListener("click", toLinkedIn);

    function toLinkedIn() {
      window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/');
    }

// Contact Button
  document.getElementById("Button4").addEventListener('click', function() {location.href = 'connectWithMe.html'}, false);


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
    //audio.volume = 0.5; // you can control volume with number from 0 to 1. 1 is default
  }
  audio.loop = false;
  setTimeout(() => {  audio = false; }, playTimDuration);
  audio.play();
}


}

window.onload = () => {

  var isMobile = /iPhone|Android/i.test(navigator.userAgent);
    if (isMobile) {
      var element = document.getElementById('mobileDiv');
      document.getElementById("mobileDiv").style.pointerEvents = "all";
      element.style.opacity = "1";
      element.style.filter  = 'alpha(opacity=90)'; // IE fallback
      window.open('index2.html', '_blank');
    }
    }
  
  function noScroll() {
  window.scrollTo(0, 0);
}

// add listener to disable scroll
window.addEventListener('scroll', noScroll);

// Remove listener to re-enable scroll
window.removeEventListener('scroll', noScroll);

// On Campus Button
  document.getElementById('Button1').addEventListener('click', function() {location.href = 'index.html'}, false);

// In Industry Button
  document.getElementById('Button2').addEventListener('click', function() {location.href = 'OnCampus.html'}, false);

// LinkedIn Button
  document.getElementById("Button3").addEventListener("click", toLinkedIn);

    function toLinkedIn() {
      window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/', '_blank');
    }

// Contact Button
  document.getElementById('Button4').addEventListener('click', function() {location.href = 'ConnectWithMe.html'}, false);


}

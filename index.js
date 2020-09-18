window.onload = () => {

  var isMobile = /iPhone|Android/i.test(navigator.userAgent);
    if (isMobile) {
      var element = document.getElementById('mobileDiv');
      document.getElementById("mobileDiv").style.pointerEvents = "all";
      element.style.opacity = "1";
      element.style.filter  = 'alpha(opacity=90)'; // IE fallback
    }

// On Campus Button
  document.getElementById('Button1').addEventListener('click', function() {location.href = 'index.html'}, false);

// In Industry Button
  //document.getElementById('Button2').addEventListener('click', function() {location.href = 'OnCampus.html'}, false);
  document.getElementById("Button2").onclick = function() {myF()};
  function myF() {
    window.open('OnCampus.html', '_blank');
  }

// LinkedIn Button
  document.getElementById("Button3").addEventListener("mouseover", onLinkedIn);

  function onLinkedIn() {
            document.getElementById('Button3').innerHTML
                = 'Go to My LinkedIn';
        }

  document.getElementById("Button3").addEventListener("mouseout", offLinkedIn);

    function offLinkedIn() {
              document.getElementById('Button3').innerHTML
                  = 'LinkedIn';
          }

  document.getElementById("Button3").addEventListener("click", toLinkedIn);

    function toLinkedIn() {
      window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/', '_blank');
    }

// Contact Button
  document.getElementById('Button4').addEventListener('click', function() {location.href = 'ConnectWithMe.html'}, false);


}

window.onload = () => {

  document.getElementById("saber").addEventListener("click", playAudio);
  var x = document.getElementById("myAudio");
    function playAudio() {
    x.play();
  }

  document.getElementById("icon").addEventListener("click", openResume);
    function openResume() {
      window.open("resume.pdf");
    }
    // On Campus Button
      document.getElementById('Button1').addEventListener('click', function() {location.href = 'index.html'}, false);

    // In Industry Button
      document.getElementById('Button2').addEventListener('click', function() {location.href = 'campusAndIndustry.html'}, false);

    // LinkedIn Button
      document.getElementById("Button3").addEventListener("click", toLinkedIn);

        function toLinkedIn() {
          window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/', '_blank');
        }

    // Contact Button
      document.getElementById('Button4').addEventListener('click', function() {location.href = 'connectWithMe.html'}, false);

}

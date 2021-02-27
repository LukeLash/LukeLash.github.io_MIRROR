window.onload = () => {


    // On Campus Button
      document.getElementById("Button1").addEventListener('click', function() {location.href = 'index.html'}, false);

    // In Industry Button
      //document.getElementById('Button2').addEventListener('click', function() {location.href = 'OnCampus.html'}, false);
      document.getElementById("Button2").addEventListener('click', function() {location.href = 'campusAndIndustry.html'});
    // LinkedIn Button
      document.getElementById("Button3").addEventListener("click", toLinkedIn);

        function toLinkedIn() {
          window.open('https://www.linkedin.com/in/lucas-lasher-21011914a/', '_blank');
        }

    // Contact Button
      document.getElementById("Button4").addEventListener('click', function() {location.href = 'connectWithMe.html'});

}

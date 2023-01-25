

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
    window.location.href = "http://127.0.0.1:5500/Resume.html";
});


var projectButtons = document.getElementsByClassName("btn");
for (var i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener("click", function() {
        var projectName = this.innerHTML;
        var projectUrl = "http://127.0.0.1:5500/Resume.html" + projectName;
        window.location.href = projectUrl;
    });
}

const contactBtn = document.getElementById("contact-btn");
const contactForm = document.getElementById("contact-form");

contactBtn.addEventListener("click", function() {
  if (contactForm.style.display === "none") {
    contactForm.style.display = "block";
  } else {
    contactForm.style.display = "none";
  }
});
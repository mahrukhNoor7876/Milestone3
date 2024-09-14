var form = document.getElementById("input-form");
var resume = document.getElementById("resume-display");
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var fullName = document.getElementById("input-name").value;
    var designation = document.getElementById("input-designation").value;
    var objective = document.getElementById("input-content").value;
    var cell = document.getElementById("input-cell").value;
    var email = document.getElementById("input-email").value;
    var linkedinURL = document.getElementById("input-linkedin-url").value;
    var education = document.getElementById("input-education").value;
    var skills = document.getElementById("input-skills").value;
    var experience = document.getElementById("input-experience").value;
    var resumeHTML = "<div id = \"resume\">\n        <div class=\"container1\">\n            <div class=\"heading\">\n                <h1>".concat(fullName, "</h1>\n                <h3>").concat(designation, "</h3>\n            </div>\n        </div>\n        \n        <div class=\"container2\">\n            <div class=\"headings\">\n                <h1>Objective</h1>\n                <hr>\n                <br>\n                <p>").concat(objective, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Contact</h1>\n                <hr>\n                <br>\n                <p><span>Phone : </span>").concat(cell, "</p>\n                <p><span>Email : </span>").concat(email, "</p>\n                <p><span>Linkedin : </span>").concat(linkedinURL, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Education</h1>\n                <hr>\n                <br>\n                <p>").concat(education, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Skills</h1>\n                <hr>\n                <br>\n                <p>").concat(skills, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Experience</h1>\n                <hr>\n                <br>\n                <p>").concat(experience, "</p>\n            </div>\n        </div>\n    </div>");
    if (resume) {
        resume.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});

const form = document.getElementById("input-form") as HTMLFormElement;
const resume = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    
    const fullName = (document.getElementById("input-name") as HTMLInputElement).value;
    const designation = (document.getElementById("input-designation") as HTMLInputElement).value;
    const objective = (document.getElementById("input-content") as HTMLInputElement).value;
    
    const cell = (document.getElementById("input-cell") as HTMLInputElement).value;
    const email = (document.getElementById("input-email") as HTMLInputElement).value;
    const linkedinURL = (document.getElementById("input-linkedin-url") as HTMLInputElement).value;

    const education = (document.getElementById("input-education") as HTMLInputElement).value;

    const skills = (document.getElementById("input-skills") as HTMLInputElement).value;
    const experience = (document.getElementById("input-experience") as HTMLInputElement).value;

    const resumeHTML = 
    `<div id = "resume">
        <div class="container1">
            <div class="heading">
                <h1>${fullName}</h1>
                <h3>${designation}</h3>
            </div>
        </div>
        
        <div class="container2">
            <div class="headings">
                <h1>Objective</h1>
                <hr>
                <br>
                <p>${objective}</p>
            </div>
            <div class="headings">
                <h1>Contact</h1>
                <hr>
                <br>
                <p><span>Phone : </span>${cell}</p>
                <p><span>Email : </span>${email}</p>
                <p><span>Linkedin : </span>${linkedinURL}</p>
            </div>
            <div class="headings">
                <h1>Education</h1>
                <hr>
                <br>
                <p>${education}</p>
            </div>
            <div class="headings">
                <h1>Skills</h1>
                <hr>
                <br>
                <p>${skills}</p>
            </div>
            <div class="headings">
                <h1>Experience</h1>
                <hr>
                <br>
                <p>${experience}</p>
            </div>
        </div>
    </div>`
    if(resume){
        resume.innerHTML = resumeHTML;
    }
    else{
        console.error("The resume display element is missing");
    }
})

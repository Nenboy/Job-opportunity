let myForm = document.querySelector("form");

myForm.addEventListener("submit", function(event){
    event.preventDefault();

    // Input elements
    let firstName = document.querySelector("#first");
    let lastName = document.querySelector("#last");
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
    let date = document.querySelector("#date");
    let password = document.querySelector("#password");
    let partTime = document.querySelector('#part');
    let fullTime = document.querySelector('#full');

    // Validation: All fields must be filled and a job type selected
    if (!firstName.value || !lastName.value || !email.value || !username.value || !date.value || !password.value || (!partTime.checked && !fullTime.checked)) {
        alert("Please fill in all fields and select a job type.");
        return;
    }

    // User data
    let fullName = `${firstName.value} ${lastName.value}`;
    let radioType = partTime.checked ? "partTime" : "fullTime";

    // Display confirmation
    let h3 = document.querySelector('h3');
    h3.innerHTML = `Welcome ${fullName}`;

    let para = document.querySelector('#form-div');
    para.innerHTML = `Please confirm that your name is ${fullName}, your email is ${email.value}, your username is ${username.value}, your date of birth is ${date.value}, and your password is ${password.value}.`;

    // Only create links once
    if (!document.querySelector('.response-links')) {
        let container = document.createElement("div");
        container.className = "response-links";

        let yesBtn = document.createElement("a");
        yesBtn.textContent = "Yes";
        yesBtn.href = "#";

        let noBtn = document.createElement("a");
        noBtn.textContent = "No";
        noBtn.href = "#";

        // Style both links
        [yesBtn, noBtn].forEach(link => {
            link.style.textDecoration = "none";
            link.style.color = "white";
            link.style.padding = "10px 15px";
            link.style.backgroundColor = "lightgreen";
            link.style.borderRadius = "10px";
            link.style.margin = "20px";
        });

        yesBtn.style.marginLeft = "50px";

        // Yes = proceed to job page
        yesBtn.onclick = function(e) {
            e.preventDefault();
            checkWorkType(fullName, radioType);
        };

        // No = reset form
        noBtn.onclick = function(e) {
            e.preventDefault();
            location.reload();
        };

        container.appendChild(yesBtn);
        container.appendChild(noBtn);
        document.body.appendChild(container);
    }
});

// Final redirection function
function checkWorkType(fullName, time) {
    let body = document.body;
    body.innerHTML = ""; // Clear page content

    // Create H1
    let heading = document.createElement("h1");
    heading.textContent = `Welcome ${fullName}, here are ${time === "partTime" ? "part-time" : "full-time"} jobs for you.`;
    heading.style.fontSize = "2rem";
    heading.style.color = "#333";
    heading.style.margin = "40px";
    heading.style.textAlign = "center";

    // Create link
    let jobLink = document.createElement("a");
    jobLink.textContent = "Click here to view jobs";
    jobLink.href = time === "partTime" ? "part.html" : "full.html";
    jobLink.target = "_blank";
    jobLink.style.display = "inline-block";
    jobLink.style.textDecoration = "none";
    jobLink.style.color = "white";
    jobLink.style.backgroundColor = "#28a745";
    jobLink.style.padding = "12px 20px";
    jobLink.style.borderRadius = "8px";
    jobLink.style.marginTop = "20px";

    // Center container
    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.height = "100vh";
    container.appendChild(heading);
    container.appendChild(jobLink);

    body.appendChild(container);
}

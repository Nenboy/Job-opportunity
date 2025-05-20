let myForm = document.querySelector("form");

myForm.addEventListener("submit", function(event){
    event.preventDefault();
    let firstName = document.querySelector("#first");
    let lastName = document.querySelector("#last");
    let fullName =  `${firstName.value} ${lastName.value}`;
    let email = document.querySelector("#email");
    let username = document.querySelector("#username");
    let date = document.querySelector("#date");
    let password = document.querySelector("#password");

    let h3 = document.querySelector('h3');
    h3.innerHTML = `Welcome ${fullName}`;
    let partTime = document.querySelector('#part');
    let fullTime = document.querySelector('#full');


    let para = document.querySelector('#form-div');
    para.innerHTML = `Please confirm that your name is ${fullName},your email is ${email.value},your username is ${username.value},your date of birth ${date.value}and your password is ${password.value}`;

    //radio buttons comparisons

    let radioType = null;
    if (partTime.checked){
        radioType = partTime.value;
    }
    if (fullTime.checked){
        radioType = fullTime.value;
    }


    //creating two new links in js
    let newLink = document.createElement("a");
    newLink.textContent = "Yes";
    newLink.href = "#";

    let noLink = document.createElement("a");
    noLink.textContent = "No";
    noLink.href = "#";
    document.body.appendChild(newLink);
    document.body.appendChild(noLink);

    //styling with js
    newLink.style.textDecoration = "none"; 
    newLink.style.color = "white";
    newLink.style.padding = "10px 15px";
    newLink.style.backgroundColor = "lightgreen";
    newLink.style.margin = "20px";
    newLink.style.marginLeft = "50px";
    newLink.style.borderRadius = "10px";

    noLink.style.textDecoration = "none"; 
    noLink.style.color = "white"; 
    noLink.style.padding = "10px 15px";
    noLink.style.backgroundColor = "lightgreen";
    noLink.style.borderRadius = "10px";
   

    //parameters for the links
    newLink.onclick = function (event){
        event.preventDefault();
        checkWorkType(fullName,radioType);
    };

    noLink.onclick = function (event){
        event.preventDefault();
        location.reload();
    };

    //declaring a function
    function checkWorkType(fullName,time){
        if (time == "partTime"){
            document.body.innerHTML = ` 
        <h1>
            Welcome ${fullName}, 
            here are part-time jobs for you.
            <a href="part.html" target="_blank">Click Here</a>
        </h1> 
        `
    } 
        else if (time == "fullTime"){
            document.body.innerHTML = ` 
        <h1>
            Welcome ${fullName}, 
            here are full-time jobs for you.
            <a href="full.html" target="_blank">Click Here</a>
        </h1> 
        `
    }   else {
            document.body.innerHTML = ` 
        <h1>
          Please select a work type.
        </h1> 
        `
    }
};
});

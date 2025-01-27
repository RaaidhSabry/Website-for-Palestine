function validate(){
    const first_name = document.getElementById("FirstName").value.trim();
    const last_name = document.getElementById("LastName").value.trim();
    const date_of_birth = document.getElementById("birthday").value;
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const rather = document.getElementById("rather");
    const ocupation = document.getElementById("occupation").value.trim();
    const country = document.getElementById("country").value.trim();
    const city = document.getElementById("city").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const username = document.getElementById("sUsername").value;
    const password = document.getElementById("spassword").value;
    const confirm_password = document.getElementById("re-password").value;
    
    if(first_name==""){
        alert("Please enter your first name");
        return;
    }

    if (last_name == "") {
        alert("Please enter your last name");   
        return;
    }

    if (date_of_birth == "") {
        alert("Please enter your date of birth name");    
        return;
    }

    if (!male && !female && !rather) {
        alert("Please select your gender");  
        return;  
    }

    if (ocupation == "") {
        alert("Please enter your ocupation");    
        return;
    }

    if (country == "") {
        alert("Please enter your country");
        return;
    }

    if (city == "") {
        alert("Please enter your city");
        return;
    }

    if (email == "") {
        alert("Please enter your email");
        return;
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    if (phone == "") {
        alert("Please enter your phone number");
        return;
    }else if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return
    }

    if (username == "") {
        alert("Please enter your username");
        return;
    }else{
        const users = JSON.parse(localStorage.getItem("usersData")) || [];
        const usernameExists = users.some(user => user.username === username);
        if (usernameExists) {
            alert("Username already exists. Please choose a different username.");
            return;
        }
    }

    if (password == "") {
        alert("Please enter your password");
        return;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (confirm_password == "") {
        alert("Please confirm your password");
        return;
    } else if (password !== confirm_password) {
        alert("Passwords do not match");
        return;
    }   
    
    
    save({
        first_name,
        last_name,
        date_of_birth,
        gender: male ? "male" : female ? "female" : "rather not say",
        ocupation,
        country,
        city,
        email,
        phone,
        username,
        password
    });
    alert("Successfully signed up")
    displaySummary();
    clearRegisterContainer();
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[+\d\s\-()]+$/;
    return re.test(String(phone));
}

function save(newUser) {
    const users = JSON.parse(localStorage.getItem("usersData")) || [];
    users.push(newUser);
    localStorage.setItem("usersData", JSON.stringify(users));
}
function togglePassword1() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
function togglePassword2() {
    var passwordField = document.getElementById("spassword");
    var rePasswordField = document.getElementById("re-password");
    if (passwordField.type == "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
    if (rePasswordField.type == "password") {
        rePasswordField.type = "text";
    } else {
        rePasswordField.type = "password";
    }
}

function login() {
    event.preventDefault();
    const loginWrapper = document.getElementById('Wrapper');
    const signUp_step1 = document.getElementById('Signup-step1');
    const signUp_step2 = document.getElementById('Signup-step2');
    const signUp_step3 = document.getElementById('Signup-step3');
    const displaySummary = document.getElementById('displaySummary');
    const Loader = document.getElementById('loader');

    loginWrapper.style.display = 'flex';
    signUp_step1.style.display = 'none';
    signUp_step2.style.display = 'none';
    signUp_step3.style.display = 'none';
    Loader.style.display = 'none';
    displaySummary.style.display = 'none';
}

function register() {
    event.preventDefault();
    const loginWrapper = document.getElementById('Wrapper');
    const signUp_step1 = document.getElementById('Signup-step1');
    const signUp_step2 = document.getElementById('Signup-step2');
    const signUp_step3 = document.getElementById('Signup-step3');
    const Loader = document.getElementById('loader');

    loginWrapper.style.display = 'none';
    signUp_step1.style.display = 'block';
    signUp_step2.style.display = 'none';
    signUp_step3.style.display = 'none';
    Loader.style.display = 'flex';
}

function toggleStep1(){
    event.preventDefault();
    const loginWrapper = document.getElementById('Wrapper');
    const signUp_step1 = document.getElementById('Signup-step1');
    const signUp_step2 = document.getElementById('Signup-step2');
    const signUp_step3 = document.getElementById('Signup-step3');
    const Loader = document.getElementById('loader');

    loginWrapper.style.display = 'none';
    signUp_step1.style.display = 'none';
    signUp_step2.style.display = 'block';
    signUp_step3.style.display = 'none';
    Loader.style.display = 'flex';
}

function toggleStep2(){
    event.preventDefault();
    const loginWrapper = document.getElementById('Wrapper');
    const signUp_step1 = document.getElementById('Signup-step1');
    const signUp_step2 = document.getElementById('Signup-step2');
    const signUp_step3 = document.getElementById('Signup-step3');
    const Loader = document.getElementById('loader');

    loginWrapper.style.display = 'none';
    signUp_step1.style.display = 'none';
    signUp_step2.style.display = 'none';
    signUp_step3.style.display = 'block';
    Loader.style.display = 'flex';
}


function toggleLabel(input) {
    const label = input.nextElementSibling;
    label.style.opacity = '0';
}

function checkInput(input) {
    if (!input.value) {
        const label = input.nextElementSibling;
        label.style.opacity = '1';
    }
}

function displaySummary(){
    const signUp_step3 = document.getElementById('Signup-step3');
    const displaySummary = document.getElementById('displaySummary');
    const Loader = document.getElementById('loader');
    Loader.style.display = 'none';
    signUp_step3.style.display = 'none';
    displaySummary.style.display = 'block';

    const users = JSON.parse(localStorage.getItem("usersData")) || [];
    if (users.length > 0) {
        const lastUser = users[users.length - 1];
        displaySummary.innerHTML = `
            <div class="details">
                <h3><u>${lastUser.first_name+" "+lastUser.last_name}</u></h3>
                <hr>
                <p><strong>Date of Birth:</strong> ${lastUser.date_of_birth}</p>
                <p><strong>Gender:</strong> ${lastUser.gender}</p>
                <p><strong>Occupation:</strong> ${lastUser.ocupation}</p>
                <p><strong>Country:</strong> ${lastUser.country}</p>
                <p><strong>City:</strong> ${lastUser.city}</p>
                <p><strong>Email:</strong> ${lastUser.email}</p>
                <p><strong>Phone:</strong> ${lastUser.phone}</p>
                <hr>
            </div>
            <button class="button" type="button" onclick="login()"><b>Back to login<b></button>
        `;
    } else {
        displaySummary.innerHTML = "<p>No data found</p>";
    }
}

function validateCredentials(){
    const username = document.getElementById("Username").value.trim();
    const password = document.getElementById("password").value.trim();
    const users = JSON.parse(localStorage.getItem("usersData")) || [];
    const user = users.find(user => user.username == username && user.password == password);
    if (user) {
        alert("Login successful");
        window.location.href = '/Student1/Splash.html';
    } else {
        alert("Invalid username or password");
    }
}


document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('input');
    const loader = document.getElementById('progress-value');
    let currentWidth = loader.clientWidth;
    const maxWidth = 100; 
    const increment = 8.3333333333; 
    
    const style = document.createElement('style');
    style.textContent = `
        #progress-value {
            animation: load 3s normal forwards;
        }
    `;
    document.head.appendChild(style);
    
    
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            currentWidth += increment;
            if (currentWidth > maxWidth) {
                currentWidth = maxWidth;
            }

            
            loader.style.width = `${currentWidth}%`;
        });
    });
});




function forgot(){
    alert("Try remembering....");
}

function clearRegisterContainer() {
    document.getElementById("FirstName").value="";
    document.getElementById("FirstName").nextElementSibling.style.opacity = '1';
    document.getElementById("LastName").value="";
    document.getElementById("LastName").nextElementSibling.style.opacity = '1';
    document.getElementById("birthday").value="";
    document.getElementById("male").checked=false;
    document.getElementById("female").checked=false;
    document.getElementById("rather").checked=false;
    document.getElementById("occupation").value="";
    document.getElementById("occupation").nextElementSibling.style.opacity = '1';
    document.getElementById("country").value="";
    document.getElementById("country").nextElementSibling.style.opacity = '1';
    document.getElementById("city").value="";
    document.getElementById("city").nextElementSibling.style.opacity = '1';
    document.getElementById("email").value="";
    document.getElementById("email").nextElementSibling.style.opacity = '1';
    document.getElementById("phone").value="";
    document.getElementById("phone").nextElementSibling.style.opacity = '1';
    document.getElementById("sUsername").value="";
    document.getElementById("sUsername").nextElementSibling.style.opacity = '1';
    document.getElementById("spassword").value="";
    document.getElementById("spassword").nextElementSibling.style.opacity = '1';
    document.getElementById("re-password").value="";
    document.getElementById("re-password").nextElementSibling.style.opacity = '1';
    document.getElementById('progress-value').style.width='0%';
    

}
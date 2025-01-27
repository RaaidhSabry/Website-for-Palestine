document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('FNameError').textContent = '';
    document.getElementById('SurnameError').textContent = '';
    document.getElementById('feedbackError').textContent = '';
    
    let isValid = true;
    
    // Get form values
    const FName = document.getElementById('FName').value.trim();
    const Surname = document.getElementById('Surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const feedback = document.getElementById('feedbackArea').value.trim();
    const rate = document.querySelector('input[name="rate"]:checked');
    
    // Validate First Name
    if (FName === '') {
        document.getElementById('FNameError').textContent = 'First Name is required';
        document.getElementById('FName').classList.add('error-highlight');
        isValid = false;
    } else {
        document.getElementById('FName').classList.remove('error-highlight');
    }
    
    // Validate Surname
    if (Surname === '') {
        document.getElementById('SurnameError').textContent = 'Surname is required';
        document.getElementById('Surname').classList.add('error-highlight');
        isValid = false;
    } else {
        document.getElementById('Surname').classList.remove('error-highlight');
    }
    
    // Validate Feedback
    if (feedback === '') {
        document.getElementById('feedbackError').textContent = 'Feedback is required';
        document.getElementById('feedbackArea').classList.add('error-highlight');
        isValid = false;
    } else {
        document.getElementById('feedbackArea').classList.remove('error-highlight');
    }
    

    // If all fields are valid, preview the feedback form
    if (isValid) {
        const previewMessage = `
            <p>First Name: ${FName}</p>
            <p>Surname: ${Surname}</p>
            <p>Email: ${email}</p>
            <p>Phone Number: ${phoneNumber}</p>
            <p>Feedback: ${feedback}</p>
            <p>Rating: ${rate.value}</p>
        `;
        
        document.getElementById('previewMessage').innerHTML = previewMessage;
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('feedbackPreview').style.display = 'block';
    }
});

document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('feedbackPreview').style.display = 'none';
});

document.getElementById('confirmButton').addEventListener('click', function() {
    alert('Thank you for your feedback!');
    document.getElementById('userForm').reset(); // Reset the form
    document.getElementById('userForm').style.display = 'block';
    document.getElementById('feedbackPreview').style.display = 'none';
});

//Nav bar js
document.addEventListener('DOMContentLoaded', (event) => {
    const userImage = document.getElementById('user');
    const submenu = document.getElementById('submenu');

    userImage.addEventListener('click', () => {
        submenu.classList.toggle('show');
    });

    
    document.addEventListener('click', (e) => {
        if (!userImage.contains(e.target) && !submenu.contains(e.target)) {
            submenu.classList.remove('show');
        }
    });
});

function setFunctionAndRedirect(functionName) {
    localStorage.setItem('functionToCall', functionName);
}




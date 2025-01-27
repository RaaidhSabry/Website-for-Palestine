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
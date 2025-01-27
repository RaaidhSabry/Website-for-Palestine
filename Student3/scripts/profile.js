document.addEventListener("DOMContentLoaded", function() {
    const functionName = localStorage.getItem('functionToCall');
    if (functionName) {
        window[functionName]();
        localStorage.removeItem('functionToCall');
    }
});
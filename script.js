// Wait until the DOM is fully loaded before running any script
document.addEventListener("DOMContentLoaded", () => {
    // Get the login form element by its ID
    const form = document.getElementById('loginForm');
    if (form) {
        // When the login form is submitted...
        form.addEventListener('submit', (e) => {
            e.preventDefault();  // Prevent the default form submission (page reload)
            // Retrieve the student’s name from the input field
            const name = document.getElementById('name').value;
            // Save the student’s name to localStorage
            localStorage.setItem('studentName', name);
            // Redirect to the dashboard/home page
            window.location.href = "home.html";
        });
    }

    // Get the welcome heading element
    const welcome = document.getElementById('welcome');
    if (welcome) {
        // Fetch the stored name and display a personalized greeting
        welcome.textContent = 'Welcome, ' + localStorage.getItem('studentName') + '!';
    }
});

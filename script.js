// Example form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Perform validation here
    // Example: Check if fields are not empty
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Example: Submit form using Fetch API or AJAX
    // Replace with actual form submission code
    console.log('Form submitted:', name, email, message);
});

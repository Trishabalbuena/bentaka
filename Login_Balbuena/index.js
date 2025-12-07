// DOM elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Form validation function
function validateForm() {
    // Get values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Email validation
    if (email === '') {
        alert("Email is required.");
        emailInput.focus();
        return false;
    }
    
    // Check if email is valid
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }
    
    // Password validation
    if (password === '') {
        alert("Password is required.");
        passwordInput.focus();
        return false;
    }
    
    // Check password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        passwordInput.focus();
        return false;
    }
    
    return true;
}

// Email format validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        // Show success message
        alert("Form submitted!");
        
        // In a real application, you would submit the form data to a server here
        console.log('Form submitted successfully!');
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        console.log('Remember me:', document.getElementById('remember').checked);
        
        // Optional: Reset form after successful submission
        // loginForm.reset();
    }
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    loginForm.addEventListener('submit', handleSubmit);
    
    // Forgot password link
    document.querySelector('.forgot-link').addEventListener('click', function(event) {
        event.preventDefault();
        alert("Password reset feature would be triggered here.");
    });
});
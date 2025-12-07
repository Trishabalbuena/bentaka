// DOM elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');

// Show notification function
function showNotification(message, isSuccess = true) {
    notificationText.textContent = message;
    notification.style.background = isSuccess 
        ? 'linear-gradient(to right, #be9bd8, #c5a6dd)' 
        : 'linear-gradient(to right, #e74c3c, #c0392b)';
    notification.style.display = 'block';
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Form validation function
function validateForm() {
    let isValid = true;
    
    // Get values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    
    // Email validation
    if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }
    
    // Password validation
    if (password === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }
    
    return isValid;
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
        showNotification('Login successful! Welcome back.', true);
        
        // In a real application, you would submit the form data to a server here
        console.log('Form submitted successfully!');
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        console.log('Remember me:', document.getElementById('remember').checked);
        
        // Reset form after successful submission (optional)
        // loginForm.reset();
    } else {
        showNotification('Please fix the errors in the form.', false);
    }
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    loginForm.addEventListener('submit', handleSubmit);
    
    // Forgot password link
    document.querySelector('.forgot-link').addEventListener('click', function(event) {
        event.preventDefault();
        showNotification('Password reset feature would be triggered here.', true);
    });
    
    // Real-time validation for email field
    emailInput.addEventListener('blur', function() {
        const email = emailInput.value.trim();
        if (email !== '' && !isValidEmail(email)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });
    
    // Real-time validation for password field
    passwordInput.addEventListener('blur', function() {
        const password = passwordInput.value.trim();
        if (password !== '' && password.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters.';
        } else {
            passwordError.textContent = '';
        }
    });
    
    // Clear errors when user starts typing
    emailInput.addEventListener('input', function() {
        if (emailError.textContent !== '') {
            emailError.textContent = '';
        }
    });
    
    passwordInput.addEventListener('input', function() {
        if (passwordError.textContent !== '') {
            passwordError.textContent = '';
        }
    });
});
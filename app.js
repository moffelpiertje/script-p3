const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = [];

    if (nameInput.value.trim() === '') {
        errors.push('Name is required');
        document.querySelector('#name-error').innerHTML = 'Name is required';
    } else {
        document.querySelector('#name-error').innerHTML = '';
    }

    if (emailInput.value.trim() === '') {
        errors.push('Email is required');
        document.querySelector('#email-error').innerHTML = 'Email is required';
    } else {
        document.querySelector('#email-error').innerHTML = '';
    }

    if (messageInput.value.trim() === '') {
        errors.push('Message is required');
        document.querySelector('#message-error').innerHTML = 'Message is required';
    } else if (messageInput.value.trim().length < 4) {
        errors.push('Message must contain at least 4 characters');
        document.querySelector('#message-error').innerHTML = 'Message must contain at least 4 characters';
    } else {
        document.querySelector('#message-error').innerHTML = '';
    }

    if (errors.length === 0) {
        form.reset();
        document.querySelector('#contact-form').innerHTML += '<div class="success">Message had been send!'
    }
});
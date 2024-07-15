function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert('All fields are required.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
}

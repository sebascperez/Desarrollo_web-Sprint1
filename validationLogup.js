document.addEventListener('DOMContentLoaded', function() {
    const logupForm = document.getElementById('logup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const formError = document.getElementById('form-error');

    logupForm.addEventListener('submit', function(event) {
        let valid = true;

        // Restablecer mensajes de error
        emailError.textContent = '';
        passwordError.textContent = '';
        formError.textContent = '';

        // Validar que el correo electrónico tenga un formato válido
        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please check again and enter a valid email.';
            valid = false;
        }

        // Validar que la contraseña tenga al menos 8 caracteres
        if (!isValidPassword(passwordInput.value)) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            valid = false;
        }

        // Evitar que se envíe el formulario si la validación no es exitosa
        if (!valid) {
            event.preventDefault();
            formError.textContent = 'Please check the form and correct the mistakes.';
        }
    });

    // Función para validar el formato de correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Función para validar la longitud de la contraseña
    function isValidPassword(password) {
        return password.length >= 8;
    }
});
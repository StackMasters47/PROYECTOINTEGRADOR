document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.getElementById("nombreInput");
    const telefonoInput = document.getElementById("telefonoInput");
    const emailInput = document.getElementById("inputEmail4");
    const pass1Input = document.getElementById("passInput1");
    const pass2Input = document.getElementById("passInput2");
    const registerButton = document.querySelector("button");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^\d{10}$/;

    const validateField = (input, condition, message) => {
        const feedback = input.nextElementSibling;
        if (!condition) {
            feedback.textContent = message;
            feedback.className = "form-text text-danger";
            return false;
        } else {
            feedback.textContent = "Campo válido.";
            feedback.className = "form-text text-success";
            return true;
        }
    };

    nombreInput.addEventListener("input", () => {
        validateField(nombreInput, nombreInput.value.trim() !== "", "El nombre no puede estar vacío.");
    });

    telefonoInput.addEventListener("input", () => {
        validateField(telefonoInput, telefonoRegex.test(telefonoInput.value.trim()), "Debe tener 10 dígitos.");
    });

    emailInput.addEventListener("input", () => {
        validateField(emailInput, emailRegex.test(emailInput.value.trim()), "Correo inválido.");
    });

    pass1Input.addEventListener("input", () => {
        validateField(pass1Input, pass1Input.value.trim().length >= 8, "Debe tener al menos 8 caracteres.");
    });

    pass2Input.addEventListener("input", () => {
        validateField(pass2Input, pass2Input.value.trim() === pass1Input.value.trim(), "Las contraseñas no coinciden.");
    });

    const validateForm = () => {
        const isValid =
            nombreInput.value.trim() &&
            telefonoRegex.test(telefonoInput.value.trim()) &&
            emailRegex.test(emailInput.value.trim()) &&
            pass1Input.value.trim().length >= 8 &&
            pass1Input.value.trim() === pass2Input.value.trim();

        registerButton.disabled = !isValid;
    };

    [nombreInput, telefonoInput, emailInput, pass1Input, pass2Input].forEach((input) => {
        input.addEventListener("input", validateForm);
    });

    registerButton.disabled = true;
});

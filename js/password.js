document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los botones de "Mostrar/Ocultar"
  const toggleButtons = document.querySelectorAll(".toggle-password");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Encuentra el campo de contraseña asociado al botón
      const passwordInput = button.previousElementSibling;

      // Verifica que el campo exista y alterna su visibilidad
      if (passwordInput) {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          button.textContent = "Ocultar";
        } else {
          passwordInput.type = "password";
          button.textContent = "Mostrar";
        }
      } else {
        console.error(
          "Campo de contraseña no encontrado para el botón:",
          button
        );
      }
    });
  });
});

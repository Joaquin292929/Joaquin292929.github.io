document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el mapa centrado en la ubicación proporcionada
    const map = L.map('map').setView([20.143375, -75.206232], 13);

    // Añadir la capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir un marcador en las coordenadas proporcionadas
    L.marker([20.143375, -75.206232])
        .addTo(map)
        .bindPopup('<b>Estamos Aquí</b><br>Tienda')
        .openPopup();
});

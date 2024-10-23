// Inicializa o mapa na posição correta de Cristino Castro-PI
const map = L.map('map').setView([-8.8221, -44.2233], 13);

// Adiciona a camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador inicial para Cristino Castro-PI
const marker = L.marker([-8.8221, -44.2233]).addTo(map)
    .bindPopup("<b>Cristino Castro-PI</b>").openPopup();

// Função para mudar a localização com base na cidade selecionada
function mudarLocalizacao() {
    const select = document.getElementById("cidade");
    const [lat, lng] = select.value.split(',').map(Number);

    // Move o mapa para a nova localização e adiciona um marcador
    map.setView([lat, lng], 13);

    L.marker([lat, lng]).addTo(map)
      .bindPopup(`<b>${select.options[select.selectedIndex].text}</b>`)
      .openPopup();
}

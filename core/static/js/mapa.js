function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        // Exibir as coordenadas no HTML
        document.getElementById('latitude').textContent = lat.toFixed(6);
        document.getElementById('longitude').textContent = lng.toFixed(6);

        // Criar mapa usando as coordenadas obtidas
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: lat, lng: lng},
            zoom: 16
        });

        // Marcar a localização no mapa
        var marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            map: map
        });
    });
}
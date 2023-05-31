function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;

        // Converter coordenadas geográficas em UTM
        var utmCoords = utm.fromLatLon(lat, lng);

        // Exibir as coordenadas UTM no HTML
        document.getElementById('latitude').textContent = utmCoords.northing.toFixed(2);
        document.getElementById('longitude').textContent = utmCoords.easting.toFixed(2);

        // Criar mapa usando as coordenadas geográficas
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

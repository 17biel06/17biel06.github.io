let mapa, marcadorAlarma, marcadorUsuario, circulo, watchId;
let alarmaActivada = false;
let posicionAlarma;
let sonidoAlarma;
let dentroDelRadio = false;

function solicitarUbicacion() {
    if ("geolocation" in navigator) {
        navigator.permissions.query({name:'geolocation'}).then(function(result) {
            if (result.state === 'granted') {
                iniciarSeguimiento();
            } else if (result.state === 'prompt') {
                navigator.geolocation.getCurrentPosition(
                    () => {
                        iniciarSeguimiento();
                        // Guardamos en el almacenamiento local que el permiso ha sido concedido
                        localStorage.setItem('locationPermissionGranted', 'true');
                    },
                    (error) => {
                        console.error("Error al obtener la ubicación:", error);
                        alert("No se pudo obtener tu ubicación. Por favor, activa los permisos de ubicación e intenta de nuevo.");
                    },
                    {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
                );
            } else if (result.state === 'denied') {
                alert("Los permisos de ubicación están desactivados. Por favor, actívalos en la configuración de tu navegador.");
            }
            
            // Escuchar cambios en el estado del permiso
            result.onchange = function() {
                console.log("El estado del permiso de geolocalización ha cambiado a: ", this.state);
                if (this.state === 'granted') {
                    iniciarSeguimiento();
                }
            }
        });
    } else {
        alert("Tu navegador no soporta geolocalización");
    }
}

// Añade esta función al inicio del archivo
function checkLocationPermission() {
    if (localStorage.getItem('locationPermissionGranted') === 'true') {
        iniciarSeguimiento();
    } else {
        solicitarUbicacion();
    }
}

function inicializarMapa() {
    mapa = L.map('mapa-container').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(mapa);

    marcadorAlarma = L.marker([0, 0], {draggable: true}).addTo(mapa);
    marcadorAlarma.on('dragend', actualizarCirculo);

    marcadorUsuario = L.marker([0, 0], {icon: L.divIcon({className: 'user-marker'})});

    mapa.on('click', (e) => {
        marcadorAlarma.setLatLng(e.latlng);
        actualizarCirculo();
    });

    checkLocationPermission();
    
    // Inicializar el sonido de la alarma
    sonidoAlarma = new Audio('https://soundbible.com/grab.php?id=2061&type=mp3');
    sonidoAlarma.loop = true;

    // Inicializar la funcionalidad de búsqueda
    inicializarBusqueda();
}

function inicializarBusqueda() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => realizarBusqueda(searchInput.value));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda(searchInput.value);
        }
    });
}

function realizarBusqueda(query) {
    if (!query) return;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const result = data[0];
                const lat = parseFloat(result.lat);
                const lon = parseFloat(result.lon);
                mapa.setView([lat, lon], 13);
                marcadorAlarma.setLatLng([lat, lon]);
                actualizarCirculo();
            } else {
                alert('No se encontraron resultados para la búsqueda.');
            }
        })
        .catch(error => {
            console.error('Error en la búsqueda:', error);
            alert('Hubo un error al realizar la búsqueda. Por favor, intenta de nuevo.');
        });
}

function solicitarUbicacion() {
    if ("geolocation" in navigator) {
        navigator.permissions.query({name:'geolocation'}).then(function(result) {
            if (result.state === 'granted') {
                iniciarSeguimiento();
            } else if (result.state === 'prompt') {
                navigator.geolocation.getCurrentPosition(
                    () => iniciarSeguimiento(),
                    (error) => {
                        console.error("Error al obtener la ubicación:", error);
                        alert("No se pudo obtener tu ubicación. Por favor, activa los permisos de ubicación e intenta de nuevo.");
                    },
                    {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
                );
            } else if (result.state === 'denied') {
                alert("Los permisos de ubicación están desactivados. Por favor, actívalos en la configuración de tu navegador.");
            }
        });
    } else {
        alert("Tu navegador no soporta geolocalización");
    }
}

function iniciarSeguimiento() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
    const intervalo = Number(document.getElementById('intervalo').value);
    watchId = navigator.geolocation.watchPosition(
        actualizarPosicionUsuario,
        (error) => console.error('Error al obtener la ubicación:', error),
        {enableHighAccuracy: true, timeout: 5000, maximumAge: intervalo}
    );
}

function actualizarCirculo() {
    const radio = Number(document.getElementById('radio').value);
    if (circulo) {
        mapa.removeLayer(circulo);
    }
    circulo = L.circle(marcadorAlarma.getLatLng(), {radius: radio, color: 'red'}).addTo(mapa);
}

function actualizarRadioValor() {
    const radio = document.getElementById('radio');
    const radioValor = document.getElementById('radio-valor');
    radioValor.textContent = `${radio.value} metros`;
    actualizarCirculo();
}

function activarAlarma() {
    if (!alarmaActivada) {
        posicionAlarma = marcadorAlarma.getLatLng();
        document.getElementById('alarma-estado').innerHTML = `
            <span class="estado-activo">Alarma activada</span><br>
            Posición: ${posicionAlarma.lat.toFixed(4)}, ${posicionAlarma.lng.toFixed(4)}
        `;
        document.getElementById('activar-alarma').textContent = 'Desactivar Alarma';
        alarmaActivada = true;
        iniciarSeguimiento();
    } else {
        desactivarAlarma();
    }
}

function desactivarAlarma() {
    alarmaActivada = false;
    dentroDelRadio = false;
    document.getElementById('alarma-estado').innerHTML = '<span class="estado-inactivo">No hay alarma activada</span>';
    document.getElementById('activar-alarma').textContent = 'Activar Alarma';
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
    ocultarPopupAlarma();
    sonidoAlarma.pause();
    sonidoAlarma.currentTime = 0;
}

function actualizarPosicionUsuario(posicion) {
    const lat = posicion.coords.latitude;
    const lng = posicion.coords.longitude;
    document.getElementById('ubicacion-actual').textContent = `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`;
    
    marcadorUsuario.setLatLng([lat, lng]).addTo(mapa);
    mapa.setView([lat, lng], mapa.getZoom());
    
    if (alarmaActivada) {
        const distancia = calcularDistancia(lat, lng, posicionAlarma.lat, posicionAlarma.lng);
        const radio = Number(document.getElementById('radio').value);
        if (distancia <= radio && !dentroDelRadio) {
            dentroDelRadio = true;
            activarSonidoAlarma();
        } else if (distancia > radio && dentroDelRadio) {
            dentroDelRadio = false;
            desactivarSonidoAlarma();
        }
    }
}

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radio de la Tierra en metros
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distancia en metros
}

function activarSonidoAlarma() {
    mostrarPopupAlarma();
    sonidoAlarma.play();
}

function desactivarSonidoAlarma() {
    ocultarPopupAlarma();
    sonidoAlarma.pause();
    sonidoAlarma.currentTime = 0;
}

function mostrarPopupAlarma() {
    const popup = document.getElementById('popup-alarma');
    popup.style.display = 'flex';
}

function ocultarPopupAlarma() {
    const popup = document.getElementById('popup-alarma');
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarMapa();
    document.getElementById('radio').addEventListener('input', actualizarRadioValor);
    document.getElementById('activar-alarma').addEventListener('click', activarAlarma);
    document.getElementById('intervalo').addEventListener('change', () => {
        if (alarmaActivada) {
            iniciarSeguimiento();
        }
    });
    document.getElementById('detener-alarma').addEventListener('click', desactivarAlarma);
});
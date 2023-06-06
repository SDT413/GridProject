let luna_art = document.getElementById("luna-art");
let nav = document.getElementById("nav");
let x_class = 'x';
let open_class = 'open';
let event = () => {
    luna_art.classList.toggle(x_class);
    nav.classList.toggle(open_class)
};
luna_art.addEventListener('click', event);

mapboxgl.accessToken = "pk.eyJ1IjoiZGs0MTMiLCJhIjoiY2xmN2I0Z3ppMDBwZjN2cDcxMXBpeW92MyJ9.P4O2mbHyviXylMkyk1C3zw";
let loc = [14.432920703901994, 50.08725860834356];
let map = new mapboxgl.Map({
    container: 'studio', // container ID
    center: loc, // starting position [lng, lat]
    zoom: 9, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let marker = document.createElement('div');
marker.id = 'marker';

let popup = new mapboxgl.Popup({ offset: 70 })
    .setHTML('<div id="hello">Hello World</div>');

new mapboxgl.Marker(marker, { anchor: 'bottom' })
    .setLngLat(loc)
    .addTo(map)
    .setPopup(popup);

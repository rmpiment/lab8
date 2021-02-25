function initMap() {
	L.mapquest.key = 'pBt1vGWatJgMhGfQkvjatFl0GDyTAUOM';

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [32.88, -117.236],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12,
	  zoomControl: false
	});

	// Add a marker to the map
	// L.marker([32.88, -117.236]).addTo(map);
}
$('.carousel').carousel({
  interval: 1000
})

function init_map() {
        var var_location = new google.maps.LatLng(34.7922407,-92.2594023);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 14,
          scrollwheel: false
        };
 
        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title:"Venice"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
        var_marker.setMap(var_map);    
 
      }
 
      google.maps.event.addDomListener(window, 'load', init_map);
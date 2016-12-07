jQuery(function($) {
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    var markers = [
        [`The Richard's Group`, 32.806140, -96.794070],
        [`Grimaldi's`, 32.806997, -96.796216],
        ['Chipotle', 32.798234, -96.801616],
        [`The Ginger Man`, 32.798252, -96.802914],
        ['Katy Trail Ice House', 32.800795, -96.807484],
        ['Pecan Lodge', 32.7835655,-96.786041],
        ['Dallas Farmers Market', 32.7826806,-96.7867301],
        ['State Fair of Texas', 32.7776675,-96.7829738],
        ['Opening Bell Coffee', 32.7680652,-96.7928648],
        ['Starbucks', 32.7753775,-96.8041416]
    ];

    var infoWindowContent = [
      [`<div class="info_content">
          <h3>The Richard's Group</h3>
          <p>The place that I will soon work!</p>
        </div>`],
        [`<div class="info_content">
            <h3>Grimaldis</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>Chipotle</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>The Ginger Man</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>Katy Trail Ice House</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>Pecan Lodge</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>Dallas Farmers Market</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>State Fair of Texas</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>Opening Bell Coffee</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
        [`<div class="info_content">
            <h3>Starbucks</h3>
            <p>Vestibulum lorem metus, efficitur ac metus et, mollis congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
          </div>`],
    ];

    var infoWindow = new google.maps.InfoWindow(), marker, i;

    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        map.fitBounds(bounds);
    }

    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(13);
        google.maps.event.removeListener(boundsListener);
    });

}

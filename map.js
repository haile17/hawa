function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(9.000525,38.748322),
      zoom:9,
      mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
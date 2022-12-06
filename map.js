//Map, map start
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:8.980603, lng:38.757759},
    zoom: 8
  });


//Array of markers

var markers = [
{
    coords:{lat:8.980603, lng:38.757759},
    iconImage:'http://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content:'<h1>Start</h1>'
  },
  {
    coords:{lat:8.980603, lng:38.757759},
    content:'<h1>Middle</h1>'
  },
  {
    coords:{lat:8.980603, lng:38.757759},
    content:'<h1>Super Start</h1>'
  }
];

  //Loop through markers
  for(var i = 0;i < markers.length;i++){
      addMarker(markers[i]);
  }

//mark a location
function addMarker(props){
var marker = new google.maps.Marker({
  position:props.coords,
  map:map,
  //custom marker
  //icon:props.iconImage
});
//check for customicon
if(props.iconImage){
    //Set icon image
    marker.setIcon(props.iconImage);
}

  // Check content

  if(props.content){
      //info tab on marker
 var infoWindow = new google.maps.InfoWindow({
  content:props.content
});
  }   //Listen for click on marker location on map.
  marker.addListener('click',function(){
  infoWindow.open(map, marker);
      });
  //Listen for click on map
  google.maps.event.addListener(map,'click',
  function(event){
      //add marker
      addMarker({coords:event.latLng});
  });
  
  }
}
var map;

function initialize_map() 
{
  var mapOptions = {
    center: geoPoint,
    zoom: 17,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        //position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
        //position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    scrollwheel: false,
    streetViewControlOptions: {
        //position: google.maps.ControlPosition.LEFT_TOP
    }
  };
  var map = new google.maps.Map(document.getElementById('maplayer'),
      mapOptions);

  var goldStar = {
    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.8,
    scale: 1,
    strokeColor: 'gold',
    strokeWeight: 14
  };

  var marker = new google.maps.Marker({
    position: geoPoint,
    icon: 'http://gdgrecife.com/extended/img/gdg-marker.png',
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize_map);

function addMarker() {
  var marker = new google.maps.Marker({
    position: geoPoint,
    icon: 'img/gdgbh-marker.png',
    map: map
  });
}

//animate header
var mustShake = false;

function init() {

    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 1,
            header = document.querySelector("header");
        if (distanceY > shrinkOn && mustShake==false) {
            document.getElementById("logo-evento").src = "img/logo-hover.png";
            $('.navbar').animate({'backgroundColor':'#FFFFFF', 'boxShadow' : '0 0 5px #000000'}, 600)
            $('.navbar-nav>li>a ').animate({'color':'#000000'}, 300)
            mustShake = true
        } else if (distanceY < shrinkOn && mustShake==true) {
            document.getElementById("logo-evento").src = "img/logo.png";
          $('.navbar').animate({'backgroundColor':'#00BCD4', boxShadow : "0 0 0px 0px rgba(100,100,200,0.4)"}, 600)
          $('.navbar-nav>li>a ').animate({'color':'#FFFFFF'}, 300)
          mustShake = false;
            
        }
    });
}
window.onload = init();

$("#main-nav ul li a[href^='#']").on('click', function(e) {
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top - 100
     }, 300, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});


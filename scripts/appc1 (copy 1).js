(function() {
  'use strict';

   var app = {    
    spinner: document.querySelector('.loader'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),    
  };

var spots = Array(60);
var i = 0;
var spotData = "|37.0123183:-1.0944678:Innovation street, Juja, Kiambu, Kenya:|?VM870:2 |37.0149674:-1.0969639:Jkuat Avenue Road, Juja, Kiambu, Kenya:|?VM870:2 |37.0156262222272:-1.1055638:Senate Car Park, Thika Road, Juja, Kiambu, Kenya:|?VM870:2 |37.01343:-1.0985026:n.s.c, JKUAT Avenue Road, Juja, Kiambu, Kenya:|?VM870:2 |37.0148681:-1.0960145:Admin, Welfare Street, Juja, Kiambu, Kenya:|?VM870:2 |37.0142939:-1.0966896:vc, Jkuat Avenue Road, Juja, Kiambu, Kenya:|?VM870:2 |37.013203:-1.0963925:jkuat hos, Bypass, Juja, Kiambu, Kenya:|?VM870:2 |37.0146416:-1.0957668:jkuat, Welfare Street, Juja, Kiambu, Kenya:|?VM870:2 |37.0147619:-1.0953051:ADMIN, Welfare Street, Juja, Kiambu, Kenya:|?VM870:2 |36.9735726049674:-1.12910845:Park, D398, Thika, Kiambu, Kenya:|?VM870:2 |36.800209:-1.2900917:Lenana Parking Lot Area, Lenana Road, Hurlingham, Найроби, Nairobi, 00100, Kenya:|?VM870:2 |36.8355363:-1.3112487:Vumira House Parking Lot, Daidai Road, South B, South C, Найроби, Nairobi, 00509, Kenya:|?VM870:2 |36.7885548766116:-1.27875675:Kenton Main Parking, Gichugu Road, Kileleshwa, Найроби, Nairobi, 00100, Kenya:|?VM870:2 |36.7801362699482:-1.28235355:Nyeri Road, Kileleshwa, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.8371212:-1.29051435:Factory Street, KIMC Staff Quaters, Nairobi West, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.8258505617545:-1.2707404:Forest Lane, Parklands, Найроби, Nairobi, 00600, Kenya:|?VM870:2 |36.805157:-1.2731722:Mama Mungai Road, Kileleshwa, Найроби, Nairobi, 97104, Kenya:|?VM870:2 |36.814371:-1.2384869:Soweto Road, Gigiri, Найроби, Nairobi, 00606, Kenya:|?VM870:2 |36.8786542532033:-1.2189081:USIU Road, Roysambu, Найроби, Nairobi, 00800, Kenya:|?VM870:2 |36.8176118460094:-1.2943503:Lower Hill Road, Madaraka Estate, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.7631075016318:-1.29878755:Ngong Road, Jamhuri, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.8948361597842:-1.29702395:Doonholm Road, Donholm, Найроби, Nairobi, 00202, Kenya:|?VM870:2 |36.8165496663319:-1.3121575:Langata Road, KIMC Staff Quaters, Blue Sky Estate, Найроби, Nairobi, 00509, Kenya:|?VM870:2 |36.8075930770127:-1.27428515:Professor Mourice Alala Road, Kileleshwa, Найроби, Nairobi, 46464, Kenya:|?VM870:2 |36.8134967385045:-1.3040671:Matumbato Road, KIMC Staff Quaters, Madaraka Estate, Найроби, Nairobi, 00509, Kenya:|?VM870:2 |36.7908800967722:-1.2997584:Nairobi County Council, Ngong Road, Hurlingham, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.8289153931171:-1.2897317:Moi Avenue, KIMC Staff Quaters, Nairobi West, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.8146357:-1.2315005:P. O. Box 67578, United Nations Avenue, Gigiri, Найроби, Nairobi, 00606, Kenya:|?VM870:2 |36.8350256023846:-1.3221504:Popo Road, South C, Mugoya Estate Phase 4, Найроби, Nairobi, 00509, Kenya:|?VM870:2 |36.8146607:-1.2405571:College Road, Gigiri, Найроби, Nairobi, 00606, Kenya:|?VM870:2 |36.9290670307434:-1.32926045:Tower Road, Nyayo Estate, Найроби, Nairobi, 18291, Kenya:|?VM870:2 |36.8352828733131:-1.32375065:South C, Mugoya Estate Phase 4, Найроби, Nairobi, 00509, Kenya:|?VM870:2 |36.8443146512234:-1.2804778:Meru Road, Eastleigh, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.8857681:-1.248197:Kasabuni, Missionary of Charity Road, Kiamaiko, Kariobangi, Найроби, Nairobi, 00611, Kenya:|?VM870:2 |36.7855642:-1.2666247:Church Road, Westlands, Найроби, Nairobi, 97104, Kenya:|?VM870:2 |36.780030012955:-1.30118005:Suna Road, Jamhuri, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.8260230962446:-1.2617353:Limuru Road, Parklands, Найроби, Nairobi, 00600, Kenya:|?VM870:2 |36.8238905085217:-1.2898483:Lt. Tumbo Drive, Central Business District, Nairobi West, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.7701896315391:-1.27999195:lavington mall, Mugumo Road, Kawangware, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.7687423819749:-1.3377261:Langata Road, Kibera, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.8005483877049:-1.3294098:Southern Bypass, Sharif Estate, Найроби, Nairobi, 00509, Kenya:|?VM870:2 |36.8496434:-1.3249181:Techno Service, Mombasa Road, Mugoya Estate Phase 4, Найроби, Nairobi, 00200, Kenya:|?VM870:2 |36.8126964877632:-1.23459265:United Nations Avenue, Gigiri, Найроби, Nairobi, 00606, Kenya:|?VM870:2 |36.7757579:-1.3090338:Ayany Car Park, Kibera Drive, Jamhuri, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.927000012996:-1.33236655:1st Tower Loop, Nyayo Estate, Найроби, Nairobi, 18291, Kenya:|?VM870:2 |36.8916136761122:-1.23199535:Aquatic drive, Kasarani, Найроби, Nairobi, 00507, Kenya:|?VM870:2 |36.8082456010644:-1.2891255:Jakaya Kikwete Road, Hurlingham, Найроби, Nairobi, 00100, Kenya:|?VM870:2 |36.8649200534711:-1.2619493:chiefs camp, Juja Road, Kariobangi, Найроби, Nairobi, 00611, Kenya:|?VM870:2 |36.8329979435584:-1.2999003:Machakos Road, KIMC Staff Quaters, Nairobi West, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.8069118170888:-1.271432:Wasawo Drive, Kileleshwa, Найроби, Nairobi, 97104, Kenya:|?VM870:2 |36.88273375:-1.2259682:Thika Road, Ngumba, Найроби, Nairobi, 00618, Kenya:|?VM870:2 |36.8151291915645:-1.2788153:Harry Thuku Road, Parklands, Найроби, Nairobi, 46464, Kenya:|?VM870:2 |36.8110136425445:-1.28635755:Processional Way, Hurlingham, Найроби, Nairobi, 00100, Kenya:|?VM870:2 |36.8236137:-1.2910085:Haile Sellassie Avenue, Central Business District, Nairobi West, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.7691538233907:-1.2772277:Walking / Jogging track, Kawangware, Найроби, Nairobi, 97104, Kenya:|?VM870:2 |36.8458017488203:-1.2407576:Kiambu Road, Ridgeways, Найроби, Nairobi, 00618, Kenya:|?VM870:2 |36.7841663417748:-1.30809225:unamed, Makina, Найроби, Nairobi, 30728, Kenya:|?VM870:2 |36.7650323782512:-1.3430695:Langata Road, Kibera, Найроби, Nairobi, Kenya:|?VM870:2 |36.8375275:-1.2953985:Commercial Street, KIMC Staff Quaters, Nairobi West, Найроби, Nairobi, 00101, Kenya:|?VM870:2 |36.8034704:-1.2570803:Mwanzi Road, Westlands, Найроби, Nairobi, 97104, Kenya:|?";


	

   var mymap = L.map('mapid').setView([-1.097,37.01421],17);
	mymap.locate({setView: true, maxZoom: 16});
	/*mymap.on('move', function (e) {
           routeControl.getPlan().setWaypoints([]);
        });*/
var myIcon2 = L.icon({
    iconUrl: 'images/parking2.png',
    shadowUrl: 'images/parkingShadow.png',
    iconAnchor: [22, 94],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
	iconSize:     [38, 95], 
    popupAnchor:  [-3, -76]	
});
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng, {icon:myIcon2}).addTo(mymap)
        .bindPopup("Your approximate location").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
}


   //mymap.options.minZoom = 16;
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap);
	mymap.on('locationfound', onLocationFound);


function markerOnClick(e)
{
 // alert("hi. you clicked the marker at " + e.latlng);
var routeControl = new L.Routing.control({
  waypoints: [
    L.latLng(-1.30809225,36.7841663417748),
    L.latLng(-1.097,37.01421)
  ]
}).addTo(mymap);
//routeControl.hide();
//routeControl.addTo(mymap);
}

//var popup = L.popup().setLatLng(latlng).setContent('<p>Hello world!<br />This is a nice popup.</p>').openOn(map);

for (; i < 60; i++){
	var lon = spotData.split("?")[i].split("|")[1].split(":")[1];
	var lat = spotData.split("?")[i].split("|")[1].split(":")[0]
	var marker = new L.marker([lon, lat]).addTo(mymap);
	marker.bindPopup(spotData.split("?")[i].split("|")[1].split(":")[2]).openPopup().on('click', markerOnClick);

}

//mymap.on('click', onMapClick);
	
  
  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  document.getElementById('butAdd').addEventListener('click', function() {
    // Open/show the add new city dialog
    app.toggleAddDialog(true);
  });
document.getElementById('search').addEventListener('click', function() {
    //document.getElementById('searchBox').className='functionalityBoxes';


    new L.Control.GeoSearch({
        provider: new L.GeoSearch.Provider.OpenStreetMap()
    }).addTo(mymap);

	document.getElementById('navigationBox').className='invisible';
	app.toggleAddDialog(false);
  });
  
document.getElementById('navigate').addEventListener('click', function() {
    document.getElementById('navigationBox').className='functionalityBoxes';
	document.getElementById('navigationBox').innerHTML='Drag the markers to the different end points'
	//document.getElementById('searchBox').className='invisible';
	app.toggleAddDialog(false);
	
	L.Routing.control({
     waypoints: [
        L.latLng(-1.097,37.01421),
        L.latLng(-1.09512,37.01453)
     ],
     routeWhileDragging: true
}).addTo(mymap);
  });

document.getElementById('gps').addEventListener('click', function() {
	//document.getElementById('main2').innerHTML = '<iframe class="mainIFrame" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openstreetmap.org/export/embed.html?bbox=36.9964599609375%2C-1.1025987941860569%2C37.0274019241333%2C-1.0765538905377086&amp;layer=mapnik&amp;marker=-1.0895763705081059%2C37.0119309425354" style="border: 1px solid black"></iframe><br/><small></small>';
	app.toggleAddDialog(false);
	document.getElementById('searchBox').className='invisible';
	document.getElementById('navigationBox').className='invisible';
	mymap.locate({setView: true, maxZoom: 16});
	function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);
 });
  document.getElementById('butAddCancel').addEventListener('click', function() {
    // Close the add new city dialog
    app.toggleAddDialog(false);
	document.getElementById('searchBox').className='invisible';
	document.getElementById('navigationBox').className='invisible';
  });


  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the add new city dialog.
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

  /************************************************************************
   *
   * Code required to start the app
   *
   * NOTE: To simplify this codelab, we've used localStorage.
   *   localStorage is a synchronous API and has serious performance
   *   implications. It should not be used in production applications!
   *   Instead, check out IDB (https://www.npmjs.com/package/idb) or
   *   SimpleDB (https://gist.github.com/inexorabletash/c8069c042b734519680c)
   ************************************************************************/

  app.selectedCities = localStorage.selectedCities;
  
 
  })();

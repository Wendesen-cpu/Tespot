//var url = `https://www.google.com/maps/place/${add}+Antonio+Schivardi,+88,+25123+Brescia+BS/@45.5599013,10.2338582,17z/data=!3m1!4b1!4m5!3m4!1s0x478177cca1e77cb9:0x9561324a657db60d!8m2!3d45.5599013!4d10.2360469`

//var cap 








mapboxgl.accessToken = 'pk.eyJ1IjoiZml0aGkiLCJhIjoiY2ttaXoxaGhoMGdtNjJ2bG55dnl6M2dnciJ9.uSe0YQh6IRg9tE2Pv5MlFw';

 navigator.geolocation.getCurrentPosition(successLoc,errorLoc);

function successLoc(pos){
    setupMap([pos.coords.longitude,pos.coords.latitude])
}

function errorLoc(err){}


function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center:{lat:45.52438539606402, lng: 10.209829250892493}
    });
    map.addControl(new mapboxgl.NavigationControl());

}




navigator.geolocation.getCurrentPosition(successLoc,errorLoc);

function successLoc(pos){
    console.log(pos);

}
function errorLoc(err){
    console.error(err)

}


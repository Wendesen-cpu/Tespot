var mynames = [];
var numberOfcenters = mynames.length
var check = 0;
function centerSelector2(a, b) {
  a.forEach(centers => {
    var arr = [];
    var count = b;
    document.getElementById('res').innerHTML = "";
    var state1 = document.getElementById('state').value;
    var citty = document.getElementById('city').value;
    fetch(`https://covid-19-testing.github.io/locations/${state1}/complete.json`)
      .then(response => response.json())
      .then(data => {
        data.forEach(element => {
          if (element.physical_address[0].city === citty) {
            if (element.name == centers)
              arr.push(element);
          }
        })
        console.log(arr);
        for (var i = 0; i < count; i++) {
          var nameOfCenter = arr[i].name;
          var phoneNumber = arr[i].phones[0].number;
          var descriptions = arr[i].description;
          var address = `${arr[i].physical_address[0].address_1}, postal code: ${arr[i].physical_address[0].postal_code}`
          var doc1 = document.createElement('p');
          var doc2 = document.createElement('p');
          var doc3 = document.createElement('p');
          var doc4 = document.createElement('p');
          var doc5 = document.createElement('b');
          doc1.innerHTML = nameOfCenter;
          doc2.innerHTML = phoneNumber;
          doc3.innerHTML = descriptions;
          doc4.innerHTML = address;
          doc5.appendChild(doc1);
          document.getElementById('res').appendChild(doc5);
          document.getElementById('res').appendChild(doc2);
          document.getElementById('res').appendChild(doc3);
          document.getElementById('res').appendChild(doc4);
        }
      })
  })
  // var doc5 = document.createElement('h3');
  // doc5.innerHTML = `There are totally ${count} test centers in this city`;
  // document.getElementById('res').appendChild(doc5);
}
function centerSelector() {
  var arr = [];
  document.getElementById('res').innerHTML = "";
  var count = 0;
  var state1 = document.getElementById('state').value;
  var citty = document.getElementById('city').value;
  fetch(`https://covid-19-testing.github.io/locations/${state1}/complete.json`)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        if (element.physical_address[0].city === citty) {
          count = count + 1;
          arr.push(element);
        }
      })
      for (var i = 0; i < count; i++) {
        var nameOfCenter = arr[i].name;
        var phoneNumber = arr[i].phones[0].number;
        var descriptions = arr[i].description;
        var address = `${arr[i].physical_address[0].address_1}, postal code: ${arr[i].physical_address[0].postal_code}`
        var doc1 = document.createElement('p');
        var doc2 = document.createElement('p');
        var doc3 = document.createElement('p');
        var doc4 = document.createElement('p');
        var doc5 = document.createElement('b');
        doc1.innerHTML = nameOfCenter;
        doc2.innerHTML = phoneNumber;
        doc3.innerHTML = descriptions;
        doc4.innerHTML = address;
        doc5.appendChild(doc1);
        document.getElementById('res').appendChild(doc5);
        document.getElementById('res').appendChild(doc2);
        document.getElementById('res').appendChild(doc3);
        document.getElementById('res').appendChild(doc4);
      }
    })
  // var doc5 = document.createElement('h3');
  // doc5.innerHTML = `There are totally ${count} test centers in this city`;
  // document.getElementById('res').appendChild(doc5);
}
console.log(mynames)
console.log(numberOfcenters);
document.getElementById('important').addEventListener('click', () => {
  if (check == 0) {
    centerSelector()
  }
  else if (check != 0 && mynames.length == 0) {
    console.log("NO Test centers nearby you")
  }
  else {
    centerSelector2(mynames, mynames.length)
  }
});
function distanceCalc(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}
window.onload = async () => {
  const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    return {
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    };
  };
  const coords = await getCoords();
  var currentLat = coords.lat;
  var CurrentLng = coords.long;
  // console.log(`Latitude: ${currentLat}   Longitude: ${CurrentLng}`)
  document.getElementById("important2").addEventListener('click', () => {
    // console.log(`Latitude: ${currentLat}   Longitude: ${CurrentLng}`)
    var state1 = document.getElementById('state').value;
    var citty = document.getElementById('city').value;
    var count;
    var mydistances = [];
    fetch(`https://covid-19-testing.github.io/locations/${state1}/complete.json`)
      .then(response => response.json())
      .then((data) => {
        data.forEach((element) => {
          var addr;
          var newCity;
          if (element.physical_address[0].city === citty) {
            count += 1;
            addr = element.physical_address[0].address_1;
            newCity = element.physical_address[0].city;
            //  console.log(elements);
            const sucesfulLokup = () => {
              // const {latitude,longitude} = position.coords;
              var url = `https://api.opencagedata.com/geocode/v1/json?q=${addr},${newCity}&key=484ef2b687f046d99c7d66cd1ef48892`;
              fetch(url)
                .then(res => res.json())
                .then(data => {
                  check = check + 1;
                  // console.log(data)
                  // console.log(data.results[0].annotations.DMS.lat)
                  // console.log(data.results[0].annotations.DMS.lng)
                  // console.log(formatter(data.results[0].annotations.DMS.lat))
                  // console.log(formatter(data.results[0].annotations.DMS.lng))
                  var testLat = formatter(data.results[0].annotations.DMS.lat);
                  var testLng = formatter(data.results[0].annotations.DMS.lng);
                  var distance = distanceCalc(currentLat, CurrentLng, testLat, testLng)
                  // mydistances.push(distance);
                  // console.log(mynames);
                  // console.log(mydistances);
                  // console.log(mydistances.sort())
                  if (distance < 10000) {
                    mynames.push(element.name);
                  }
                })
            }
            navigator.geolocation.getCurrentPosition(sucesfulLokup)
          }
        }
        )
      })
  })
}
function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = degrees + minutes / 60 + seconds / (60 * 60);
  if (direction == "S" || direction == "W") {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
}
function formatter(a) {
  var splitted = a.split(/[^\d\w]+/)
  var formatted = parseFloat(`${splitted[2]}.${splitted[3]}`);
  var newLatLong = ConvertDMSToDD(parseFloat(splitted[0]), parseFloat(splitted[1]), formatted, splitted[4])
  return newLatLong;
}
// console.log(formatter("33° 27' 53.64144 ))
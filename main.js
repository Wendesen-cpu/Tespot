// const spain_country_code = "ES";
// const germany_country_code = "DE";

function requirment_search(germany_country_code,spain_country_code){
     fetch(`https://sandbox.travelperk.com/travelsafe/restrictions?origin=${germany_country_code}&destination=${spain_country_code}&origin_type=country_code&destination_type=country_code&date=2021-3-24`, {
            method: 'GET',
            headers: {
                'Api-Version': '1',
                "Authorization": "ApiKey Xbp0hY.uJouyej9TKS6BX0bMLupvSnSSIB8E416"
            },
    })
        .then(response => response.json())
        .then(data => {
          console.log(data)
           // div created
           const div = document.getElementById("div1")

            //first p created and assigned to names
            const country_name = document.createElement("p");
            country_name.innerHTML = `OriginCountry: ${data.origin.name} => DestinationCountry: ${data.destination.name}`;

            //second p created and assigned to countrycode
            const country_code = document.createElement("p");
            country_code.innerHTML = `GermanyCode: ${data.origin.country_code} => SpainCode: ${data.destination.country_code}`;
           
            //thrid p create and assigned to authorization
            const authorazion_status = document.createElement("p");
            authorazion_status.innerHTML = `Authoriazation Status: ${data.authorization_status}`

            //forth p created and assigned to requirments
            const req_text = document.createElement("h3");
            req_text.innerHTML = "Requirments:";
            req_text.style.textAlign = "center";

            //Category_1
            const cat_1 = document.createElement("h4");
            cat_1.innerHTML = "Category-1:";

            const liul_cat = document.createElement("ul");
            const li_cat = document.createElement("li");
            li_cat.innerHTML =  `${data.requirements[0].details}`
            liul_cat.appendChild(li_cat);

            const liul_cat1 = document.createElement("ul");
            const li_cat1 = document.createElement("li");
            li_cat1.innerHTML =  `StartDate: ${data.requirements[0].start_date}`
            liul_cat1.appendChild(li_cat1);

            const liul_cat2 = document.createElement("ul");
            const li_cat2 = document.createElement("li");
            li_cat2.innerHTML =  `EndDate: ${data.requirements[0].end_date}`
            liul_cat2.appendChild(li_cat2);

            const liul_cat3 = document.createElement("ul");
            const li_cat3 = document.createElement("li");
            li_cat3.innerHTML =  `${data.requirements[0].summary}`
            liul_cat3.appendChild(li_cat3);

            //Category_2
            const cat_2 = document.createElement("h4");
            cat_2.innerHTML = "Category-2:";
            const a_tag = document.createElement("a");
            const tex_node = document.createTextNode("Find the form");
            a_tag.setAttribute("href",`${data.requirements[1].documents[0]. document_url}`);
            a_tag.appendChild(tex_node);
            a_tag.style.textDecoration = "none"
            a_tag.style.paddingLeft="45px"

            const liul2_cat = document.createElement("ul");
            const li2_cat = document.createElement("li");
            li2_cat.innerHTML =  `${data.requirements[1].details}`
            liul2_cat.appendChild(li2_cat);

            const liul2_cat3 = document.createElement("ul");
            const li2_cat3 = document.createElement("li");
            li2_cat3.innerHTML =  `${data.requirements[1].summary}`
            liul2_cat3.appendChild(li2_cat3);

            const sum_ry = document.createElement("p");
            sum_ry.innerHTML = `${data.summary}`

            // //appending the childs with div
             div.appendChild(country_name);
             div.appendChild(country_code);
             div.appendChild(authorazion_status);
            div.appendChild(req_text);

            div.appendChild(cat_1)
            div.appendChild(liul_cat)
            div.appendChild(liul_cat1)
            div.appendChild(liul_cat2)
            div.appendChild(liul_cat3)

            div.appendChild(cat_2)
            div.appendChild(liul2_cat) 
            div.appendChild(a_tag);
            div.appendChild(liul2_cat3)
            div.appendChild(sum_ry)
     
            //Styling the div
            div.style.backgroundColor = "grey"
            div.style.width = "800px"
            div.style.height = "700px"
            div.style.paddingLeft = "10px"
            document.body.appendChild(div) 


        
        })

    }

    window.onload=function(){
        requirment_search("DE","ES");
     
     }
   
    
    
















// function locations(){
// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
//   };
  
//   function success(pos) {
//     var crd = pos.coords;
  
//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//   }
  
//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
//   }
  
//   navigator.geolocation.getCurrentPosition(success, error, options);


// }

// locations()











//var url = `https://www.google.com/maps/place/${add}+Antonio+Schivardi,+88,+25123+Brescia+BS/@45.5599013,10.2338582,17z/data=!3m1!4b1!4m5!3m4!1s0x478177cca1e77cb9:0x9561324a657db60d!8m2!3d45.5599013!4d10.2360469`

//var cap 
// mapboxgl.accessToken = 'pk.eyJ1IjoiZml0aGkiLCJhIjoiY2ttaXoxaGhoMGdtNjJ2bG55dnl6M2dnciJ9.uSe0YQh6IRg9tE2Pv5MlFw';

//  navigator.geolocation.getCurrentPosition(successLoc,errorLoc);

// function successLoc(pos){
//     setupMap([pos.coords.longitude,pos.coords.latitude])
// }

// function errorLoc(err){}


// function setupMap(center){
//     const map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         zoom: 15,
//         center:{lat:45.52438539606402, lng: 10.209829250892493}
//     });
//     map.addControl(new mapboxgl.NavigationControl());

//}
//Api for the covid test centers in US
// function NameOfTestCenters(stateName){
//     var url = `https://covid-19-testing.github.io/locations/${stateName}/complete.json`;
//     fetch(url)
//       .then(res => res.json())
//       .then(data => console.log(data[0].phones[0].number))
//     //     data.forEach(element=>{
//     //       console.log(element.name)
//     //   }))
// }

// NameOfTestCenters('california');


//converting lat,long to name of the place and viceversal
// const sucesfulLokup = position=>{
//   const {latitude,longitude} = position.coords;
//   fetch(`https://api.opencagedata.com/geocode/v1/json?q=via milano,brescia&key=484ef2b687f046d99c7d66cd1ef48892`)
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// navigator.geolocation.getCurrentPosition( sucesfulLokup)




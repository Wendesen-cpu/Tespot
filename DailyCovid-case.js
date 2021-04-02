// The part about Daily Covid19 cases
var d = new Date();
dd = parseFloat(d.getMonth()) ;
var currentDates = "3-31-2021" //`${d.getMonth()+1}-${d.getDate()-1}-${d.getFullYear()}`;
var url = `https://covid19.mathdro.id/api/daily/${currentDates}`;
console.log(url);
var calculator= ()=>
 {
      var country = document.getElementById("state1").value;
      var region = document.getElementById("city1").value;
      document.getElementById('covid').innerHTML = '';
      fetch(url)
      .then(response => response.json())
      .then(json => json.forEach(element => {
          if(element.countryRegion=== country){
                  if(element.provinceState === region){
                      var confirmed = `Total Confirmed Cases: ${element.confirmed}`;
                      var deaths = `Total Death: ${element.deaths}`;
                      var recovered = `Recovered: ${element.recovered}`;
                      var active = `Active case: ${element.active}`;
                      var conf = document.createElement("p");
                      var deth = document.createElement("p");
                      var reco = document.createElement("p");
                      var activ = document.createElement("p");
                      conf.innerHTML = confirmed;
                      deth.innerHTML = deaths;
                      reco.innerHTML = recovered;
                      activ.innerHTML = active;
                      document.getElementById('covid').appendChild(conf)
                      document.getElementById('covid').appendChild(deth)
                      document.getElementById('covid').appendChild(reco)
                      document.getElementById('covid').appendChild(activ)
                      document.getElementById("state1").value = "";
                      document.getElementById("city1").value = "";
                  }
          }  }
      ) 
  )
}
  document.getElementById('import').addEventListener("click", calculator)

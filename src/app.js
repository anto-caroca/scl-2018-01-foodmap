const pModal = document.getElementById('pModal')
const select = document.getElementById('foodList')
const ver = document.getElementById('ver-btn')
let food
let msn = document.getElementById("modalP");
let modalHeader = document.getElementById("modalH");
let address;
let restaurants
function getData (method, url) {
      return new Promise(function (resolve, reject) {
       var xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
           resolve(xhr.response)
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            })
          }
        }
        xhr.onerror = function () {
         reject({
            status: this.status,
            statusText: xhr.statusText
          })
        }
        xhr.send()
      })
     }
    
     getData('GET', 'https://places.demo.api.here.com/places/v1/discover/search?at=-33.4167%2C-70.65&q=restaurant&app_id=YTwDUxFfBXp7TI2GimXS&app_code=qlKZLMttFtDmjErf3WAolA').then(function (data) {
   restaurants = JSON.parse(data)
 // console.log(Object.entries(restaurants.results.items[19]))  //[19] = indice restaurant La PLaya
 //let indexRest = Object.entries(restaurants.results.items[19]);
 //console.log(indexRest[6][1]) // muestra dirección // Avenida Arzobispo Valdivieso<br/>8420000 Cementerios, Recoleta, Región Metropolitana de Santiago
  console.log(restaurants) // Calle Profesor Alberto Zañartu 852<br/>8420000 Cementerios, Recoleta<br/>Chile
  
   
for (let i = 0; restaurants.results.items.length; i++){
  select.options[select.options.length] = new Option(restaurants.results.items[i].title, restaurants.results.items[i].title)
}
           xhr.open()
         }).catch(function (err) {
         })
                 
function changeOption(){
  let x = select.selectedIndex;
  let y = select.options;
  let indexRest = Object.entries(restaurants.results.items[x]);
  let vicinity = indexRest[6][1];

  $('#myModal').modal();
  modalHeader.innerHTML= ( y[x].text); 
  msn.innerHTML= (" Dirección: " + vicinity);   
}
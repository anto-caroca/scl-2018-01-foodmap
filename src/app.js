const pModal = document.getElementById('pModal')
const select = document.getElementById('foodList')
const ver = document.getElementById('ver-btn')
let food

ver.addEventListener('click', showModal)

function showModal(){
  $('#myModal').modal()
}

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
  let restaurants = JSON.parse(data)
  console.log(restaurants)
  
  // let c = Array.from(restaurants.results.items) 
  /// contenido.innerHTML += 
 // Object.entries(c).forEach((x) => document.write(x[1].title));
  
for (let i = 0; restaurants.results.items.length; i++){
  
  select.options[select.options.length] = new Option(restaurants.results.items[i].title, restaurants.results.items[i].title)
}
 select.addEventListener('change', changeOption)

/*function changeOption(){ NO SELECCIONA OPCION
  food = select.selectedIndex
  console.log(food)
}
  changeOption();*/

           xhr.open()
         }).catch(function (err) {
         })
        
          
        
    
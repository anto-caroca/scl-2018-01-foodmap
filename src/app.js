let contenido = document.querySelector('#contenido')
const btn = document.getElementById('obtener') 

function traer(){
  btn.style.display='none'
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
  contenido.innerHTML = ''
  Object.entries(restaurants)

    contenido.innerHTML += `
    <tr>
      <td> ${restaurants.results.items[0].title}</td>
      <td>${restaurants.results.items[0].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[1].title}</td>
      <td>${restaurants.results.items[1].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[2].title}</td>
      <td>${restaurants.results.items[2].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[3].title}</td>
      <td>${restaurants.results.items[3].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[4].title}</td>
      <td>${restaurants.results.items[4].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[5].title}</td>
      <td>${restaurants.results.items[5].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[6].title}</td>
      <td>${restaurants.results.items[6].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[7].title}</td>
      <td>${restaurants.results.items[7].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[8].title}</td>
      <td>${restaurants.results.items[8].vicinity}</td>
    </tr>
    <tr>
      <td> ${restaurants.results.items[9].title}</td>
      <td>${restaurants.results.items[9].vicinity}</td>    
    </tr>
  `
           xhr.open()
         }).catch(function (err) {
         })
       
        
        }         
        
    
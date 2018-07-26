
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
  let output = ''
  Object.entries(restaurants)
  
    output += `
    <ul>
         <li>Title: ${restaurants.results.items[19].title}</li>
         <li>Dirección: ${restaurants.results.items[19].vicinity}</li>
    </ul>
         `
   
           document.getElementById('template').innerHTML = output
           xhr.open()
         }).catch(function (err) {
         })
       
        
                  
        
     //  <li>Dirección: ${Object.entries(restaurants.search.context.location.address)}</li>
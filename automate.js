
var axios =require("axios")
function automate(){
axios.get('/user?ID=12345') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})

axios.get('/user?ID=12345') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})

axios.get('/user?ID=12345') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})

axios.get('/user?ID=12345') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})
}

setInterval(automate , 120000)

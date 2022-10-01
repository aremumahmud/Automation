
var axios =require("axios")
function automate(){
axios.get('https://mongodbService.aremzy.repl.co/') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})

axios.get('https://authService.aremzy.repl.co/') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})

axios.get('https://fileUploadService.aremzy.repl.co/') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})

axios.get('https://mudremcloudstore.aremzy.repl.co/') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})
}

axios.get('http://cryptocoinsmart.crypsc.repl.co/') 
.then(function (response){  console.log(response); }) 
.catch(function (error) {  console.log(error)})
}
console.log("started")
setInterval(automate , 600000)
require("http").createServer().listen(process.env.PORT)

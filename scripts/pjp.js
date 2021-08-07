//window.location.reload(true)

function pics() {
var pi=document.getElementById("pics")
var po=document.getElementById("po")
pi.style.display=""
po.style.display="none"
}
var pic= new Array (
"images/Araf.jpg" , "images/Mosiur.jpg" , "images/Raktim.jpg" , "images/Joydip.jpg"
)
var name= new Array (
"Araf","Mosiur","Raktim","Joydip"
)
var num=0
function prev() {
var img = document.getElementById("img")
num--
if (num<0){
num=0
}
img.src=pic[num]
img.alt=name[num]
}
function next() {
var img = document.getElementById("img")
num++
if (num>=pic.length){
num=0
}
img.src=pic[num]
img.alt=name[num]
}

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks! \n We will contact you ASAP";
    var mgc = document.getElementById("mgk")    
    mgc.style.display=""
}

function error() {
    status.classList.add("error");
    status.innerHTML = "Shitbag! \n Reload the page and fill the form correctly";
     var sib = document.getElementById("sub")
    sib.onclick="location.href = 'index.html';"
}

  // handle the form submission event
form.addEventListener("submit", function (ev) {
ev.preventDefault();
var data = new FormData(form);
ajax(form.method, form.action, data, success, error);
});
});
  
  // helper function for sending an AJAX request
  
function ajax(method, url, data, success, error) {
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onreadystatechange = function () {
if (xhr.readyState !== XMLHttpRequest.DONE) return;
if (xhr.status === 200) {
success(xhr.response, xhr.responseType);
} else {
error(xhr.status, xhr.response, xhr.responseType);
}
};
 xhr.send(data);
}

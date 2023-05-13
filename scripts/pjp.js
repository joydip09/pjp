//window.location.reload(true)

function pics() {
var pi=document.getElementById("pics")
var po=document.getElementById("po")
pi.style.display=""
po.style.display="none"
}
var pic= ["images/Araf.jpg" , "images/Mosiur.jpg" , "images/Raktim.jpg" , "images/Joydip.jpg"]
var name=["Araf" , "Mosiur" , "Raktim" , "Joydip"]
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
function menu() {
				var list = document.getElementById("list")
				var bar = document.getElementById("bar")
				list.style.display=""
				bar.style.display="none"
}
function hide() {
				var list = document.getElementById("list")
				list.style.display="none"
				var bar = document.getElementById("bar")
				bar.style.display=""
}
function con() {
				var fom = document.getElementById("container")
				fom.style.display=""
				var wanna = document.getElementById("wanna")
				wanna.style.display=""
				var join = document.getElementById("con")
				join.style.display="none"
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

// Get the canvas element
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the number of meteors and their size
const numMeteors = 30;
const meteorSize = 3;

// Create an array of meteor objects
const meteors = [];

for(let i = 0; i < numMeteors; i++) {
  // Create a new meteor object
  const meteor = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speed: Math.random() * 5 + 1,
    angle: Math.random() * Math.PI * 2
  };
  // Add the meteor object to the array
  meteors.push(meteor);
}

// Draw the meteors on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Loop through the meteors
  for(let i = 0; i < numMeteors; i++) {
    const meteor = meteors[i];
    
    // Calculate the new position of the meteor
    meteor.x += Math.cos(meteor.angle) * meteor.speed;
    meteor.y += Math.sin(meteor.angle) * meteor.speed;
    
    // Draw the meteor on the canvas
    ctx.beginPath();
    ctx.arc(meteor.x, meteor.y, meteorSize, 0, Math.PI * 2);
    ctx.fillStyle = 'grey';
    ctx.fill();
  }
  
  // Request a new animation frame
  requestAnimationFrame(draw);
}

// Start the animation
draw();

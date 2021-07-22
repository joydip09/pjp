function pics() {
var pi=document.getElementById("pics")
var po=document.getElementById("po")
pi.style.display=""
po.style.display="none"
}
var pic= new Array (
"images/Araf.jpg","images/Mosiur.jpg","images/Raktim.jpg","images/Joydip.jpg"
)
var name= [
"Araf","Mosiur","Raktim","Joydip"
]
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

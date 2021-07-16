function pics() {
var pi=document.getElementById("pics")
var po=document.getElementById("po")
pi.style.display=""
po.style.display="none"
}
var pic= new Array (
"file:///sdcard/My/Pjp-web/Media/Araf.jpg","file:///sdcard/My/Pjp-web/Media/Mosiur.jpg","file:///sdcard/My/Pjp-web/Media/Raktim.jpg","file:///sdcard/My/Pjp-web/Media/Joydip.jpg"
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
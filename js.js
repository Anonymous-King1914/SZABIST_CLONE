let slide = document.getElementById("slider");
let arr = ["./img/Poter resting at urdokas camp.jpg","./img/Awsome K2 mountain-k2 base camp trek.jpg","./img/baltoro trek pakistan.jpg","./img/Broad peak baltoro k2.jpg","./img/Goro 2 camp baltoro glacier.jpg"]

let currentImg = 0

setInterval(()=>{
currentImg++
if(currentImg > arr.length-1){
    console.log(currentImg)
    currentImg=0
}
    slide.src = arr[currentImg]
},4000)


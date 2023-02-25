var modal = document.getElementsByClassName('modal')[0];

var a = document.getElementsByClassName('place-buy-btn');

var n = a.length;

for(let i=0;i<n-1;++i){
    a[i].onclick=function(){
        modal.style.display = "flex";
    }
}

document.getElementById('close').onclick=function(){
    modal.style.display = "none";
}

var imageCount = 0;

/*
    -set các img V
    -select ra các img
    -thêm từng ảnh vào  bằng cách xoá class
*/
var imageSliderElements = document.querySelectorAll(".slider");

var imgLength = imageSliderElements.length;

let temp = imageSliderElements[imgLength-1];




setInterval(function(){

    //ẩn hiện ảnh
    if(imageCount == 0){
        temp.classList.add('hidden-image');
        imageSliderElements[0].classList.remove('hidden-image');
        // return;
    }
    else{
        imageSliderElements[imageCount-1].classList.add('hidden-image');
        imageSliderElements[imageCount].classList.remove('hidden-image');
        // return;
    }
    ++imageCount;
    if(imageCount == imgLength){
        imageCount = 0;
    }
},3000)
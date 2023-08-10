var modal = document.getElementsByClassName("modal")[0];

document.querySelectorAll(".place-buy-btn").forEach((e) => {
	e.onclick = function () {
		modal.style.display = "flex";
	};
});

document.getElementById("close").onclick = function () {
	modal.style.display = null;
};

var imageCount = 0;

/*
    -set các img V
    -select ra các img
    -thêm từng ảnh vào  bằng cách xoá class
*/
var imageSliderElements = document.querySelectorAll(".slider");

var imgLength = imageSliderElements.length;
const headerHeight = document.getElementById("header").clientHeight;
let temp = imageSliderElements[imgLength - 1];
var onMenuClick = () => {
	if (document.getElementById("header").clientHeight === headerHeight) {
		document.getElementById("header").style.height = "auto";
	} else {
		document.getElementById("header").style.height = null;
	}
};
document.querySelectorAll("a[href ^= '#']").forEach((e) => {
	if (e.nextElementSibling) {
		e.preventDefault();
	} else {
		e.onclick = onMenuClick;
	}
});
setInterval(function () {
	//ẩn hiện ảnh
	if (imageCount == 0) {
		temp.classList.add("hidden-image");
		imageSliderElements[0].classList.remove("hidden-image");
		// return;
	} else {
		imageSliderElements[imageCount - 1].classList.add("hidden-image");
		imageSliderElements[imageCount].classList.remove("hidden-image");
		// return;
	}
	++imageCount;
	if (imageCount == imgLength) {
		imageCount = 0;
	}
}, 3000);

var myImages = Array.from(document.querySelectorAll(".img-fluid"));
var lightbox = document.querySelector(".lightbox-container");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var close = document.getElementById("close");
var currentImgIndex = 0;

const showLightBox = (e) => {
  lightbox.style.transform = "scale(1,1)";
  lightbox.firstElementChild.style.transform = "scale(1,1)";
  var imgSrc = e.target.src;
  currentImgIndex = myImages.indexOf(e.target);
  lightbox.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
};
myImages.map((image) => {
  image.addEventListener("click", showLightBox);
});
const closeLighBox = (e) => {
  lightbox.style.transform = "scale(0,0)";
};

close.addEventListener("click", closeLighBox);

const goNext = (e) => {
  currentImgIndex++;
  if (currentImgIndex == myImages.length) {
    currentImgIndex = 0;
  }

  lightbox.firstElementChild.style.backgroundImage =
    "url(" + myImages[currentImgIndex].src + ")";
};

next.addEventListener("click", goNext);

const goPrev = (e) => {
  currentImgIndex--;
  if (currentImgIndex == -1) {
    currentImgIndex = myImages.length - 1;
  }
  lightbox.firstElementChild.style.backgroundImage =
    "url(" + myImages[currentImgIndex].src + ")";
};

prev.addEventListener("click", goPrev);

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    closeLighBox();
  } else if (e.keyCode == 39) {
    goNext();
  } else if (e.keyCode == 37) {
    goPrev();
  }
});

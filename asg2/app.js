const carouselImages3 = Array.from(document.querySelectorAll(".slide"));
var currentIndex3 = 0;

function displayImage3() {
  for (let j = 0; j < carouselImages3.length; j++) {
    carouselImages3[j].style.display = "none";
  }
  carouselImages3[currentIndex3].style.display = "block";
}

function moveLeft3() {
  if (currentIndex3 == 0) {
    currentIndex3 = carouselImages3.length - 1;
  } else {
    currentIndex3--;
  }
  displayImage3(); 
}

function moveRight3() {
  if (currentIndex3 == carouselImages3.length - 1) {
    currentIndex3 = 0;
  } else {
    currentIndex3++;
  }  
  displayImage3(); 
}

displayImage3();


var carouselImages = Array.from(document.querySelectorAll(".img1"))
var currentIndex = 0;

function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}

function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  displayImage(); 
}

function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }  
  displayImage(); 
}

displayImage();


var carouselImages1 = Array.from(document.querySelectorAll(".img2"))
var currentIndex1 = 0;

function displayImage1() {
  for (let j = 0; j < carouselImages1.length; j++) {
    carouselImages1[j].style.display = "none";
  }
  carouselImages1[currentIndex1].style.display = "flex";
}

function moveLeft1() {
  if (currentIndex1 == 0) {
    currentIndex1 = carouselImages1.length - 1;
  } else {
    currentIndex1--;
  }
  displayImage1(); 
}

function moveRight1() {
  if (currentIndex1 == carouselImages1.length - 1) {
    currentIndex1 = 0;
  } else {
    currentIndex1++;
  }  
  displayImage1(); 
}

displayImage1();


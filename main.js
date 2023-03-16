let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let pagElement = document.createElement("ul");
pagElement.setAttribute("id", "pag");

for (let i = 1; i <= slidesCount; i++) {
    let pagItem = document.createElement("li");
    pagItem.setAttribute("data-index", i);
    pagItem.appendChild(document.createTextNode(i));
    pagElement.appendChild(pagItem);
    
}

document.getElementById("indicators").appendChild(pagElement);

let pagUl = document.getElementById("pag");
let pagBullets = Array.from(document.querySelectorAll("#pag li"));

for (let i = 0; i < pagBullets.length; i++) {
    pagBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
    
}

theChecker();

function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false
    } else {
        currentSlide++
        theChecker();
    }
};

function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
      return false;
    } else {
      currentSlide--;
      theChecker();
    }
};

function theChecker() {
    slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;
    removeallActive();
    sliderImages[currentSlide - 1].classList.add("active");
    pagUl.children[currentSlide - 1].classList.add("active");

    if (currentSlide === 1) {
        prevButton.classList.add("disabled")
    } else {
        prevButton.classList.remove("disabled")
    }
    
    if (currentSlide === slidesCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
        
    }
}

function removeallActive() {
    sliderImages.forEach((img) => {
        img.classList.remove("active");
    });

    pagBullets.forEach((bullet)=> {
        bullet.classList.remove("active");
    });
}
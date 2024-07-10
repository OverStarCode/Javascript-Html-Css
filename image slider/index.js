var imagesArray = ["./images/1.jpg", "./images/2.jpg",
     "./images/3.jpg", "./images/4.jpg", "./images/5.jpg",
      "./images/6.jpg"
    ];

var Slider_img = document.querySelector(".slider img");

var currentImageIndex = 0;

var prevButton = document.querySelector("#prev");

var nextButton = document.querySelector("#next");

for (var i = 0; i < imagesArray.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", function() {
        currentImageIndex = parseInt(this.getAttribute("data-index"));
        displayImage();
    });
    dot.setAttribute("data-index", i);
    document.querySelector(".dots").appendChild(dot);
}

function displayImage() {
  
    Slider_img.src = imagesArray[currentImageIndex];

    document.querySelectorAll(".dots .dot").forEach(function(dot) {
        dot.classList.remove("active");
    });

   document.querySelectorAll(".dots .dot")[currentImageIndex].classList.add("active")

 
   
}

displayImage();

// show dots of the number of images



prevButton.addEventListener("click", function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = imagesArray.length - 1;
    }
    displayImage();
})

nextButton.addEventListener("click", function() {
    currentImageIndex++;
    if (currentImageIndex >= imagesArray.length) {
        currentImageIndex = 0;
    }
    displayImage();

})

// change the image and dot color when hovering over it

document.querySelectorAll(".dots .dot").forEach(function(dot) {
    dot.addEventListener("mouseover", function() {
        currentImageIndex = parseInt(this.getAttribute("data-index"));
        displayImage();
        this.classList.add("active");

        document.querySelectorAll(".dots .dot").forEach(function(dot) {
            dot.classList.remove("active");
        });
    
       document.querySelectorAll(".dots .dot")[currentImageIndex].classList.add("active")
    
    });
    dot.addEventListener("mouseout", function() {
        this.classList.remove("active");
        document.querySelectorAll(".dots .dot").forEach(function(dot) {
            dot.classList.remove("active");
        });
    
       document.querySelectorAll(".dots .dot")[currentImageIndex].classList.add("active")
    
    });


});

// autoplay

var autoPlayInterval = setInterval(function() {
    currentImageIndex++;
    if (currentImageIndex >= imagesArray.length) {
        currentImageIndex = 0;
    }
    displayImage();
}, 9000);
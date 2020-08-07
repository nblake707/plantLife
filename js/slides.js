//selecting all images and layer them based on the z-index
const slideArea = document.querySelector("div.slides");
const images = slideArea.querySelectorAll("img");

let currentSlide = 0;
let z = 1;

// Change slide based on z-index when slide area is clicked
slideArea.addEventListener("click", () => {
    currentSlide = currentSlide + 1;
    z = z + 1;

    if (currentSlide > images.length -1){
        currentSlide = 0;
    }

    // remove the animation from the style for every image
    images.forEach(image => {
      image.style.animation = "";  
    })

    //pick the right image
    images[currentSlide].style.zIndex = z;
    images[currentSlide].style.animation = "fade 0.5s";
})

slideArea.addEventListener("mouseover", () => {
    images.forEach(image => {
        const x = 100 * Math.random();
        const y = 100 * Math.random();
    
        image.style.transform = `translate(${x}px,${y}px)`;
    })
})


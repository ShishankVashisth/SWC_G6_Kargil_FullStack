const images = [

    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",

    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",

    "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200",

    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",

    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200"

];

let currentIndex = 0;

const image =
    document.getElementById("carouselImage");

const nextBtn =
    document.getElementById("nextBtn");

const prevBtn =
    document.getElementById("prevBtn");

const container =
    document.querySelector(".carousel-container");

image.src = images[currentIndex];

function showImage(index){

    image.src = images[index];
}

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage(currentIndex);
}

function prevImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
}

nextBtn.addEventListener(
    "click",
    nextImage
);

prevBtn.addEventListener(
    "click",
    prevImage
);

let autoSlide =
    setInterval(nextImage, 3000);

container.addEventListener(
    "mouseenter",
    () => {
        clearInterval(autoSlide);
    }
);

container.addEventListener(
    "mouseleave",
    () => {
        autoSlide =
            setInterval(nextImage, 3000);
    }
);
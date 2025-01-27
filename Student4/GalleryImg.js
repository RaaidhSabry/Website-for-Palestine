
// initialising all contents 

    let currentImgIndex = 0;
    const imgItems = document.querySelectorAll('.imgZoom');
    const fullscreenContainer = document.querySelector('.fullscreen');
    const fullscreenImg = document.querySelector('.fullscreenImg');
    const fullscreenDescription = document.querySelector('.fullscreenDescription');
    const closeButton = document.querySelector('.closeButton');
    const previousButton = document.querySelector('.previousButton');
    const nextButton = document.querySelector('.nextButton');


    // function to enlarge image in container 

    function enlargeImg(imgElement) {
    imgElement.style.transform = 'scale(1.5)'; 
    imgElement.parentNode.style.zIndex = '1'; 
    imgElement.nextElementSibling.style.opacity = '1'; 
    }

    // function to move back to original size for image in container 

    function resetImgSize(imgElement) {
    imgElement.style.transform = 'scale(1)'; 
    imgElement.parentNode.style.zIndex = '0'; 
    imgElement.nextElementSibling.style.opacity = '0'; 
    }

    // function to open an image in the fullscreen mode

    function openFullscreen(imgElement) {
        currentImgIndex = Array.from(imgItems).indexOf(imgElement.parentNode);
        
        fullscreenImg.src = imgElement.src;
        fullscreenDescription.innerHTML = imgElement.nextElementSibling.innerHTML;
        
        fullscreenContainer.classList.add('active');
        document.body.style.overflow = 'hidden'; 

        fullscreenImg.addEventListener('mouseover', showDescription);
        fullscreenImg.addEventListener('mouseout', hideDescription);
    
        previousButton.addEventListener('click', showPreviousImage);
        nextButton.addEventListener('click', showNextImage);
        document.addEventListener('keydown', handleKeyPress);
    }

    // function to close the fullscreen mode 
        
    function closeFullscreen() {
        fullscreenContainer.classList.remove('active');
        document.body.style.overflow = '';
        fullscreenImg.addEventListener('mouseover', showDescription);
        fullscreenImg.addEventListener('mouseout', hideDescription);

        document.removeEventListener('keydown', handleKeyPress);
    }

    // function to show description when image is hovered 

    function showDescription(){
        fullscreenDescription.style.opacity = '1';
    }

    // function to hide description when cursor moves away from the image 

    function hideDescription(){
        fullscreenDescription.style.opacity = '0';
    }

    // function to move to next image in gallery slider in fullscreen mode 

    function showNextImage() {
        currentImgIndex++;
        if (currentImgIndex >= imgItems.length) {
            currentImgIndex = 0; 
        }
    
        const nextImg = imgItems[currentImgIndex].querySelector('img');
        fullscreenImg.src = nextImg.src;
        fullscreenDescription.innerHTML = nextImg.nextElementSibling.innerHTML;
    }

    // function to move to previous image in gallery slider in fullscreen mode 


    function showPreviousImage() {
        currentImgIndex--;
        if (currentImgIndex < 0) {
            currentImgIndex = imgItems.length - 1; 
        }
            
        const prevImg = imgItems[currentImgIndex].querySelector('img');
        fullscreenImg.src = prevImg.src;
        fullscreenDescription.innerHTML = prevImg.nextElementSibling.innerHTML;
    }

    // function to handle fullscreen mode using the keys 
        
    function handleKeyPress(e) {
        if (e.key === 'Escape') {
            closeFullscreen();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPreviousImage();
        }
    }
        
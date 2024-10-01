function showimage() {
    
    const dropdown = document.querySelector('.dropdown');

 
    const selectedFruit = dropdown.value;

   
    const imageContainer = document.getElementById('image-container');

    imageContainer.innerHTML = '';

    
    if (selectedFruit) {
        const img = document.createElement('img'); 
        img.src = `images/${selectedFruit}.jpg`; 
        img.alt = selectedFruit; 
        img.style.width = '100%'; 
        img.style.height = 'auto'; 

        imageContainer.style.backgroundImage = 'none';

        imageContainer.appendChild(img);
    } else {
        
        imageContainer.innerHTML = 'Please select a fruit to see the image.';
    }
}

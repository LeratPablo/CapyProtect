window.addEventListener('load', checkBoxes);

function checkBoxes() {
    const image = document.createElement('img');
    image.src = '../assets/TheRock-transformed.png';
    image.classList.add('center-image');
    image.classList.add('hide'); // Ajout d'une classe pour masquer l'image initialement
    document.body.appendChild(image);

    // Attendez un court délai avant de rendre l'image visible
    setTimeout(function() {
        image.classList.remove('hide');
    }, 15000); // Délait avant apparition de l'image en ms (15s)
}
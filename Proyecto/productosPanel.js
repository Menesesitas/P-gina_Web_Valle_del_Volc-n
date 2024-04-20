// Array de imágenes
const images = [
    'images/producto1.jpeg',
    'images/producto2.jpeg',
    'images/producto3.jpeg',
    'images/producto4.jpeg'
];

const photoPanel = document.getElementById('photoPanel');

// Crear el panel de imágenes
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    photoPanel.appendChild(imgElement);
});

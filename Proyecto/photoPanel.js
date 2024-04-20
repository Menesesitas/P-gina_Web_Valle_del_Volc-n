// Datos de las fotos originales
const originalPhotos = [
    { src: 'images/panel1.jpeg', alt: 'Foto 1' },
    { src: 'images/panel2.jpeg', alt: 'Foto 2' },
    { src: 'images/panel3.jpeg', alt: 'Foto 3' }
];

// Datos de las nuevas fotos
const newPhotos = [
    { src: 'images/panel11.jpeg', alt: 'Nueva Foto 1' },
    { src: 'images/panel21.jpeg', alt: 'Nueva Foto 2' },
    { src: 'images/panel31.jpeg', alt: 'Nueva Foto 3' }
];

function generatePhotoPanel() {
    const photoPanel = document.getElementById('photoPanel');

    // Limpiar el contenido existente del panel
    photoPanel.innerHTML = '';

    originalPhotos.forEach((photo, index) => {
        const thumbnailContainer = document.createElement('div');
        thumbnailContainer.classList.add('thumbnail-container');

        const thumbnail = document.createElement('img');
        thumbnail.src = photo.src;
        thumbnail.alt = photo.alt;
        thumbnail.classList.add('thumbnail');

        const fullImg = document.createElement('img');
        fullImg.src = newPhotos[index].src;
        fullImg.alt = newPhotos[index].alt;
        fullImg.classList.add('full-image', 'fade-in');
        fullImg.style.opacity = '0';

        thumbnailContainer.appendChild(thumbnail);
        thumbnailContainer.appendChild(fullImg);

        thumbnailContainer.addEventListener('mouseover', () => {
            fullImg.style.opacity = '1';
        });

        thumbnailContainer.addEventListener('mouseout', () => {
            fullImg.style.opacity = '0';
        });

        photoPanel.appendChild(thumbnailContainer);
    });
}

// Llamar a la función para generar el panel cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', generatePhotoPanel);

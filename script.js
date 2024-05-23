document.addEventListener('DOMContentLoaded', () => {
  const galleryData = {
    'schematic-design': {
      title: 'Schematic Design',
      images: [
        { src: 'https://via.placeholder.com/600x400', alt: 'Schematic Design 1', description: 'Schematic Design 1 - Date: 2023 - Location: Kabul' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Schematic Design 2', description: 'Schematic Design 2 - Date: 2022 - Location: Stuttgart' },
      ],
    },
    'construction-documents': {
      title: 'Construction Documents',
      images: [
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction Documents 1', description: 'Construction Documents 1 - Date: 2023 - Location: Kabul' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction Documents 2', description: 'Construction Documents 2 - Date: 2022 - Location: Stuttgart' },
      ],
    },
    'construction': {
      title: 'Construction',
      images: [
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction 1', description: 'Construction 1 - Date: 2023 - Location: Kabul' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction 2', description: 'Construction 2 - Date: 2022 - Location: Stuttgart' },
      ],
    },
    'build-construction': {
      title: 'Build Construction',
      images: [
        { src: 'https://via.placeholder.com/600x400', alt: 'Build Construction 1', description: 'Build Construction 1 - Date: 2023 - Location: Kabul' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Build Construction 2', description: 'Build Construction 2 - Date: 2022 - Location: Stuttgart' },
      ],
    },
  };

  window.openGallery = (project) => {
    const galleryContainer = document.getElementById('gallery');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryContent = document.getElementById('gallery-content');

    galleryTitle.textContent = galleryData[project].title;
    galleryContent.innerHTML = '';

    galleryData[project].images.forEach(image => {
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;

      const description = document.createElement('p');
      description.textContent = image.description;

      galleryItem.appendChild(img);
      galleryItem.appendChild(description);
      galleryContent.appendChild(galleryItem);
    });

    galleryContainer.classList.remove('hidden');
    galleryContainer.classList.add('visible');
  };

  window.closeGallery = () => {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.classList.remove('visible');
    galleryContainer.classList.add('hidden');
  };
});

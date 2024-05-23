document.addEventListener('DOMContentLoaded', () => {
  const galleryData = {
    'facade-design': {
      title: 'Facade Design',
      images: [
        { src: 'Images/IMG_0400.JPG', alt: 'Malik Zadah Restaurant 01', description: 'Malik Zadah Restaurant 01 - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0404.JPG', alt: 'Malik Zadah Restaurant 02', description: 'Malik Zadah Restaurant 02 - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0407.JPG', alt: 'Alkozay Group of Companies', description: 'Alkozay Group of Companies - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0418.JPG', alt: 'Sal-Sal Furniture Showroom', description: 'Sal-Sal Furniture Showroom - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0436.JPG', alt: 'Sal-Sal Furniture Showroom', description: 'Sal-Sal Furniture Showroom - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0420.JPG', alt: '7012 Complex', description: '7012 Complex - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0420.JPG', alt: '7012 Complex', description: '7012 Complex - Date: 2015 - Location: Kabul' },
        
      ],
    },
    'building-construction': {
      title: 'Building Construction',
      images: [
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction Documents 1', description: 'Construction Documents 1 - Date: 2023 - Location: Kabul' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction Documents 2', description: 'Construction Documents 2 - Date: 2022 - Location: Stuttgart' },
      ],
    },
    'interior-design': {
      title: 'Interior Design',
      images: [
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction 1', description: 'Construction 1 - Date: 2023 - Location: Kabul' },
        { src: 'https://via.placeholder.com/600x400', alt: 'Construction 2', description: 'Construction 2 - Date: 2022 - Location: Stuttgart' },
      ],
    },
    'computational-design': {
      title: 'Computational Design',
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

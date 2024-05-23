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
        { src: 'Images/IMG_0437.JPG', alt: 'Residential Building 4-storey', description: 'Residential Building - Date: 2016 - Location: Kabul' },
        { src: 'Images/IMG_0408.JPG', alt: 'Residential Building 4-storey', description: 'Residential Building - Date: 2016 - Location: Kabul' },
        { src: 'Images/IMG_1836.JPG', alt: 'MORAA Educational Center', description: 'Moraa Reception Building - Date: 2018 - Location: Kabul' },
        
       
      ],
    },
    'interior-design': {
      title: 'Interior Design',
      images: [
        { src: 'Images/IMG_0406.JPG', alt: 'Island Kitchen', description: 'Island Kitchen 1 - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0409.JPG', alt: 'University Jumhoriat', description: 'Reception - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0422.JPG', alt: 'University Jumhoriat', description: 'Reception - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0410.JPG', alt: 'Abu-Ali Sina Clinic ', description: 'Reception - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0412.JPG', alt: 'Novin Sima Company', description: 'Meeting Room - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0413.JPG', alt: 'Khalid Lemar Apartment', description: 'Apartment - Date: 2014 - Location: Kabul' },
        { src: 'Images/IMG_0416.JPG', alt: 'Ministry of Economy', description: ' Office, Meetingroom, Saferoom - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0430.JPG', alt: 'Ministry of Economy', description: ' Office, Meetingroom, Saferoom - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0423.JPG', alt: 'Qalay-e Fathullah Project', description: ' MasterBedroom - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0441.JPG', alt: 'University Jumhoriat', description: ' Office - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0445.JPG', alt: 'Guest House', description: ' Guestroom - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_0451.JPG', alt: 'Reception', description: ' Reception - Date: 2015 - Location: Kabul' },
        { src: 'Images/IMG_1839.JPG', alt: 'Moraa Educational Center', description: ' Reception - Date: 2018 - Location: Kabul' },
        
        
        
        
        
        { src: 'Images/IMG_0452.JPG', alt: 'Jumhoriat University', description: 'Reception - Date: 2015 - Location: Kabul' },
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

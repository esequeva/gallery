document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('#imgModal');
    
    // Array con los nombres de las imágenes
    const imageNames = [];
    for (let i = 1; i <= 40; i++) {
      imageNames.push(`ropa${i}.jpg`); // Cambiar por los nombres de tus imágenes
    }
    
    // Crear miniaturas y agregar clics
    imageNames.forEach(function(imageName) {
      const img = document.createElement('img');
      img.src = imageName;
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
      });
      gallery.appendChild(img);
    });
    
    // Cerrar modal al hacer clic en la 'x'
    document.querySelector('.close').addEventListener('click', function() {
      modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  
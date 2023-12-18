function displayImages() {
    const fileInput = document.getElementById('file-input');
    const errorMessage = document.getElementById('error-message');
    const imageContainer = document.getElementById('image-container');

    try {
      const fileNames = JSON.parse(fileInput.value);

      imageContainer.innerHTML = '';

      fileNames.forEach((fileName, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = fileName.trim();
        thumbnail.alt = "Немає в базі";
        thumbnail.classList.add('thumbnail');
        thumbnail.onclick = () => showFullImage(fileName.trim());
        imageContainer.appendChild(thumbnail);
      });

      errorMessage.textContent = '';
    } catch (error) {
      errorMessage.textContent = 'Неправильний формат JSON. Введіть правильний формат';
    }
  }

  function showFullImage(src) {
    const fullImage = document.getElementById('full-image');
    fullImage.src = src;
    fullImage.style.display = 'block';
  }

  function hideFullImage() {
    const fullImage = document.getElementById('full-image');
    fullImage.style.display = 'none';
  }
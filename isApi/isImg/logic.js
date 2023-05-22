const dogUrl="https://dog.ceo/api/breeds/image/random"
function callPhotoAPI() {
  fetch(dogUrl)
    .then(response => response.json())
    .then(data => {
      const img = document.getElementById("dogImage")
      img.src = data.message;
    })
    .catch(error => console.error(error));
}
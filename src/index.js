const KEY =
  'live_8QjjUmIRqGSnq4m68ylIdFIUcFSVUVdy1OZfVH8pZFuGkwMgDaeJNDiZOCxNc6HJ';

const breadSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const aboutCat = document.querySelector('.cat-info');

fetchBreeds();

function fetchBreeds() {
  fetch(`https://api.thecatapi.com/v1/breeds`)
    .then(response => {
      return response.json();
    })
    .then(cat => {
      cat.forEach(function (breed) {
        let option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breadSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

const KEY =
  'live_8QjjUmIRqGSnq4m68ylIdFIUcFSVUVdy1OZfVH8pZFuGkwMgDaeJNDiZOCxNc6HJ';
import { fetchBreeds } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const aboutCat = document.querySelector('.cat-info');
let selectedBreedId = null;

fetchBreeds()
  .then(breeds => {
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.error(error);
  });

breedSelect.addEventListener('change', e => {
  selectedBreedId = e.currentTarget.value;
  fetchCatByBreed(selectedBreedId);
});

function fetchCatByBreed(breedId) {
  fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${KEY}`
  )
    .then(response => response.json())
    .then(data => {
      const cat = data[0]; // Отримання першого елементу масиву котів
      const breed = cat.breeds[0]; // Отримання першої породи кота

      const temperament = breed.temperament;
      console.log('Temperament:', temperament);
    })
    .catch(error => {
      console.log(error);
    });
}

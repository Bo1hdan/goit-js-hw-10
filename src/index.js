import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loaderP = document.querySelector('.loader');
const errorP = document.querySelector('.error');
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
    errorP.classList.add('show-error');
  });

breedSelect.addEventListener('change', e => {
  selectedBreedId = e.currentTarget.value;

  errorP.classList.remove('show-error');

  aboutCat.classList.add('hidden');
  loaderP.classList.add('show-loader');

  breedSelect.classList.add('hidden');

  fetchCatByBreed(selectedBreedId)
    .then(breedCard => {
      aboutCat.innerHTML = breedCard;
      aboutCat.classList.remove('hidden');
    })
    .catch(error => {
      console.error(error);
      errorP.classList.add('show-error');
    })
    .finally(() => {
      loaderP.classList.remove('show-loader');

      breedSelect.classList.remove('hidden');
    });
});

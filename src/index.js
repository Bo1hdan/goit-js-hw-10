const KEY =
  'live_8QjjUmIRqGSnq4m68ylIdFIUcFSVUVdy1OZfVH8pZFuGkwMgDaeJNDiZOCxNc6HJ';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
new SlimSelect({
  select: '#selectElement',
});

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

    loader.classList.add('hidden');
  })
  .catch(error => {
    console.error(error);
    error.classList.remove('hidden');
    loader.classList.add('hidden');
  });

breedSelect.addEventListener('change', e => {
  selectedBreedId = e.currentTarget.value;

  loader.classList.remove('hidden');
  error.classList.add('hidden');

  fetchCatByBreed(selectedBreedId)
    .then(breedCard => {
      aboutCat.innerHTML = breedCard;
      aboutCat.classList.remove('hidden');
      loader.classList.add('hidden');
      error.classList.add('hidden');
    })
    .catch(error => {
      console.log(error);
      loader.classList.add('hidden');
      error.classList.remove('hidden');
    });
});

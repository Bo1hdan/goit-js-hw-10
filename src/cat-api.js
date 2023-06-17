const KEY =
  'live_8QjjUmIRqGSnq4m68ylIdFIUcFSVUVdy1OZfVH8pZFuGkwMgDaeJNDiZOCxNc6HJ';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    })
    .then(data => {
      return data.map(breed => ({
        id: breed.id,
        name: breed.name,
      }));
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${KEY}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    })
    .then(data => {
      const cat = data[0];
      const breed = cat.breeds[0];

      const name = breed.name;
      const description = breed.description;
      const temperament = breed.temperament;
      const img = cat.url;
      const breedCard = `<ul class="cat-info">
          <li> <img
        src="${img}"
        alt="${name}"
      /></li>
          <li><span>${name}</span></li>
          <li>${description}</li>
          <li>${temperament}</li>
          </ul>        
      `;
      return breedCard;
    });
}

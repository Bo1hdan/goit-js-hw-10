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

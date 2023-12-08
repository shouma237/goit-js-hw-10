const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_JxIVsoi3jmIyNt77GCAO7SCXoneZpKU9canD6dmIfBODf33LlsjOtLNYmhRZOsx1';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

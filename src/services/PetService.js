export const getAll = (category = '') => {
    let url = 'http://localhost:3004/pets';
    url += (category && category != 'all') ? `?category=${category}` : '';
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
};
export const getOne = (petId) => {
    let url = 'http://localhost:3004/pets';
    return fetch(url + `/${petId}`)
    .then(res => res.json())
    .catch(error => console.log(error));
};

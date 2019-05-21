const url = 'https://randomuser.me/api/?results=50';

const fetchPeople = () => fetch(url).then(response => response.json());

export {fetchPeople};
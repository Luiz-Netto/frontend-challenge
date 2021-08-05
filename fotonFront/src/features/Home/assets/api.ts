export const fetchBooks = async (querry: string, storeStateFunc: any) =>
  await fetch(`https://www.googleapis.com/books/v1/volumes?q=${querry}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(obj => storeStateFunc(obj.items))
    .catch(e => console.error('Something went wrong', e));

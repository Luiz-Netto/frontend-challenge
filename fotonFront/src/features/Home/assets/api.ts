export const fetchBooks = async (querry: string, setState: any) =>
  await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${querry}&maxResults=9&projection="lite"&key="AIzaSyDPLJMBle90P5ubjiA5Tj1bXaGioLs89XQ"`,
    {
      method: 'GET',
    },
  )
    .then(response => response.json())
    .then(obj => setState(obj.items))
    .catch(e => console.error('Something went wrong', e));

export const fetchBookCover = async (imageURL: string) =>
  await fetch(`${imageURL}`, {method: 'GET'})
    .then(response => response)
    .catch(e => console.error('Something went wrong', e));

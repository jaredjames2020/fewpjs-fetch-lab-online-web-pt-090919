function fetchBooks() {
<<<<<<< HEAD
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
=======
 
>>>>>>> c0de5f2a0b1a7fcdfb4e2b240c8088288e9ce235
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

const searchText = () => {
    const searchfeild = document.getElementById('search-feild')
    const searchText = searchfeild.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))

}

const display = docs => {
    console.log(data)
    const search = document.getElementById('search-result');
    search.textContent = '';

    docs.forEach(dosc => {
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML =
            `
            <div class="card h-100">
        <img  class="w-75 mx-auto" src=" https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${docs.title}</h2>
          <h3 class="card-title"> Author:${docs.author_name}</h3>
          <h5 class="card-title"> First Publish Year: ${docs.first_publish_year}</h5>
          <h5 class="card-title">  Publisher : ${docs.publisher}</h5>
          <h4>Language:  ${docs.language}</h4>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>   
            `;
        search.appendChild(div)
    })
}

const total = () => {
    const text = document.getElementById('search-feild')
    const resilt = text.value;

    const url = `https://openlibrary.org/search.json?q=${resilt}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log)
}
const display = docs => {
    const jnina = document.getElementById('total')
    const div = document.createElement('div')
    div.innerHTML = `<p> total:${data.docs.numFound}</p>`;
    div.appendChild(div)

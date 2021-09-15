



var searchbutton = document.getElementById("button-search");
var txtbutton = document.getElementById("search-feild");

txtbutton.addEventListener("keypress", function (event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        searchbutton.click();
    }

});


//add spinner



const toogleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toogleSpinnerResult = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}

const searchText = () => {
    //To get searchbutton and it's value
    const searchFeild = document.getElementById('search-feild')

    const searchText = searchFeild.value;
    toogleSpinnerResult('none');
    toogleSpinner('block');

    searchFeild.value = ''
    //display spinner

    // console.log(searchText)
    //Dynamic searchitems
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
    if (searchText === '') {
        alert(' Result not found')
        return;
    }
    else if (books.length === 0) {
        // console.log(data)
        alert('Result not found')
    }
    else {
        // //load data
        const url = ` https://openlibrary.org/search.json?q=${searchText}`
        // console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))
    }

    // searchFeild.value = "";
}
//Display dynamicily
const displaySearchResult = docs => {
    // console.log(docs)
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    // if (docs.length === 0) {
    //     alert('Result not found')
    // }

    docs.forEach(docs => {
        console.log(docs)
        //Create div
        const div = document.createElement('div')
        //Create class name col
        div.classList.add('col');
        div.innerHTML = `<div class="card h-100">
        <img  class="w-75 mx-auto" src=" https://covers.openlibrary.org/b/id/${docs.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${docs.title}</h2>
          <p class="card-title"> Author:${docs.author_name}</p>
          <p class="card-title"> First Publish Year: ${docs.first_publish_year}</p>
          <p class="card-title">  Publisher : ${docs.publisher}</p>
          <h4>Language:  ${docs.language}</h4>
        </div>
      </div>`;
        //append child of searchresult
        searchResult.appendChild(div);
    });
    toogleSpinnerResult("block");
    toogleSpinner("none");

}

//To display Total
// const displayTotal = () => {
//     const total = document.getElementById('search-feild')
//     const totalText = total.value;

//     const url = ` https://openlibrary.org/search.json?q=${totalText}`
//     console.log(url)
//     fetch(url)
//         .then(res => res.json())
//         .then(data => count(data))
// }

// const count = data => {
//     const countResult = document.getElementById('total')
//     countResult.textContent = ''

//     const div = document.createElement('p')

//     div.classList.add('text-center')
//     div.innerHTML = `<p> total:${data.docs.length}</p>`;
//     //append child of searchresult
//     countResult.appendChild(div);

// }

const loadTotalBook = () => {

    const searchField = document.getElementById("book-input");

    const searchText = searchField.value;

    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => totalResult(data));


}
const totalResult = data => {
    const bookContainer = document.getElementById("total-result");
    //clear data
    bookContainer.textContent = "";
    const totalBook = document.createElement("p");

    totalBook.classList.add("text-white");
    totalBook.innerText = `Total result:${data.docs.length}`;
    bookContainer.appendChild(totalBook);
    toggleSpinner("none");
}
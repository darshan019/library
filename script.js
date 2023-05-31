let myLibrary = []
document.getElementById('submit').addEventListener('click', addBookToLibrary)

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(event) {
    event.preventDefault()
    let book_name = document.getElementById('book-name').value
    let book_author = document.getElementById('author').value
    let book_pages = document.getElementById('pages').value
    let readCheck;

    const inputs = document.getElementById('txt').getElementsByTagName('input')

    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value === ''){
            alert(`Enter the value of ${inputs[i].id}`)
            return
        }
    }

    if(document.getElementById('checkbox').checked === true){
        readCheck = 'Yes'
    }
    else{
        readCheck = 'No'
    }

    const bookAdd = new Book(book_name, book_author, book_pages, readCheck)
    myLibrary.push(bookAdd)

    bookDisplay(myLibrary[myLibrary.length-1])
}

function bookDisplay(item){
    let bookCards = document.querySelector('.book-cards')

    const div = document.createElement('div')
    div.classList.add('card')

    let nameBook = document.createElement('span')
    nameBook.textContent = 'Name: ' + item.name
    div.appendChild(nameBook)

    let authorBook = document.createElement('span')
    authorBook.textContent += 'Author: ' + item.author
    div.appendChild(authorBook)

    let pagesOfBook = document.createElement('span')
    pagesOfBook.textContent = 'Pages: ' + item.pages
    div.appendChild(pagesOfBook)

    let read = document.createElement('span')
    read.textContent = 'Read: ' + item.read

    div.appendChild(read)

    bookCards.appendChild(div)

    book_name = document.getElementById('book-name').value = ''
    book_author = document.getElementById('author').value = ''
    book_pages = document.getElementById('pages').value = ''

    let rmbtn = document.createElement('button')
    rmbtn.textContent = 'Delete'
    rmbtn.addEventListener('click',() => {
        div.setAttribute('id', `new_${myLibrary.length-1}`)
        document.getElementById(`new_${myLibrary.length-1}`).remove()
        myLibrary.splice(myLibrary.indexOf(item),1)
    })
    div.appendChild(rmbtn)

}
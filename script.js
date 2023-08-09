let myLibrary = [];
let bookDetails = document.getElementById("book-details-form");


class Book{
  constructor(name, author, pages, readstatus){
 	  this.name = name
 	  this.author = author
 	  this.pages = pages
    this.readstatus = readstatus
  }
}

function addsomeBooksToLibrary() {
  let book1 = new Book('GNU Manual', 'GNU Team', 230, true)
  let book2 = new Book('The Hobbit', 'JRR Tolkein', 400, true)
  let book3 = new Book('1984', 'G. Orwell', 300, false)
  myLibrary.push(book1, book2, book3)
}

function display(library){
  library.forEach(webview)
}

function createparagraph(){
  return document.createElement("p")
}

function webview(book, index){
  const div = document.createElement("div")
  const nesteddiv = document.createElement("div")
  const span = document.createElement("span")
  const input = document.createElement("INPUT")
  const label = document.createElement("label")

 
  input.id = `readstatus_${index}`
  input.setAttribute("type", "checkbox")
  label.htmlFor = `readstatus_${index}` 
  label.innerHTML = 'Read'
	
  div.className = 'book'
  div.dataset.index = index
  span.className = "book-delete"
  
  const  p = [createparagraph(), createparagraph(), createparagraph()]
  p[0].innerHTML = "Book:&nbsp&nbsp" + book.name
  p[1].innerHTML = "Author:&nbsp" + book.author
  p[2].innerHTML = "Pages:&nbsp" + book.pages
  span.innerHTML = "&times";
  input.checked = book.readstatus
	
  div.appendChild(span)
  div.appendChild(p[0])
  div.appendChild(p[1])
  div.appendChild(p[2])
  nesteddiv.appendChild(input)
  nesteddiv.appendChild(label)
  div.appendChild(nesteddiv)
  document.body.appendChild(div)
  const plusbtn = document.getElementsByClassName('add-button')[0]
  document.body.insertBefore(div, plusbtn);
  return div
}

function modalsetup(){
  var modal = document.getElementById("modal");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("plus-btn")[0];

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
}

bookDetails.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let readstatus = document.getElementById("readstatus");

  if (author.value == "" || title.value == ""|| pages.value == "") {
    alert("Field can't be blank")
  } else {
    let new_book = new Book(title.value, author.value, pages.value, readstatus.checked);
    new_div = webview(new_book, myLibrary.length)
    myLibrary.push(new_book)
    modal.style.display = "none";
    chargedeletebutton(new_div)
  }
});

function initdeletebutton(){
  document.querySelectorAll('.book-delete').forEach(chargedeletebutton)
}

function chargedeletebutton(e){
	e.addEventListener("click", (e)=>{
    myLibrary[e.target.parentNode.dataset.index] = undefined
    e.target.parentNode.remove()
  });
}

addsomeBooksToLibrary()
display(myLibrary)
modalsetup()
initdeletebutton()

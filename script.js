console.log("This is index.js");
//constructor
let count = 1;
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
//Display Constructor
function Display() {}
//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("added");
  let tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
    <th scope="row">${count}</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`;
  tableBody.innerHTML += uiString;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  console.log(libraryForm);
  libraryForm.reset();
};
Display.prototype.validate = function (book) {
  if (book.name.length > 3 && book.author.length > 3) {
    return true;
  } else {
    return false;
  }
};
Display.prototype.show = function (type, message) {
  console.log("show function is called");
  let condition = type;
  let pos = document.getElementById("message");
  pos.innerHTML = `<div class="alert alert-${condition} alert-dismissible fade show" role="alert">
  <strong>Alert!</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  setTimeout(()=>{
      pos.innerHTML="";
  },2000)
};
let libraryForm = document.getElementById("libraryForm");
console.log(libraryForm);
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log("You have submitted library form");
  //console.log(e);
  e.preventDefault();
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("Author").value;
  let fiction = document.getElementById("Fiction");
  let programming = document.getElementById("Computer");
  let cooking = document.getElementById("Cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let bookN = new Book(name, author, type);
  console.log(bookN);
  let display = new Display();
  if (display.validate(bookN)) {
    display.add(bookN);
    display.clear();
    display.show("success", "Your book has been successfully added");
    count++;
  } else {
    display.show("danger", "Sorry you cannot add this book");
  }
}

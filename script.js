let quotes = [];//empty array to store all the quotes in 

//these have to be the same as the bottom declarations
function bibleQuote(quotes, author, chapter, verses){
  this.quotes = quotes;
  this.author = author;
  this.chapter = chapter;
  this.verses = verses;
}

bibleQuote.prototype.addToLibrary = function (){
  quotes.push(this);//empty array pushing quote into array
  return this;
}

const add = document.getElementById("addQuote");
add.addEventListener('click', function (){

  let quotes = document.getElementById("quote").value;
  var clearQuotes = (document.getElementById("quote").value = "");

  let author = document.getElementById("author").value;
  var clearAuthor = (document.getElementById("author").value = "");

  let chapter = document.getElementById("chapter").value;
  var clearChapter = (document.getElementById("chapter").value = "");

  let verses = document.getElementById("verses").value;
  var clearVerses = (document.getElementById("verses").value = "");

  // //creating a new object of above information
  let quote = new bibleQuote(quotes, author, chapter, verses);
  quote.addToLibrary();

  //creating element list
  var li = document.createElement("li");
  li.innerText = `Quote: ${quote.quotes}, Author: ${quote.author}, Chapter: ${quote.chapter}, Verses: ${quote.verses}`;

  document.getElementById("library").append(li);
});

//button to show form-popup
function toggleForm() {
    var form = document.getElementById("myForm");
    //gets the current value of display (none)
    var displaySetting = form.style.display;
    var formButton = document.getElementById("newQuote");
  
    //if form currently shows, hide it when button clicked
    if (displaySetting == "block") {
      //form visible hide it
      form.style.display = "none";
      formButton.innerText = "Add a Quote";
    } else {
      form.style.display = "block";
      formButton.innerText = "Hide Me";
    }
  }
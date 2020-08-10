//getting local storage function
function getQuotes() {
  var quotes = new Array;
  //the item became a string, so we need to parse it
  var stringedQuotes = localStorage.getItem('quote');
  //as long as there are items in local storage
  if (stringedQuotes !== null) {
      quotes = JSON.parse(stringedQuotes); 
  }
  return quotes;
}

 //<button type="button" class="add" id="add">+</button>
//whenever you are adding, you set the item in local storage
function add() {
  var bquotes = document.getElementById("quote").value;
  var author = document.getElementById("author").value;
  var chapter = document.getElementById("chapter").value;
  var verses = document.getElementById("verses").value;

  var quotes = getQuotes();
  quotes.push(bquotes, author, chapter, verses);
  localStorage.setItem('quote', JSON.stringify(quotes));
  show();


  var clearVerses = (document.getElementById("verses").value = "");
  var clearQuotes = (document.getElementById("quote").value = "");
  var clearAuthor = (document.getElementById("author").value = "");
  var clearChapter = (document.getElementById("chapter").value = "");
  return false;
}

//these have to be the same as the bottom declarations
// function bibleQuote(quotes, author, chapter, verses){
//   this.quotes = quotes;
//   this.author = author;
//   this.chapter = chapter;
//   this.verses = verses;
// }


// const add = document.getElementById("addQuote");
// add.addEventListener('click', function (){

//   let quotes = document.getElementById("quote").value;
//   var clearQuotes = (document.getElementById("quote").value = "");

//   let author = document.getElementById("author").value;
//   var clearAuthor = (document.getElementById("author").value = "");

//   let chapter = document.getElementById("chapter").value;
//   var clearChapter = (document.getElementById("chapter").value = "");

//   let verses = document.getElementById("verses").value;
//   var clearVerses = (document.getElementById("verses").value = "");

//   // //creating a new object of above information
//   let quote = new bibleQuote(quotes, author, chapter, verses);
//   quote.addToLibrary();

//   //creating element list
//   var div = document.createElement("div");
//   div.classList.add("listOfQuotes");
//   div.innerText = `" ${quote.quotes}"
//   - ${quote.author} ${quote.chapter}: ${quote.verses}`;

//   var remove = document.createElement("button");
//   remove.classList.add("remove");
//   remove.innerText = "x";
//   remove.addEventListener('click', function(){

//   });
  
//   document.getElementById("library").append(div, remove);
//   //document.getElementById("library").append(remove);
// });

function remove() {
  //gets the specific id of element
  var id = this.getAttribute('id');
  //calling function todo to get items
  var quotes = getQuotes();
  //splice that specific id once
  quotes.splice(id, 1);
  //after splicing, set up new todos again
  localStorage.setItem('quote', JSON.stringify(quotes));
  //show the change
  show();
  return false;
}


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

  function show() {
    var quotes = getQuotes();
    //start with a list
    var html = '<ul>';
    //creating list per length and remove button
    for(var i=0; i<quotes.length; i++) {
        html += '<li>' + quotes[i] + '<button class="remove" id="' + i  + '">x</button></li>';
      
      };
    html += '</ul>'; //end with unordered list
    
    document.getElementById('list').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length / 4; i++) {
        buttons[i].addEventListener('click', remove);
    };

   
}

document.getElementById('addQuote').addEventListener('click', add);
show();
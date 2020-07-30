
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
      formButton.innerText = "Add Book";
    } else {
      form.style.display = "block";
      formButton.innerText = "Hide Me";
    }
  }
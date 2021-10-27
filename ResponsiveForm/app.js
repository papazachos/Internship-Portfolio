  // This function will check user's input 
  //and based on that will either hide or display a particular row

  function filter() {
    // Code to gain Access to text values and Elements
    let value = document.getElementById("searchInput").value.toUpperCase();
    let names = document.getElementById("names");
    let rows = names.getElementsByTagName("tr");

   for (i = 0; i < rows.length; i++) {
    let column = rows[i].getElementsByTagName("td")[2];
    let language = column.textContent;

    rows[i].style.display =
      language.toUpperCase().indexOf(value) > -1 ? "" : "none";
  }
}
document.getElementById("searchInput").addEventListener("keyup", filter);

function filter() {
    let value = document.getElementById("searchInput").value.toUpperCase();
    var names = document.getElementById("names");
    var rows = names.getElementsByTagName("tr");
  
    for (i = 0; i < rows.length; i++) {
      let column = rows[i].getElementsByTagName("td")[2];
      let language = column.textContent;
  
      rows[i].style.display =
        language.toUpperCase().indexOf(value) > -1 ? "" : "none";
    }
  }
  
  document.getElementById("searchInput").addEventListener("keyup", filter);


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


/**  var $products = $('#products li');
$('#filter').keyup(function() {
    var re = new RegExp($(this).val(), "i");
    $products.removeClass('hidden').filter(function() {
        return !re.test($(this).text());
    }).addClass('hidden');
}); 

**/

/***************************************************************
var $phone = $('#phone li');
$('#filter2').keyup(function() {
    var re = new RegExp($(this).val(), "i");
    $phone.removeClass('hidden').filter(function() {
        return !re.test($(this).text());
    }).addClass('hidden');
});

var $address = $('#address li');
$('#filter3').keyup(function() {
    var re = new RegExp($(this).val(), "i");
    $address.removeClass('hidden').filter(function() {
        return !re.test($(this).text());
    }).addClass('hidden');
}); 

var $subjects = $('#subjects li');
$('#filter4').keyup(function() {
    var re = new RegExp($(this).val(), "i");
    $subjects.removeClass('hidden').filter(function() {
        return !re.test($(this).text());
    }).addClass('hidden');
}); 

*************************************************/

function filterTable() {
  // Variables
  let dropdown, table, rows, cells, country, filter;
  dropdown = document.getElementById("specializationsDropdown");
  table = document.getElementById("myTable");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loops through rows and hides those with countries that don't match the filter
  for (let row of rows) { // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("td");
    special = cells[1] || null; // gets the 2nd `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
    if (filter === "All" || !special || (special.textContent.includes(filter))) {
      row.style.display = ""; // shows this row
    }
    else {
      row.style.display = "none"; // hides this row
    }
  }
}

function filterTable2() {
  // Variables
  let dropdown, table, rows, cells, country, filter;
  dropdown = document.getElementById("citiesDropdown");
  table = document.getElementById("myTable");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loops through rows and hides those with countries that don't match the filter
  for (let row of rows) { // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("td");
    special = cells[3] || null; // gets the 2nd `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
    if (filter === "All" || !special || (special.textContent.includes(filter))) {
      row.style.display = ""; // shows this row
    }
    else {
      row.style.display = "none"; // hides this row
    }
  }
}

/*Text input search bar***********************************************************/

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});










/*Clear filters buttons, next to dropdowns*****************************************/
    function Reset() {
        
        var dropDown = document.getElementById("specializationsDropdown");
        dropDown.selectedIndex = 0;
        
        var dropDown2 = document.getElementById("citiesDropdown");
        dropDown2.selectedIndex = 0;
        
        
          let dropdown, table, rows, filter;
            dropdown    = document.getElementById("specializationsDropdown");
            table       = document.getElementById("myTable");
            rows        = table.getElementsByTagName("tr");
            filter      = dropdown.value;
        
  // Loops through rows, hides what doesn't match the filter
        
          for (let row of rows) { // loops through the NodeList
              
            cells       = row.getElementsByTagName("td");
            special     = cells[1] || null; // 2nd column
    
            // if filter is 'All', the 2nd header row, or in 2nd column and matches filter
            if (filter === "All Specializations" || !special || (special.textContent.includes(filter))) {
                    row.style.display = ""; // reveals matching rows
            }
            else {
                    row.style.display = "none"; // hides rows that don't match
            }
        }
    }








/*Specializations Dropdown***********************************************************/

    function filterTable() {
        let dropdown, table, rows, filter;
            dropdown    = document.getElementById("specializationsDropdown");
            table       = document.getElementById("myTable");
            rows        = table.getElementsByTagName("tr");
            filter      = dropdown.value;

        // Loops through rows, hides what doesn't match the filter
        
        for (let row of rows) { //Loops through the NodeList
            cells       = row.getElementsByTagName("td");
            special     = cells[1] || null; // 2nd column
    
            // if filter is 'All', the 2nd header row, or in 2nd column and matches filter
            if (filter === "All Specializations" || !special || (special.textContent.includes(filter))) {
                    row.style.display = ""; // reveals matching rows
            }
            else {
                    row.style.display = "none"; // hides rows that don't match
            }
        }
    }

var element = document.getElementById("specializationsDropdown");

    element.addEventListener('mousedown', function () {
        this.size=5;
    });

    element.addEventListener('change', function () {
        this.blur();
    });

    //Retracts the dropdown when users click outside of the active dropdown
    element.addEventListener('blur', function () {
        this.size=0;
    }); 








/*Cities Dropdown***********************************************************/

    function filterTable2() {

      let dropdown, table, rows, cells, country, filter;
            dropdown    = document.getElementById("citiesDropdown");
            table       = document.getElementById("myTable");
            rows        = table.getElementsByTagName("tr");
            filter      = dropdown.value;

      // Loops through rows, hides what doesn't match the filter
        
      for (let row of rows) { //Loops through the NodeList
            cells       = row.getElementsByTagName("td");
            special     = cells[3] || null; // 2nd column

        if (filter === "All Cities" || !special || (special.textContent.includes(filter))) {
          row.style.display = ""; // reveals matching rows
        }
        else {
          row.style.display = "none"; // hides rows that don't match
        }
      }
    }


var element = document.getElementById("citiesDropdown");

    element.addEventListener('mousedown', function () {
        this.size=5;
    });
    element.addEventListener('change', function () {
        this.blur();
    });

    //This allows the dropdown to retract when users click outside of the active dropdown
    element.addEventListener('blur', function () {
        this.size=0;
    });  











/* Makes all links in the table open in a seperate tab **********************************/
    var links = document.links;

    for (var i = 0; i < links.length; i++) {
         links[i].target = "_blank";
    }










/*scroll to top button*******************************************************/

    mybutton = document.getElementById("myBtn");

    // Shows the button after users scroll 20px
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } 
      else {
        mybutton.style.display = "none";
      }
    }

    // Returns users to the top upon clicking
    function topFunction() {
      document.body.scrollTop = 0; // Safari
      document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
    }




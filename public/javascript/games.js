

/*      Table      *\
\*    Scrolling    */
console.log("hi");

$(window).on("load resize ", function () {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({
    'padding-right': scrollWidth
  });
}).resize();


/*      Table      *\
\*   Name Search   */
function tableSearch() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase().replace(/\s+/g, '');
  table = document.getElementById("games-table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      // txtValue = td.parentElement.dataset.alias; //only get aliases
      txtValue = td.textContent; //only get name
      if (txtValue.toLowerCase().replace(/\s+/g, '').indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

/*      Table      *\
\*     Sorting     */

function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("games-table-data");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows:*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[n].innerHTML.toLowerCase();
      y = rows[i + 1].getElementsByTagName("td")[n].innerHTML.toLowerCase();
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x > y) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x < y) {2
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
 
//TODO sort table by date
function sortTableDate(n) {
  console.log("not implemented");

  
}

//OLD

/*      Table     *\
\*      Data      */
/*
$(document).ready(function () {


  $.getJSON("../data/gamesList.json", function (data) {
    var gamesListData = '';
    $.each(data, function (key, value) {

      //gamesListData += '<tr>';
      gamesListData += '<tr class=\"' + value.name + '\"</td>';

      gamesListData += '<td><a href=\"' + value.url + '\">' + value.name + '</a></td>';
      //gamesListData += '<td>' + value.name + '</td>';

      gamesListData += '<td>' + value.platform.join(", ") + '</td>';
      gamesListData += '<td>' + value.genre.join(", ") + '</td>';
      gamesListData += '<td>' + value.releasedate + '</td>';
      gamesListData += '<td>' + value.publisher + '</td>';
      gamesListData += '</tr>';
    });
    $('#games-table-data').append(gamesListData);
    console.log('%ctable generated\n%c' + data.length + ' items added', "color:green; font-weight:500; font-size:24px", "color:blue; font-weight:500; font-size:24px");
  });






});

*/











//New

/*      Table     *\
\*      Data      */

$(document).ready(function () {


  $.getJSON("../data/gamesList.json", function (data) {
    var gamesListData = '';
    $.each(data, function (key, value) {

      //gamesListData += '<tr>';
      gamesListData += '<tr class=\"' + value.name + '\">';

      gamesListData += '<td><a href=\"' + value.url + '\">' + value.name + '</a></td>';
      //gamesListData += '<td>' + value.name + '</td>';

      gamesListData += '<td>' + value.platform.join(", ") + '</td>';
      gamesListData += '<td>' + value.genre.join(", ") + '</td>';
      gamesListData += '<td>' + value.releasedate + '</td>';
      gamesListData += '<td>' + value.publisher + '</td>';
      gamesListData += '</tr>';
    });
    $('#games-table-data').append(gamesListData);
    console.log('%ctable generated\n%c' + data.length + ' items added', "color:green; font-weight:500; font-size:24px", "color:blue; font-weight:500; font-size:24px");
  });






});


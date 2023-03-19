
function edit_row(no) {
    var firstname_data = document.getElementById("firstname_row" + no).innerHTML;
    var lastname_data = document.getElementById("lastname_row" + no).innerHTML;
    var age_data = document.getElementById("age_row" + no).innerHTML;
    var gender_data = document.getElementById("gender_row" + no).innerHTML;
    var country_data = document.getElementById("country_row" + no).innerHTML;

   
 
    document.getElementById("firstname_text").setAttribute("value", firstname_data)
    document.getElementById("lastname_text").setAttribute("value", lastname_data)
    document.getElementById("age_text").setAttribute("value", age_data) 
    document.getElementById("gender_text").setAttribute("value", gender_data) 
    document.getElementById("country_text").setAttribute("value", country_data)
    document.getElementById("save_button").setAttribute("value", no) 
    $('#updateModal').modal('show');
}
   
function save_row() {
    var firstname_val = document.getElementById("firstname_text").value;
    var lastname_val = document.getElementById("lastname_text").value;
    var age_val = document.getElementById("age_text").value;
    var gender_val = document.getElementById("gender_text").value;
    var country_val = document.getElementById("country_text").value;
    var no = document.getElementById("save_button").value;
   
    document.getElementById("firstname_row" + no).innerHTML = firstname_val;
    document.getElementById("lastname_row" + no).innerHTML = lastname_val;
    document.getElementById("age_row" + no).innerHTML = age_val;
    document.getElementById("gender_row" + no).innerHTML = gender_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    $('#updateModal').modal('hide');
}
   
function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}
   
   

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data_table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
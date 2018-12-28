function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["stuID"] = document.getElementById("stuID").value;
    formData["stuName"] = document.getElementById("stuName").value;
    formData["stuEmail"] = document.getElementById("stuEmail").value;
    formData["stuClass"] = document.getElementById("stuClass").value;
    formData["enrollYear"] = document.getElementById("enrollYear").value;
    formData["stuCity"] = document.getElementById("stuCity").value;
    formData["stuCountry"] = document.getElementById("stuCountry").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("sudentList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.stuID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stuName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stuEmail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stuClass;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.enrollYear;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.stuCity;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.stuCountry;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a class="btn btn-success text-white" onClick="onEdit(this)">Edit</a>
                        <a class="btn btn-danger ml-3 text-white" onClick="onDelete(this)">Delete</a>`;

}

function resetForm(){
    document.getElementById("stuID").value = "";
    document.getElementById("stuName").value = "";
    document.getElementById("stuEmail").value = "";
    document.getElementById("stuClass").value = "";
    document.getElementById("enrollYear").value = "";
    document.getElementById("stuCity").value = "";
    document.getElementById("stuCountry").value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("stuID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("stuName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stuEmail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stuClass").value = selectedRow.cells[3].innerHTML;
    document.getElementById("enrollYear").value = selectedRow.cells[4].innerHTML;
    document.getElementById("stuCity").value = selectedRow.cells[5].innerHTML;
    document.getElementById("stuCountry").value = selectedRow.cells[6].innerHTML;
}

function onDelete(td){
    if(confirm('Are you sure to delete this record ?')){
        row =  td.parentElement.parentElement; 
        document.getElementById("sudentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
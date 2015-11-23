$(document).ready(function() {
  //Add the importance level to the first column of the to do table
  $("#submit-button").on("click", function addTask() {
    var taskToDo = $("#comment").val();
    var newRow = $("<tr>");
    var newTd = $("<td>");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("X");
    var recordGlyph = $("<span>").addClass("glyphicon glyphicon-record");

    //Append the importance ranking to the table
    if($('#vimp').is(':checked')) {
      $(recordGlyph).css("color", "#d9534f");
      newRow.append('<td>').find('td').last().append(recordGlyph);
      } else if($('#simp').is(':checked')) {
      $(recordGlyph).css("color", "#f0ad4e");
      newRow.append('<td>').find('td').last().append(recordGlyph);
      } else if($('#canwait').is(':checked')) {
      $(recordGlyph).css("color", "#5bc0de");
      newRow.append('<td>').find('td').last().append(recordGlyph);
      };
  
    //Append the task to the table
    $("#to-do-list").append(newRow);
      newRow.append('<td>'+taskToDo+'</td>');


    //Append deletebtn to table and make it delete
    newRow.append('<td>').find('td').last().append(deleteBtn);
    $("#to-do-list").on("click",".btn-danger", function() {
      $(this).parents("tr").remove();
    });


  });

});
$(document).ready(function() {
  //Add the importance level to the first column of the to do table
  $("#submit-button").on("click", function addTask() {
    var taskToDo = $("#comment").val();
    var newRow = $("<tr>");
    var newTd = $("<td>");
    var checkBox = $("<div>").addClass("checkbox");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("X");
    var recordGlyph = $("<span>").addClass("glyphicon glyphicon-record");
    var thumbsUp = $("<span>").addClass("glyphicon glyphicon-thumbs-up").attr("type","button");
    var buttonComplete = $("<button>").addClass("btn btn-success").append(thumbsUp).css("font-size","0.78em");
    var thumbsDown = $("<span>").addClass("glyphicon glyphicon-thumbs-down");

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
      } else if(!$("#importance-rank").is(':checked')){
        alert("Please indicate how important this task is!");
        newRow.append('<td>').find('td').last().append(thumbsDown);
      };
  
    //Append the task to the table
    $("#to-do-list").append(newRow);
      newRow.append('<td>'+taskToDo+'</td>');

    //Append a completed to the to do list
    $("#to-do-list").append(newRow);
      newRow.append('<td>').find('td').last().append(buttonComplete);
      $(buttonComplete).on("click", function(){
        alert("The complete button was clicked.");
        $(this).prev("td").css("text-decoration", "line-through");
      })

    //Append deletebtn to table and make it delete
    newRow.append('<td>').find('td').last().append(deleteBtn);
    $("#to-do-list").on("click",".btn-danger", function() {
      $(this).parents("tr").remove();
    });

    //Make a message appear upon clicking the submit button
    $("#successful-submit").click(function (e) {
      $(submitMessage).show();
      e.preventDefault();
      });

    //Uncheck radio button
      $("input:radio").attr("checked", false);

  });

});
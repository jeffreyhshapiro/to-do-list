$(document).ready(function() {
  //Add the importance level to the first column of the to do table
  $("#submit-button").on("click", function addTask() {
    

  //Add a task to the second column of the to do table
  
    alert("why u almost working")
    var taskItem = $("<td>").append(taskToDo);
    var taskToDo = $("#comment").val();
    var newRow = $("<tr>");
    $("#to-do-list").append(newRow);
      newRow.append("<td>X</td>")
      newRow.append('<td>'+taskToDo+'</td>');
      console.log(taskItem);



  });

  
});
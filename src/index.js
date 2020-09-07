document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("submit").addEventListener('click',function(e){
    e.preventDefault();
    let task = document.createElement("li");
    task.innerHTML=document.getElementById("new-task-description").value;
    document.getElementById("tasks").appendChild(task);
  });
});

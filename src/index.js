document.addEventListener("DOMContentLoaded", () => {
  loadFormlistener()
});

function loadFormlistener(){
  const loadForm = document.getElementById('create-task-form')

  loadForm.addEventListener("submit", function(event){
    event.preventDefault()
   const task =  getInfo(event)
   const htmlPost = postHtml(task)
   attachPost(htmlPost)
  })

  function getInfo(event){
   return {
    input: event.target.querySelector("#new-task-description").value
   }
  
  }
  function postHtml(post){
    return `
  
       <li>${post.input}</li>
 
  `
  }
  const attachPost = function(post){
    document.getElementById('tasks').innerHTML += post
  } 

}

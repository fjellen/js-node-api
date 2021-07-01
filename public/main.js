const button = document.getElementById("button");
const inputField = document.getElementById("search-input");



button.addEventListener("click", async function(event){
  const value = inputField.value;

  const response = await fetch(`http://localhost:3000/?artist=${value}`);
  const data = await response.json();


  console.log(data);

});
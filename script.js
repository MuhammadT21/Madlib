document.getElementById("Madlib1").addEventListener("click", getOrder);

function getOrder() {
  // Input: Retrieve the user's data
  let puralnoun = document.getElementById("Pluralnoun").value;
  let adjective = document.getElementById("Adjective").value;
  let tense = document.getElementById("Tense").value;
  let noun = document.getElementById("Noun").value;

  // Processing: Make output statement
  let output = `"there are are too many ${puralnoun} on this ${adjective} airplane", I screamed.
  "somebody has to ${tense} on the ${noun} to solve this problem"`;

  // Output: Display output in the "Your Order" section of the website
  document.getElementById("result").innerHTML = output;
}

document.getElementById("Madlib2").addEventListener("click", getOrde0);

function getOrde0() {
  // Input: Retrieve the user's data
  let puralnoun = document.getElementById("Pluralnoun").value;
  let adjective = document.getElementById("Adjective").value;
  let tense = document.getElementById("Tense").value;
  let noun = document.getElementById("Noun").value;

  // Processing: Make output statement
  let output = `"one time I went to ${noun} house. they were very ${adjective}. because they ${tense} hit ${puralnoun}"`;

  // Output: Display output in the "Your Order" section of the website
  document.getElementById("result2").innerHTML = output;
}

let globalValue = 0;

function driving() {
  const drivingOption = document.querySelector('input[name="Driving"]:checked');

  if (drivingOption.value === "option1") {
    add(1);
  }
}

function smoke() {
  const smokeOption = document.querySelector('input[name="Smoking"]:checked');

  if (smokeOption.value === "option1") {
    add(1);
  }
}

function age() {
  const ageOption = document.querySelector('input[name="Age"]:checked');

  if (ageOption.value === "option1") {
    add(1);
  }
}


function military() {
  const militaryOption = document.querySelector('input[name="military"]:checked');

  if (militaryOption.value === "option1") {
    add(1);
  }
 

}

function overWeight() {
  const overWeightOption = document.querySelector('input[name="overweight"]:checked');

  if (overWeightOption.value === "option1") {
    add(1);
  }
 

}

function add(n) {
  globalValue += n;
  return globalValue;
}

function submit(event) {
    event.preventDefault(); // Prevent form submission
  
    driving();
    smoke();
    age();
    military();
    overWeight();
  
    const resultsDiv = document.getElementById("results");
  
    // Remove the existing result paragraph if it exists
    if (resultParagraph) {
      resultsDiv.removeChild(resultParagraph);
    }
  
    const levelInfo = `Your level is ${globalValue}`;
    resultParagraph = document.createElement("p");
    resultParagraph.textContent = levelInfo;
    resultsDiv.appendChild(resultParagraph);
  
    globalValue = 0; // Reset globalValue after displaying the result
  
    // Reset the form elements to their initial state
    const form = document.querySelector(".form");
    form.reset();
  }
  
  // Add initial result paragraph
  const resultsDiv = document.getElementById("results");
  resultParagraph = document.createElement("p");
  resultParagraph.textContent = "Please submit the form to calculate your level.";
  resultsDiv.appendChild(resultParagraph);
  
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", submit);
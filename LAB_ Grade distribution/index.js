function parseScores(scoresString) {
  // TODO: Compete the function
  let scoresArray = scoresString.split(" ");
  return scoresArray;
}

function buildDistributionArray(scoresArray) {
  // TODO: Compete the function
  let distributionArray = [0, 0, 0, 0, 0];
  for (let i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] >= 90) {
      distributionArray[0]++;
    } else if (scoresArray[i] >= 80) {
      distributionArray[1]++;
    } else if (scoresArray[i] >= 70) {
      distributionArray[2]++;
    } else if (scoresArray[i] >= 60) {
      distributionArray[3]++;
    } else {
      distributionArray[4]++;
    }
  }
  return distributionArray;
}

function setTableContent(userInput) {
  // TODO: Compete the function
  let scoresArray = parseScores(userInput);
  let distributionArray = buildDistributionArray(scoresArray);
  let firstRow = document.getElementById("firstRow");
  for (let i = 0; i < distributionArray.length; i++) {
    let barHeight = distributionArray[i] * 10;
    let bar = document.createElement("td");
    bar.innerHTML = `<div style="height:${barHeight}px" class="bar${i}"></div>`;
    firstRow.appendChild(bar);
  }
}

// Sample usage - do not modify
let scores = "45 78 98 83 86 99 90 59";

setTableContent(scores);

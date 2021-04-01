document.getElementById("contribute-btn").addEventListener("click", () => {
  var testCenterName = document.getElementById("centerName").value;
  var testCenterEmail = document.getElementById("centerEmail").value;
  var testCenterAddress = document.getElementById("centerAddress").value;
  var testCenterPhoneNumber = document.getElementById("centerPhone").value;
  var testCenterDescriptions = document.getElementById("centerDescription").value;
  console.log(testCenterDescriptions);
  console.log(testCenterName);
  const testCenter = {
    name: testCenterName,
    Email: testCenterEmail,
    Address: testCenterAddress,
    Phone: testCenterPhoneNumber,
    Description: testCenterDescriptions,
  };
  const json = JSON.stringify(testCenter);
  fetch('http://localhost:3000/testcenters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json
  })
    .then(response => console.log(response));
});

fetch('http://localhost:3000/testcenters')
  .then(response => response.json())
  .then(data => console.log(data));
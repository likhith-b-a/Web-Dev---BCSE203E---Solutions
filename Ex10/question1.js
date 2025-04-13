
 const patients = [
  { PId: 1, Name: "Alen", Age: 39 },
  { PId: 2, Name: "Deena", Age: 47 },
  { PId: 3, Name: "Diana", Age: 21 },
  { PId: 4, Name: "Jack", Age: 54 },
  { PId: 5, Name: "Jain", Age: 23 },
  { PId: 6, Name: "Kelvin", Age: 61 },
  { PId: 7, Name: "Louis", Age: 69 },
  { PId: 8, Name: "Rex", Age: 49 }
];

function sortPatientsByAgeDesc() {
  return patients.slice().sort((a, b) => b.Age - a.Age);
}

function displaySortedPatients() {
  const sortedPatients = sortPatientsByAgeDesc();
  const tableBody = document.querySelector("#patientTable tbody");
  tableBody.innerHTML = "";
  sortedPatients.forEach(patient => {
      const row = `<tr>
          <td>${patient.PId}</td>
          <td>${patient.Name}</td>
          <td>${patient.Age}</td>
      </tr>`;
      tableBody.innerHTML += row;
  });
}

function isPatientPresent(PId) {
  return patients.some(patient => patient.PId === PId);
}

function checkPatient() {
  const PId = parseInt(document.getElementById("searchId").value);
  const resultText = isPatientPresent(PId) ? `Patient with P-Id ${PId} is present.` : `Patient with P-Id ${PId} is NOT present.`;
  document.getElementById("checkResult").textContent = resultText;
}

function filterPatientsByAge(minAge, maxAge) {
  return patients.filter(patient => patient.Age >= minAge && patient.Age <= maxAge);
}

function filterPatients() {
  const minAge = parseInt(document.getElementById("minAge").value);
  const maxAge = parseInt(document.getElementById("maxAge").value);
  const filteredPatients = filterPatientsByAge(minAge, maxAge);
  const tableBody = document.querySelector("#filteredTable tbody");
  tableBody.innerHTML = "";
  filteredPatients.forEach(patient => {
      const row = `<tr>
          <td>${patient.PId}</td>
          <td>${patient.Name}</td>
          <td>${patient.Age}</td>
      </tr>`;
      tableBody.innerHTML += row;
  });
}
const seats = new Array(10).fill(0);

function reserveSeat(section) {
    const name = document.getElementById("name").value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    
    let seatAssigned = -1;
    
    if (section === 1) {
        seatAssigned = assignSeat(0, 4);
        if (seatAssigned === -1) {
            if (confirm("First-class is full. Would you like to be placed in economy?")) {
                seatAssigned = assignSeat(5, 9);
            }
        }
    } else {
        seatAssigned = assignSeat(5, 9);
        if (seatAssigned === -1) {
            if (confirm("Economy is full. Would you like to be placed in first-class?")) {
                seatAssigned = assignSeat(0, 4);
            }
        }
    }
    
    if (seatAssigned !== -1) {
        document.getElementById("boardingPass").innerHTML = 
            `Boarding Pass: Name: ${name}, Seat: ${seatAssigned + 1}, ` + 
            `${seatAssigned < 5 ? "First-Class" : "Economy"}`;
        
        const table = document.getElementById("passengerTable");
        const row = `<tr><td>${name}</td><td>${seatAssigned + 1}</td><td>${seatAssigned < 5 ? "First-Class" : "Economy"}</td></tr>`;
        table.innerHTML += row;
    } else {
        alert("Sorry, the flight is fully booked.");
    }
}

function assignSeat(start, end) {
    for (let i = start; i <= end; i++) {
        if (seats[i] === 0) {
            seats[i] = 1;
            return i;
        }
    }
    return -1;
}
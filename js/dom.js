let countSeat =0;

function toggleSelect(btnId) {
  const button = document.getElementById(btnId);

  // show alert maximum seat selected
  
  const selectedSeats = document.querySelectorAll(".selected");
  
  
  if (selectedSeats.length >= 4 && !button.classList.contains("selected")) {
    alert("You can only select a maximum of 4 seats.");
    return;
  }

  if (button.classList.contains("selected")) {
    button.classList.remove("selected");
    removeSeatDetails(btnId);
    updateSeatPrice(-550);
  } else {
    button.classList.add("selected");
    createSeatDetails(btnId);
    updateSeatPrice(550);
    const seatCountDisplay = document.getElementById('seat_count');
    
    // count seat 
    countSeat = countSeat + 1;
    seatCountDisplay.textContent = countSeat;

    // minus total seat to selected seat 
    const totalSeatId = document.getElementById('total_seat');
    let totalSeat = parseInt(totalSeatId.innerText);
    let minusSeat = totalSeat - 1 ;
    totalSeatId.textContent = minusSeat;
  }

  toggleProceedButton();
}

// when seat selected then enable buy btn
let phoneNumber = "";
document
  .getElementById("phone_number")
  .addEventListener("keyup", function (event) {
    phoneNumber = event.target.value;
    toggleProceedButton(); // Call this function to check the conditions whenever the phone number is updated
  });

function toggleProceedButton() {
  const selectedSeats = document.querySelectorAll(".selected");
  const proceedButton = document.getElementById("buy_ticket");
  proceedButton.disabled = !(
    selectedSeats.length > 0 && phoneNumber.length === 11
  );
}

// create seat details
function createSeatDetails(btnId) {
  const container = document.getElementById("newContentAdd");

  const seatInfo = btnId.split("-");
  const seatNumber = seatInfo[0];
  const seatType = "Economoy";
  const seatPrice = 550;

  const div = document.createElement("div");
  div.className = "flex justify-between";
  div.id = `seat-${btnId}`;

  const p1 = document.createElement("p");
  p1.className = "text-[16px] font-normal text-[#03071299]";
  p1.textContent = seatNumber;

  const p2 = document.createElement("p");
  p2.className = "text-[16px] font-normal text-[#03071299]";
  p2.textContent = seatType;

  const p3 = document.createElement("p");
  p3.className = "text-[16px] font-normal text-[#03071299]";
  p3.textContent = seatPrice;

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);

  container.appendChild(div);
}

//   seat add element remove function
function removeSeatDetails(btnId) {
  const container = document.getElementById("newContentAdd");
  const seatDetail = document.getElementById(`seat-${btnId}`);
  if (seatDetail) {
    container.removeChild(seatDetail);
  }
}

//   update price function
let totalSeatPrice = 0;
function updateSeatPrice(amount) {
  totalSeatPrice += amount;
  document.getElementById("total_price_Id").textContent = totalSeatPrice;
}

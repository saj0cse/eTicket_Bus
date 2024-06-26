let countSeat = 0;

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
    countSeatFunction(-1);
  } else {
    button.classList.add("selected");
    createSeatDetails(btnId);
    updateSeatPrice(550);
    countSeatFunction(1);
  }

  toggleProceedButton();
}

// when seat selected then enable buy btn
let phoneNumber = "";
document
  .getElementById("phone_number")
  .addEventListener("keyup", function (event) {
    phoneNumber = event.target.value;
    toggleProceedButton();
  });

function toggleProceedButton() {
  const selectedSeats = document.querySelectorAll(".selected");
  const proceedButton = document.getElementById("buy_ticket");
  const couponApplyBtn = document.getElementById("coupon_apply_btn");
  proceedButton.disabled = !(
    selectedSeats.length > 0 && phoneNumber.length === 11
  );
  couponApplyBtn.disabled = !(selectedSeats.length >= 4);
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
const grandTotalPrice = document.getElementById("grand_total_price_id");
function updateSeatPrice(amount) {
  console.log(amount);
  totalSeatPrice += amount;
  document.getElementById("total_price_Id").textContent = totalSeatPrice;
  grandTotalPrice.textContent = totalSeatPrice;
}

// count seat
function countSeatFunction(seat) {
  countSeat = countSeat + seat;
  const seatCountDisplay = document.getElementById("seat_count");
  seatCountDisplay.textContent = countSeat;

  // minusSeat
  const totalSeatId = document.getElementById("total_seat");
  let totalSeat = parseInt(totalSeatId.innerText);
  let minusSeat = totalSeat - seat;
  totalSeatId.textContent = minusSeat;
}

// buy btn function
function confirmFunction() {
  const buyTicket = document.getElementById("buy_ticket");
  const confirmTicket = document.getElementById("confirm_ticket");

  buyTicket.classList.add("hidden");
  confirmTicket.classList.remove("hidden");
}

// coupon_input_field
const couponApplyBtn = document.getElementById("coupon_apply_btn");

document
  .getElementById("coupon_input_field")
  .addEventListener("keyup", function (event) {
    const couponInputFiledValue = event.target.value;
    console.log(couponInputFiledValue);
    const couponApplyBtn = document.getElementById("coupon_apply_btn");
    couponApplyBtn.disabled = !(
      couponInputFiledValue === "NEW15" || couponInputFiledValue === "Couple 20"
    );
  });

    //  discount amount calculation
    function discountAmountCal() {
      const couponInputFiledValue = document.getElementById("coupon_input_field").value;
      const discountAmountUpdate = document.getElementById('discount_amount_id');
      const discountAmountDiv = document.getElementById('discount_amount_div');
      const couponCodeDiv = document.getElementById('coupon_code_div');
      if (couponInputFiledValue === "NEW15") {
            const discountAmount = (totalSeatPrice * 15 ) / 100 ;
            discountAmountDiv.classList.remove('hidden');
            couponCodeDiv.classList.add('hidden');
            discountAmountUpdate.textContent = discountAmount;
            grandTotalPrice.textContent = totalSeatPrice - discountAmount ;
      }
    }




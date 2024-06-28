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
    } else {
      button.classList.add("selected");
      createSeatDetails(btnId);
    }
  }
  
  function createSeatDetails(btnId) {
    const container = document.getElementById('newContentAdd');
  
    // Assuming `btnId` contains seat information like "C2-Economy-550"
    const seatInfo = btnId.split('-');
    const seatNumber = seatInfo[0];
    const seatType = 'Economy';
    const seatPrice = 500;
  
    const div = document.createElement('div');
    div.className = 'flex justify-between';
    div.id = `seat-${btnId}`; // Unique identifier for the seat detail
  
    const p1 = document.createElement('p');
    p1.className = 'text-[16px] font-normal text-[#03071299]';
    p1.textContent = seatNumber;
  
    const p2 = document.createElement('p');
    p2.className = 'text-[16px] font-normal text-[#03071299]';
    p2.textContent = seatType;
  
    const p3 = document.createElement('p');
    p3.className = 'text-[16px] font-normal text-[#03071299]';
    p3.textContent = seatPrice;
  
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
  
    container.appendChild(div);
  }
  
  function removeSeatDetails(btnId) {
    const container = document.getElementById('newContentAdd');
    const seatDetail = document.getElementById(`seat-${btnId}`);
    if (seatDetail) {
      container.removeChild(seatDetail);
    }
  }
  
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let tickePrice = +movieSelect.value;

// Update total and count
function updatePrint() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  count.textContent = selectedSeats.length;
  total.textContent = tickePrice * selectedSeats.length;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
  tickePrice = +e.target.value;
  updatePrint();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (
    !e.target.classList.contains('occupied') &&
    e.target.classList.contains('seat')
  ) {
    // if (e.target.classList.contains('selected')) {
    //   e.target.classList.remove('selected');
    // } else {
    //   e.target.classList.add('selected');
    // }
    e.target.classList.toggle('selected');

    updatePrint();
  }
});

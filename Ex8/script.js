function calculateTotal() {
  const adultPrice = 100;
  const childPrice = 50;

  let adultTickets = parseInt(document.getElementById('adultTickets').value) || 0;
  let childTickets = parseInt(document.getElementById('childTickets').value) || 0;

  let totalAmount = (adultTickets * adultPrice) + (childTickets * childPrice);

  document.getElementById('totalAmount').value = totalAmount;
}

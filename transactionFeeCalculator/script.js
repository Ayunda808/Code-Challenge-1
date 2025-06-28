function estimateTransactionFee() {
  const input = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = Number(input);

  if (isNaN(amountToSend) || amountToSend <= 0) {
    alert("Tafadhali andika kiasi sahihi.");
    return;
  }

  let fee = 0.015 * amountToSend;

  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  const total = amountToSend + fee;

  const result = `Sending KES ${amountToSend}:\n` +
                 `Transaction Fee: KES ${fee}\n` +
                 `Total Debited: KES ${total}\n` +
                 `Send Money Securely!`;

  document.getElementById("output").textContent = result;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const chargePerKm = 15;
  const totalFare = baseFare + (distanceInKm * chargePerKm);

  console.log(`\nUko kwote? Iyo ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("Panda Pikipiki!");
}

rl.question("Unafika wapi Mkubwa? Kilometer ngapi? ", function(input) {
  const distance = Number(input);

  if (!isNaN(distance) && distance > 0) {
    calculateBodaFare(distance);
  } else {
    console.log("Tafadhali andika nambari sahihi ya kilomita.");
  }

  rl.close();
});


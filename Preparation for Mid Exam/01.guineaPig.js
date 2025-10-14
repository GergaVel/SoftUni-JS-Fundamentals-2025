function guineaPig(arr) {
  let foodQtyGr = Number(arr.shift()) * 1000;
  let hayQtyGr = Number(arr.shift()) * 1000;
  let coverQtyGr = Number(arr.shift()) * 1000;
  let pigWeightGr = Number(arr.shift()) * 1000;

  for (let day = 1; day <= 30; day++) {
   
    foodQtyGr -= 300;

    if (day % 2 === 0) {
      hayQtyGr -= foodQtyGr * 0.05;
    }

    if (day % 3 === 0) {
      coverQtyGr -= pigWeightGr / 3;
    }

    if (foodQtyGr <= 0 || hayQtyGr <= 0 || coverQtyGr <= 0) {
      console.log(`Merry must go to the pet store!`);
      return;
    }
  }

  console.log(
    `Everything is fine! Puppy is happy! Food: ${(foodQtyGr / 1000).toFixed(2)}, Hay: ${(hayQtyGr / 1000).toFixed(2)}, Cover: ${(coverQtyGr / 1000).toFixed(2)}.`
  );
}

guineaPig(['10', '5', '5.2', '1']);

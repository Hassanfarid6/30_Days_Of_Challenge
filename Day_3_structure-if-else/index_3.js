// Activity #3: Switch case
// Task #4

let a = 10;
switch (a) {
  case 1:
    console.log("Monday");

    break;
  case 2:
    console.log("Tuesday");

    break;
  case 3:
    console.log("wednesDay");

    break;
  case 4:
    console.log("Thursday");

    break;
  case 5:
    console.log("FriDay");

    break;
  case 6:
    console.log("SaturDay");

    break;
  case 7:
    console.log("SunDay");

    break;
  default:
    console.log("Write number between 1 To 7");
}

// Task #5

let score = 99;

switch (true) {
  case score >= 85 && score <= 100:
    console.log(`Grade :"A" `);

    break;
  case score >= 70 && score < 85:
    console.log(`Grade :"B" `);

    break;
  case score >= 55 && score < 70:
    console.log(`Grade :"C" `);

    break;
  case score >= 40 && score < 55:
    console.log(`Grade :"D" `);

    break;
  case score >= 0 && score < 40:
    console.log(`Grade :"F" `);

    break;

  default:
    console.log(`Right a valid number Between 1 to 100.`);
}

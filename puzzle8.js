
function repeatDown(total) {
  var count =0;
  while (count < total) {
    down();
    count = count + 1;
  }
}

repeatDown(8);

right();
right();

function repeatUp(total) {
  var count =0;
  while (count < total) {
    up();
    count = count + 1;
  }
}
repeatUp(7);

right();
right();

function repeatDown7(total) {
  var count =0;
  while (count < total) {
    down();
    count = count + 1;
  }
}
repeatDown(7);

right();
right();

repeatUp(7);

right();
right();

repeatDown(7);

right();

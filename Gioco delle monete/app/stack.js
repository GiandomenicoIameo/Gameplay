function make() {

  stack = [ 1,
    2,
    5,
    10,
    20,
    50,
    1€
  ];

  return stack;
}

function member( stack ) {

  let string = stack.toString();
  console.log( "\n{" + string + " }" );
}

module.exports = { make, member };

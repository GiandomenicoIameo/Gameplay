function make() {

  stack = [
    " 1 cent",
    " 2 cent",
    " 5 cent",
   " 10 cent",
   " 20 cent",
   " 50 cent",
    " 1 euro"
  ];

  return stack;
}

function member( stack ) {

  let string = stack.toString();
  console.log( "\n{" + string + " }" );
}

module.exports = { make, member };

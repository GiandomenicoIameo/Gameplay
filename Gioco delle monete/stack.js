function make() {

  stack = [
    " Pitagora" ,
    " Euclide",
    " Eulero",
    " Gauss",
    " Riemann",
    " Fibonacci",
    " Newton"
  ];

  return stack;
}

function member( stack ) {

  let string = stack.toString();
  console.log( "\n{" + string + " }" );
}

module.exports = { make, member };

function make() {

  stack = [
    " 1"  + '\u00A2',
    " 2"  + '\u00A2',
    " 5"  + '\u00A2',
    " 10" + '\u00A2',
    " 20" + '\u00A2',
    " 50" + '\u00A2',
    " 1€"
  ];

  return stack;
}

function member( stack ) {

  let string = stack.toString();
  console.log( "\nPortafogli = [" + string + " ]\n" );
}

module.exports = { make, member };

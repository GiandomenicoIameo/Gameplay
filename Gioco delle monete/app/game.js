const list    = require( "./stack.js" );
const time    = require( "sleep" );
const menu    = require( "./instructions.js" );
const scanner = require( "./scanner.js" );

function player( stack ) {

  menu.take();
  console.log( "[ OK ] Turno Player." );

  switch( scanner.input() ) {
    case 1 :
          stack.pop();
          list.member( stack );
          break;
    case 2 :
          stack.pop();
          stack.pop();
          list.member( stack );
          break;
    default:
          player( stack );
          break;
  }
}

function cpu( stack ) {

  console.log( "\n[ OK ] Turno CPU.. " );
  time.sleep( 2 );
  console.log( "[ *** ] Calcolo.." );
  time.sleep( 3 );

  switch( stack.length ) {
      case 2 :
      case 3 :
      case 5 :
            stack.pop();
            stack.pop();
            console.log( "[ OK ] La CPU cattura due monete." );
            break;
      case 1 :
      case 4 :
      case 6 :
      case 7 :
            stack.pop();
            console.log( "[ OK ] La CPU cattura una moneta." );
            break;
  }
  list.member( stack );
}

function play( stack ) {

  menu.match();

  switch( scanner.input() ) {
    case 1 :
          list.member( stack );
          rounds( stack, player, cpu );
          break;
    case 2 :
          list.member( stack );
          rounds( stack, cpu, player );
          break;
    case 3 :
          break;
    default:
          play( stack );
          break;
  }
}

function rounds( stack, first, second ) {

  while( stack.length != 0 ) {
          first( stack );
          if( stack.length == 0 ) break;
          second( stack );
  }
}

function start() {

  menu.init();

  switch( scanner.input() ) {
    case 1 :
          play( list.make() );
          break;
    case 2 :
          break;
    default:
          start();
          break;
  }
}

module.exports = { start };

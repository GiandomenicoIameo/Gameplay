const list    = require( "./stack.js" );
const time    = require( 'sleep' );
const menu    = require( "./instructions.js" );
const scanner = require( "./scanner.js" );

function player( stack ) {

  menu.take();
  console.log( "[ OK ] Turno Player." );
  let money = scanner.input();

  switch( money ) {
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

  console.log( "[ OK ] Turno CPU. " );
  console.log( "[ *** ] Calcolo.." );
  time.sleep( 3 );

  let element;

  switch( stack.length ) {
      case 2 :
      case 3 :
      case 5 :
            stack.pop();
            stack.pop();
            element = 2;
            break;
      case 1 :
      case 4 :
      case 6 :
      case 7 :
            stack.pop();
            element = 1;
            break;
  }
  console.log( "[ OK ] La CPU ne cattura " + element );
  list.member( stack );
}

function play( stack ) {

  menu.match();
  let choice = scanner.input();

  switch( choice ) {
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

function start( choice ) {

  switch( choice ) {
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

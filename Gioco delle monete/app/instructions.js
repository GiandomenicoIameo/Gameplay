const time    = require( "sleep" );

function init() {
  console.clear();
  console.log( "1) Gioca." );
  console.log( "2) Esci.\n" );
}

function take() {
  console.log( "\n1) Prendi una moneta." );
  console.log( "2) Prendi due monete.\n" );
}

function match() {
  console.clear();
  console.log( "\n1) Il giocatore gioca per primo." );
  console.log( "2) La CPU gioca per primo." );
  console.log( "3) Esci.\n" );
}

function cpu_message() {

  console.log( "\n[ OK ] Turno CPU.. " );
  time.sleep( 2 );
  console.log( "[ *** ] Calcolo.." );
  time.sleep( 3 );
}

module.exports = { init, take, match, cpu_message };

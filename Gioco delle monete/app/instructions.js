const time = require( "sleep" );

function init() {

  console.clear();
  console.log( "1) Gioca." );
  console.log( "2) Esci.\n" );
}

function choice_coins() {

  console.log( "\n1) Prendi una moneta." );
  console.log( "2) Prendi due monete.\n" );
}

function turns() {

  console.clear();
  console.log( "\n1) Il giocatore gioca per primo." );
  console.log( "2) La CPU gioca per primo." );
  console.log( "3) Esci.\n" );
}

function cpu_message( money ) {

  console.log( "\n[ OK ] Turno CPU.. " );
  time.sleep( 2 );
  console.log( "[ *** ] Calcolo.." );
  time.sleep( 3 );
  console.log( "[ OK ] La CPU cattura " + money );
  time.sleep( 2 );
}

module.exports = { init, choice_coins, turns, cpu_message };

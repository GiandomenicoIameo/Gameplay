function init() {
  console.log( "1) Gioca." );
  console.log( "2) Esci.\n" );
}

function take() {
  console.log( "\n1) Scegli 2 elementi." );
  console.log( "2) Scegli 1 elemento.\n" );
}

function match() {
  console.clear();
  console.log( "\n1) Inizia la mano il giocatore." );
  console.log( "2) Inizia la mano la CPU." );
  console.log( "3) Esci.\n" );
}

module.exports = { init, take, match };
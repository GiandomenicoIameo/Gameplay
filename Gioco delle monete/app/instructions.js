function init() {
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

module.exports = { init, take, match };

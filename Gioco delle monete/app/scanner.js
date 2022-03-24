const prompt = require( 'prompt-sync' )();

function input( message ) {

  const scanner = prompt( message + "?- " );
  const value = Number( scanner );

  return value;
}

module.exports = { input };

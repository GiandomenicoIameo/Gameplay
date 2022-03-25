const prompt = require( 'prompt-sync' )();

function input() {

  const scanner = prompt( "?- " );
  const value = Number( scanner );

  return value;
}

module.exports = { input };

const menu     = require( "./instructions.js" );
const scanner  = require( "./scanner.js" );
const gameplay = require( "./game.js" );

menu.init();
game.start( scanner.input( "" ) );

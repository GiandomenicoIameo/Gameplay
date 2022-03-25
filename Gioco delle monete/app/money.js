const menu     = require( "./instructions.js" );
const scanner  = require( "./scanner.js" );
const gameplay = require( "./game.js" );

menu.init();
gameplay.start( scanner.input() );

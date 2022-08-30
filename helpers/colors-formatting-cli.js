const colors = require('colors');
const clc = require("cli-color");

// colors formatting CLI
const warn      = (msg) => clc.bgYellowBright.black(msg);
const success   = (msg) => clc.bgGreenBright.black(msg);
const lite      = (msg) => clc.whiteBright(msg);
const bold      = (msg) => clc.whiteBright.bold(msg);
const underline = (msg) => clc.whiteBright.underline(msg);
const blink     = (msg) => clc.whiteBright.blink(msg);
const italic    = (msg) => clc.whiteBright.italic(msg);
const error     = (msg) =>  clc.red.bold(msg); 
const notice    = (msg) => clc.bgBlueBright.white(msg);
const danger    = (msg) => clc.bgRedBright.white(msg);
const terminal  = (msg) => clc.greenBright(msg);


const formatCLI = (context = 'primary', msg = '' ) => {
  /*
  */

 switch (context) {
    case 'primary': // blue
      return console.log(colors.bgBlue(' '.padStart(1,' ')+msg+' '.padEnd(2,' ') ) );

    break;
    case 'secondary': // cyan
      return console.log(colors.bgCyan(' '.padStart(1,' ')+msg+' '.padEnd(2,' ') ) );
    break;

    case 'success': //  green
      return console.log(colors.bgGreen(' '.padStart(1,' ')+msg+' '.padEnd(2,' ') ) );

    break;

    case 'warning': // yellow
      return console.log(colors.bgYellow(' '.padStart(1,' ')+msg+' '.padEnd(2,' ') ) );

    break;

    case 'danger': //  red
    return console.log(colors.bgRed(' '.padStart(1,' ')+msg+' '.padEnd(1,' ') ) );

  break;

  case 'info': // light blue
    return (colors.bgWhite(' '.padStart(1,' ')+msg.padEnd(3,'.') ) )
  break;

  case 'alert': // gray 
  return console.log(colors.bgMagenta(' '.padStart(1,' ')+msg+' '.padEnd(2,' ') ) );

break;
case 'light': // gray 
return (colors.green(' '.padStart(1,' ')+msg+' '.padEnd(1,' ') ) );

break;

    default:
      return console.log(colors.bgMagenta(' Debe especificar el contexto de la alerta '))
    break;

 }

}

module.exports = { formatCLI, 
            warn,
            success,
            lite,
            bold,
            italic,
            underline,
            blink,
            error,
            danger,
            notice,
            terminal
      }
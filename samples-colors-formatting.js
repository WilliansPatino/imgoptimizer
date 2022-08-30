

const { formatCLI,  
  error, 
  warn, 
  notice, 
  bold, 
  lite, 
  italic, 
  blink, 
  underline, 
  danger,
  success,
  terminal} = require('./helpers/colors-formatting-cli');

console.clear()
  console.log(warn(' warn '))
  console.log(success(' success'))
  console.log(lite(' lite '))
  console.log(bold(' bold '))
  console.log(underline(' underline '))
  console.log(italic(' italic '))
  console.log(blink(' blink '))
  console.log(error(' error '))
  console.log(notice(' notice '));
  console.log(danger(' danger '))
  console.log(terminal(' term '))
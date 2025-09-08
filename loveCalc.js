//Buid a Love Calculator

prompt("Your name...");
prompt("Your crush name...");

var calc = Math.random() * 100;
calc = Math.floor(calc) + 1; //1 - 100

if (calc > 90) {
  alert(`Your love score is ${calc}%, your love each other like a true soulmate.`); 
} else { 
  alert(`Your love score is ${calc}%, maybe you should know each other more.`);
}

console.log(calc);

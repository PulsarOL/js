/*function Task1() {
    function Compare(a, b) {
     if (a < b) {
    return -1;
    } 
    else if (a > b) {
    return 1;
    } 
    else if (a == b) {
    return 0;
    } 
    }
      alert();
    let x = +prompt("Enter the first number to compare");
    let y = +prompt("Enter a second number to compare");
    alert(Compare(x, y));
    }
Task1();
8?

/*function Task2() {
    function Factorial(n) {
    if (n == 1) return 1;
    return n * Factorial(n - 1);
    }
    alert();
        let x = 1;
    do {    
    x = Math.trunc(
    +prompt("Enter a positive number like 1: ")
    );
    } 
    while (x < 1);
    alert(Factorial(x));
    }
Task2();
*/
/*function Task3() {
    function Unification (a, b, c) {
    return a * 100 + b * 10 + c;
        }
    alert();
    let x = 0;
    let y = 0;
    let z = 0;
    do {
    x = Math.trunc(Math.abs(+prompt("Enter the first number: ")));
    y = Math.trunc(Math.abs(+prompt("Enter the second number: ")));
    z = Math.trunc(Math.abs(+prompt("Enter the third number: ")));
    } 
    while (x > 9 || y > 9 || z > 9);
    alert(Unification (x, y, z));
    }
Task3();
*/
/*function Task4() {
    function AreaSquare(a, b) {
    if (arguments.length == 1) {
    return a * a;
    }
    return a * b;
    }
    alert();
    alert(AreaSquare(3, 4));
    alert(AreaSquare(3));
    }
Task4();
*/
/*function Task5() {
    function PerfectNumber(a) {
    let summ = 0;
    for (let i = 1; i < a; i++) {
    if (a % i == 0) {
    summ += i;
    }
    }
    if (summ == a) {
    return "This is a perfect number!";
    }
    return "This is not a perfect number. ";
    }
    alert();
    let x = Math.trunc(+prompt("Enter a number:"));
    alert(PerfectNumber(x));
    }
Task5();
*/
/*function Task7() {
    function Time(a, b = 0, c = 0) {
    {
    if (a < 10) {
    a = "0" + a;
    }
    if (b < 10) {
    b = "0" + b;
    }
    if (c < 10) {
    c = "0" + c;
    }
    return `${a}:${b}:${c}`;
    }
    alert();
    let x = 0;
    let y = 0;
    let z = 0;
    do {
    x = Math.abs(Math.trunc(+prompt("Enter the hours from 0 to 23: ")));
    y = Math.abs(Math.trunc(+prompt("Enter minutes from 0 to 59: ")));
    z = Math.abs(Math.trunc(+prompt("Enter seconds from 0 to 59: ")));
    } 
    while (x > 23 || y > 59 || z > 59);
    alert("Current time: " + Time(x, y, z));
    }
}
Task7();
*/
/*function Task8() {
    function TimeToSeconds(a, b = 0, c = 0) {
    let TimeToSeconds = a * 3600 + b * 60 + c;
    return TimeToSeconds;
    }
    alert();
    let x = 0;
    let y = 0;
    let z = 0;
    do {
    x = Math.abs(Math.trunc(+prompt("Enter the hours from 0 to 23: ")));
    y = Math.abs(Math.trunc(+prompt("Enter minutes from 0 to 59: ")));
    z = Math.abs(Math.trunc(+prompt("Enter seconds from 0 to 59: ")));
    } 
    while (x > 23 || y > 59 || z > 59);
    alert("Time in seconds " + TimeToSeconds(x, y, z) + " секунд." );
    }
Task8();
*/
/*function Task9() {
    function SecondsToTime(a) {
    let hours = Math.trunc(a / 3600);
    let minutes = Math.trunc((a - hours * 3600) / 60);
    let seconds = Math.trunc(a - hours * 3600 - minutes * 60);
    if (hours < 10) {
    hours = "0" + hours;
    }
    if (minutes < 10)
    {
    minutes = "0" + minutes;
    }
    if (seconds < 10) {
    seconds = "0" + seconds;
    }
    let current_time = `${hours}:${minutes}:${seconds}`;
    return current_time;
    }
    alert();
    let input_seconds = 0;
    do {
    input_seconds = Math.abs(Math.trunc(+prompt("Enter seconds: ")));
    } 
    while (input_seconds != +input_seconds);
    alert(SecondsToTime(input_seconds));
    }
    Task9();
   */

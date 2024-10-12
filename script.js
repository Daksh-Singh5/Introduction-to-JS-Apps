var calculator= prompt ("Hello user I am a calculator in a prompt. \n enter any one. \n 1. addition \n 2. subtraction \n 3. multiply \n 4. divide \n 5. average (3 numbers) \n 6. power \n 7. square root" )


if (calculator == "1"){
    var firstNo=prompt("type the first number");
    var secondNo=prompt("type the second number");
    var answer=Number(firstNo)+Number(secondNo);
    alert("your answer is "+answer)
 }

 else if (calculator == "2"){
    var firstNo=prompt("type the first number");
    var secondNo=prompt("type the second number");
    var answer=Number(firstNo)-Number(secondNo);
    alert("your answer is "+ answer)
 }

 else if (calculator == "3"){
    var firstNo=prompt("type the first number");
    var secondNo=prompt("type the second number");
    var answer=Number(firstNo)*Number(secondNo);
    alert("your answer is "+answer)
 }

 else if (calculator == "4"){
    var firstNo=prompt("type the first number");
    var secondNo=prompt("type the second number");
    var answer=Number(firstNo)/Number(secondNo);
    alert("your answer is "+answer)
 }
 else if (calculator == "5"){
    var firstNo=prompt("type the first number");
    var secondNo=prompt("type the second number");
    var thirdNo=prompt("type the third number");
    var answer=(Number(firstNo)+Number(secondNo)+Number(thirdNo))/3;
    alert("your answer is "+answer)
 }

 else if (calculator == "6"){
    var firstNo=prompt("type the base");
    var secondNo=prompt("type power of the base");
    var answer=Math.pow(Number(firstNo),Number(secondNo));
    alert("your answer is "+answer)
 }

 else if (calculator == "7"){
    var firstNo=prompt("type the first number");
    var answer=Math.sqrt(Number(firstNo));
    alert("your answer is "+answer)
 }
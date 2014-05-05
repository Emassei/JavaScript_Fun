

var answer = prompt("What is your favorite number?")

for(i=0;i<answer;i++){
  document.write("<br>")
  if(answer%3==0 && answer%5==0){
    document.write("FizzBuzz");
  }
  else if(answer%5==0){
    document.write("Buzz");
  }
  else if(answer%3==0){
    document.write("Fizz")
  }
  else{
    document.write(i);
  }

}
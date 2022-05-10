   /* function timesFive(num){

        return num*5;
    }

    const answer = timesFive(5);

    console.log(answer)*/

    let myGlobal = 10;

    function fun1() {
      // Assign 5 to oopsGlobal Here
      oopsGlobal = 5; 
    
    }
    
    // Only change code above this line
    
    function fun2() {
      var output = "";
      if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
      }
      console.log(output)
    }
    
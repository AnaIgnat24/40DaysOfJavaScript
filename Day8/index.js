//Task - Draw the Execution Context Diagram of the follwoing code and share as explained below:

/*const message = "I can do it";

function sum(a, b) {
    const result = a + b;
    return result;
}

function mul(a, b) {
    const result = a * b;
    return result;
}

function calc(a, b) {
    return (sum(a, b) + mul(a,b))/2;
}

function getResult(a, b) {
    return calc(a, b);
}

getResult(8, 5);



GEC:
 CP: 
   const: undefined;
   sum(a,b): allocated memory;
   mul(a,b): allocated memory;
   calc(a,b): allocated memory;
   getResult(a,b): allocated memory;
   
 EP:
   const: "I can do it";
   getResult(8,5): execute;
     FEC(getResult(8,5)):
      CP:
      EP:
       calc(8,5): execute;
        FEC(calc(8,5)):
         CP:
         EP:
          sum(8,5): execute;
            FEC(sum(8,5)):
             CP:
               result: undefined;
             EP: 
               result: 13;
               return result;
          mul(8,5): execute;
            FEC(mul(8,5)):
             CP:
               result: undefined;
             EP:
               result: 40;
               return result;
           return: 26,5;*/
   


         

   

   
          
function speedDetector(demerit) {
    // variable that will prompt input of the vehicles speed

    const speed= prompt("input average speed")

    //condition that determines if a motorist is speeding

    if (speed<70){
        console.log ("Ok")

      } else if(speed>70){

        console.log ((speed-70)/5)=demerit

    //condition that suspends a drivers license depending on their demerits
    
      }
   if (demerit>12) {
        console.log ("license suspended")
    }
}
speedDetector()

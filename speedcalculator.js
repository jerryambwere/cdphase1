function speedCalc  (speed){
  
  if (typeof speed !== 'number' || isNaN(speed) || speed < 0) {
		console.log('Invalid speed');
		return;
	}
  console.log(speed) 
  if (speed<=70) {
    return "Ok"
  } else {
  let point=((speed-70)/5)
  console.log(point)
  if (point>=12) {
    return 'license suspended'
    
  }
}

}

console.log(speedCalc('fast'))
 
// Navigator 00.00.01
let positionLatitude  = 20	 //Широта текущего положения 
let positionLongitude 	= 10 //Долгота текущего положения 
let addressLatitude = 40	 //Широта пункта назначения 
let addressLongitude = 20	 //Долгота пункта назначения 

console.log(Math.sqrt(((addressLatitude - positionLatitude)**2) + (addressLongitude - positionLongitude)**2));

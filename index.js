let convertBtn = document.getElementById("convert-btn")
 let inputEl = document.getElementById("input")
 let lengthEl = document.getElementById("length-el")
 let volumeEl = document.getElementById("volume-el")
 let massEl = document.getElementById("mass-el")
 
 const meterToFeet =  3.281
 const literToGallon =  0.264
 const kiloToPound =  2.204
 
 convertBtn.addEventListener("click", function() {
    let theValue = inputEl.value
    lengthEl.textContent = `${theValue} meters = ${theValue * meterToFeet} feet | ${theValue} feet = ${Number(theValue / meterToFeet).toFixed(3) 
 } meters`
    
  volumeEl.textContent = `${theValue} liters = ${Number(theValue * literToGallon).toFixed(3)} gallons | ${theValue} gallons = ${Number(theValue / literToGallon).toFixed(3) 
 } liters`
  
    massEl.textContent = `${theValue} kilos = ${Number(theValue * kiloToPound).toFixed(3)} pounds | ${theValue} pounds = ${Number(theValue / kiloToPound).toFixed(3) 
 } kilos`
    
 })

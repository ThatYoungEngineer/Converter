const convertBtn = document.getElementById("btn-convert")
const getInp = document.getElementById("get-inp")
const length = document.getElementById("len-result")
const volume = document.getElementById("vol-result")
const mass = document.getElementById("mass-result")


convertBtn.addEventListener("click", function() {
    
    let feetCount = getInp.value * 3.28084
    const feet = feetCount.toFixed(3)

    let metersCount = getInp.value * 0.3048
    const meters = metersCount.toFixed(3)

    const lengthResult = `${getInp.value} meters = ${feet} feet | ${getInp.value} feet = ${meters} meters`
    length.innerHTML = lengthResult

    let litersCount = getInp.value * 3.785412
    const liters = litersCount.toFixed(3)

    let gallonsCount = getInp.value * 0.264172 
    const gallons = gallonsCount.toFixed(3)

    const volumeResult = `${getInp.value} liters = ${gallons} gallons | ${getInp.value} gallons = ${liters} liters`
    volume.innerHTML = volumeResult

    let kilosCount = getInp.value * 0.45359237
    const kilos = kilosCount.toFixed(3)

    let poundsCount = getInp.value * 2.2  
    const pounds = poundsCount.toFixed(3)

    const massResult = `${getInp.value} kilos = ${pounds} pounds | ${getInp.value} pounds = ${kilos} kilos`
    mass.innerHTML = massResult
})
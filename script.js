"use strict"

var salys = [
    { salis: "Lietuva", gyventojuSkaicius: 2795680, valstybesPlotas: 65300 },
    { salis: "Lenkija", gyventojuSkaicius: 38179800, valstybesPlotas: 312696 },
    { salis: "Latvija", gyventojuSkaicius: 1907675, valstybesPlotas: 64589 },
    { salis: "Estija", gyventojuSkaicius: 1328439, valstybesPlotas: 45338 },
    { salis: "Voketija", gyventojuSkaicius: 83190556, valstybesPlotas: 357022 }

]

function avrageSpace(salis, gyventojuSkaicius, valstybesPlotas) {
    var average = valstybesPlotas / gyventojuSkaicius
    console.log(`salis: ${salis}, Gyventoju Skaicius:${gyventojuSkaicius}, Valstybes plotas:${valstybesPlotas}`)
    console.log(`plotas tenkantis vienam guventojui  ${average.toFixed(2)}m2`)
    console.log("========")
}
for (var x of salys) {
    avrageSpace(x.salis, x.gyventojuSkaicius, x.valstybesPlotas)
}
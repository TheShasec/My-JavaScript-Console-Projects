debugger;
let boy = Number(prompt("boyunuzu girin "));
let kilo = Number(prompt("kilonuzu girin "));
let bedenKitleEndeksi = kilo/boy**2;
if(bedenKitleEndeksi<18.5){
    alert("ideal kilonun alltinda siniz "+ bedenKitleEndeksi);

}
else if(bedenKitleEndeksi>=18.5 && bedenKitleEndeksi <= 24.9){
    alert("ideal kilodasiniz " + bedenKitleEndeksi);
}
else if(bedenKitleEndeksi>=25 && bedenKitleEndeksi <= 29.9){
    alert("ideal kilonun ustundesiniz " + bedenKitleEndeksi);
}
else if(bedenKitleEndeksi>=30 && bedenKitleEndeksi <= 39.9){
    alert("obezsiniz " + bedenKitleEndeksi);
}
else{17
    alert("morbid obez " + bedenKitleEndeksi );
}


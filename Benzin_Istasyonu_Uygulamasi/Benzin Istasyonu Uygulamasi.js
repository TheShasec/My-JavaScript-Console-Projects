const newLine = "\r\n";
alert("Benzin Fiyatlari :" + newLine + "Dizel: 24.53" + newLine + "Benzin: 22.25" + newLine + "LPG: 11.1");
let Dizel = 21.32;
let Benzin = 22.25;
let LPG = 11.1;
let yakitTuru = prompt("yakıt türünüzü seçiniz");
/*yakit turnun dogru olup olmadigi kontrol ediliyor*/
if (yakitTuru !== "Benzin" && yakitTuru !== "Dizel" && yakitTuru !== "LPG") {
    /*Yakit turu Bos olarsa calisicak */
    if (yakitTuru == "") {
        alert("lutfen benzin ismi girin");
    }/*yakit turu ismi yanlis girilerse calisicak */ else {
        alert("Lütfen yakıt isimlerini ilk paragraftaki gibi yazınız");
    }
}
/*Isimler Dogru oldugu zaman calisicak*/
else {
    /*odenilecek para nin null olma sebebi yakit turune gore fiyata degisiklik yaparken fazla kod kullanmamak*/
    let yakitLitre = Number(prompt("kac litre yakit"));
    let odenilecekPara =null ;
    /*yakit turune gore fiyat belirlenicek */
    if (yakitTuru == "Benzin") {
        odenilecekPara = yakitLitre * 22.25;
    }
    if(yakitTuru == "Dizel"){
        odenilecekPara = yakitLitre*24.53;
    }
    if(yakitTuru == "LPG"){
        odenilecekPara = yakitLitre*11.1;
    }
    /*Odenilecek para gosterilecek */
    alert(odenilecekPara);
}

let sayi = String(prompt("lutfen sayinizi girin"));
function donustur() {

    let uzunluk = sayi.length;
    let toplam = 0;
    let i = 0;
    let a = uzunluk-1
    while(true){
        let rakam = sayi[i];
        toplam = toplam + parseInt(rakam)*2**a
        i++;
        a--;
        if(i==uzunluk){
            break;
        }
    }
    alert(toplam);
}
donustur();


let sayi = prompt("sayi giriniz");
function cevirme(sayi) {
   debugger;
    let yenisayi = "";
    while (true) {
        yenisayi += sayi % 2
        if (sayi == 0 || sayi == 1) {
            break;
        }
        sayi = parseInt(sayi / 2);
    }
    function terscevirme() {
        let uzunluk = yenisayi.length;
        let sonrakam = ""
        while (true) {
            sonrakam += yenisayi[uzunluk - 1]
            if (uzunluk == 1) {
                break
            }
            uzunluk--;
        }
        alert(sonrakam)
    }
    terscevirme();
}
cevirme(sayi);

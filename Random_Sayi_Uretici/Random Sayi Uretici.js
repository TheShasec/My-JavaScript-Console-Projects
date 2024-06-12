//1 ile n arasinda m tane random sayi ureticek
//! n - Üretilecek sayıların üst sınırını belirten sayıdır. Yani, sayıların 1 ile n arasında olacağını ifade eder.
//! m - Üretilecek sayıların adedini belirten sayıdır. Yani, toplamda kaç adet sayı üretileceğini ifade eder.

function randomSayiUretici(n,m){
    let sayilar = 1;
while (true) {
    let i = Math.round(Math.random() * n);
    console.log(i)
    if (sayilar >= m) {
        break
    };
    sayilar++;
};
};
//kod bu sekilde calistirilacak
randomSayiUretici(10,1);
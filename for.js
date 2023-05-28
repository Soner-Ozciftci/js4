// * FOR LOOP ** //

console.log("****FOR*****");

// for(let i = 1 ; i <= 100; i++) {
//     console.log("FS14") // console.log((`${i}-FS14`) //

// }

// const n = prompt("Enter your number")
// let sum = 0 //* Global degisken
// for (let i = 1; i <= n; i++){   //* i lokal degiskendir //

// sum = sum + i //* kisa hali
// console.log(sum)
// }
// console.log(i) // lokal degıskenden dolayı hata verır //
// console.log(`SUM: ${sum}`)

//? 0-100 Arasinda n adet rasgele tamsayi sayi ureten kodu
//? for dongusu ile yaziniz..
// Math.random()  => -- 0-1 arasında rastgele bir sayı üretir.

const adet = prompt("kac adet sayi uretmek istersiniz:?");

for (let sayac = 1; sayac <= adet; sayac++) {
  const rasgeleSayi = Math.round(Math.random() * 100);
  //   rasgeleSayi++ //*!Uncaught TypeError: Assignment to constant variable.Hatası alirsin
  console.log(`${sayac}. sayiniz : ${rasgeleSayi}`);
}
//* NOT:
//* Math.floor() =>en yakin alt tamsayiya yuvarlar
//* Math.ceil() =>en yaki ust tamsayiya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir.
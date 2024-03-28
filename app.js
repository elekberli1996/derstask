
//1 Max Number

// let  numbers=[1,3,15,5,7,9,2,8,6,4,10]

// let max=0;

// for(let i=0;i<numbers.length;i++){
    
//     if(numbers[i]<numbers[i+1] && max<numbers[i+1]){
//         max=numbers[i+1];
//     }
// }
// console.log(max);

// **************************

// //2 ARRAYS SADE EDED

// let numbers =[1,2,3,5,6,7,9,2,8,6,4,13,41,44]
// let yoxla;
// let sadeedeler=[];

// for(let i=0;i<numbers.length;i++)
// {
//     yoxla=numbers[i];
//     if(yoxla===2){
//         sadeedeler.push(yoxla);
//     }
//     for(let j=2;j<yoxla;j++){
        
//        if(yoxla%j===0)
//         {
//             break;
//         }
//         else if(j===yoxla-1){
//             sadeedeler.push(yoxla);

//         }
//     }
// }
// console.log(sadeedeler);

// *******************************

// // 3 uzunlugu 7 olan sozler

// let data =["salam","dunyali","1234567","ali1234","javascript","programlasirma","Kod","frontend","backend"]

// data.map(a=>{
    
//     if(a.length===7){
//         console.log(a);
//     }
    
// });

// // ***************************************

// //4Beden Boy Kilo Indeksi

// let kilo=+prompt("kilonuzu girin")
// let boy=+prompt("boyunuzu girin");

// let indeks=kilo/(boy**2);

// if(indeks<18){
//    alert("Ideal cekiden asaqidir");
// }
// else if(indeks>=18 && indeks<25){
//     alert("Ideal ceki");
// }
// else if(indeks>=25 && indeks<30){
//     alert("Ideal cekiden yuxari");
// }
// else if(indeks>=30 && indeks<40){
//    alert("Artiq ceki(Obez)");
// }
// else{
//     alert("artiq ceki (morbid derecede piylenme)");
// }

// **************************

// 5 userin daxil etdiyi qiymet

// let qiymet=+prompt("qiymetinizi daxil edin (0-100);")
// if(qiymet>90 && qiymet<=100){
//     alert("Qiymetiniz : Ela");
// }
// else if(qiymet>75 && qiymet<=90){
//     alert("Qiymetiniz : Yaxsi");
// }
// else if(qiymet>55 && qiymet<=75){
//     alert("Qiymetiniz : Orta");
// }
// else if(qiymet>35 && qiymet<=55){
//     alert("Qiymetiniz : Pis");
// }
// else{
//     alert("Qiymetiniz : Kafi");
// }

// ********************************

//6 hipetenus



// let a=+prompt("birinci teref");
// let b=+prompt("ikinci teref");
// let hipetenushesabla = (x, y) => Math.sqrt((x**2)+(y**2));
// hipetenushesabla(a,b);
// console.log(hipetenushesabla(a,b));
// function hesabla(a,b){
//     return Math.sqrt((a**2)+(b**2))
// }




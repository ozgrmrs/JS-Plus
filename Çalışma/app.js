// for (let i = 0; i < 100; i++){
//     if (i % 5 == 0) {
//         continue;
//         }else {
//             console.log(i)
//         } 
// }



///////////  zar atma 3 kere art arda 3 gelirse veya 6 gelirse bitecek.//////
let randomNumber = 0;
let countFor3 = 0;
while (randomNumber !== 6){
    randomNumber = Math.trunc(Math.random()*6) + 1;
    console.log(' randomNumber :' , randomNumber);
    if (randomNumber == 3) countFor3++; 
    if (countFor3 == 3 ){ //count for 3//       
        console.log('3 comes third times, exiting.....');
        break;
    }    
}

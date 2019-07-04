// LOOPING

// 1. LOOPING MENGGUNAKAN WHILE
var count = 2;
while (count <= 20) {
    console.log(count + ' - I love Coding');
    count+=2;
}

var count2 = 20;
while (count2 >= 2) {
    console.log(count2 + ' - I will become fullstack developer');
    count2-=2
}

// 2. LOOPING MENGGUNAKAN FOR
for(var i = 1; i <= 20 ; i++){
    console.log(i + ' - I love coding')
}
for(var j = 20 ; j >= 1 ; j--){
    console.log(j + ' - I will become fullstack developer')
}

// 3. ANGKA GANJIL DAN GENAP
for(var k = 1 ; k <= 100 ; k++){
    if(k % 2 === 0){
        console.log('GENAP');
    } else {
        console.log('GANJIL');
    }
}

for(var l = 0 ; l <= 100 ; l+=2){
    if(l % 3 === 0){
        console.log(l + ' KELIPATAN 3');
    } else {}
}

for(var m = 0 ; m <= 100 ; m+=5){
    if(m % 6 === 0){
        console.log(m + ' KELIPATAN 6');
    } else {}
}

for(var n = 0 ; n <= 100 ; n+=10){
    if(n % 10 === 0){
        console.log(n + ' KELIPATAN 10');
    } else {}
}




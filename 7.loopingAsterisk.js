// 1. MENYUSUN BARISAN BINTANG

var rows1 = 5;
for (var i = 1 ; i <= rows1 ; i++){
   console.log(' * ');
}

// 2. MENYUSUNG BARISAN BINTANG NESTED LOOP

var rows2 = 5;
for (var i = 1 ; i <= rows2 ; i++){
    var bintang = '';
    for (var j = 1 ; j <= rows2 ; j++){
        bintang += ' * ';
    }
    console.log(bintang);
}

// 3. MENYUSUNG TANGGA BINTANG NESTED LOOP

var rows3 = 5;
for (var i = 1 ; i <= rows3; i++){
    var bintang = '';
    for (var j = 1 ; j <= i ; j++){
        bintang += ' * ';
    }
    console.log(bintang);
}
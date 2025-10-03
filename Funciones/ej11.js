
let title = document.getElementById("title");

let n = 20;

let p = n * 30 / 100;
for (let i=0; i<=n-1 + n/4; i++){
    for (let j=0; j<=(n*2)-1 - p; j++){
        let anxo = (n*2) - 1 - p;
        if (i == 0 && j % 2 == 0		 || i < n -p && (j == 0 || j == (n*2)-1-p) 		|| 		(j + p*5 == i*2 -2 || j - p*5  == anxo - i*2+2) || 			j > anxo - i*2 - j && j % 9 == 0 && i*2 > anxo - j	&& i * 2 < j + p*5	&& anxo - i * 2 > j - p*5		 ) { // contorno y columnas
            title.innerHTML += "+";
        } else if (j  == anxo - i*2	) { // diagonal
            title.innerHTML += "/";
            console.log("/");
        } else if (i == n/7 && j % 8 == 0 || i < n - p && j == n/4 && i % 4 == 0 || j + n/4 == anxo - i*2 && i % 4 == 0) { // estrellas (v/h)
            title.innerHTML += "☆";
        } else {
            title.innerHTML += "_";
        }
    }
    title.innerHTML += "</br>";
    //console.log("<br>");
}

title.innerHTML += "<br><br><br><br>";

for (let i=0; i<=n-1 + (n-2)/2; i++){
    for (let j=1; j<=(n*2)-1; j++){
        let anxo = (n*2) - 1;
        (j == n+i || j == n-i || i == n-1) || (j + (n-2)/2 == i  || j - (n-2)/2 == anxo - i || i == (n-2)/2) ? title.innerHTML += "*" : title.innerHTML += "_";
    }
    title.innerHTML += "<br>";
}

title.innerHTML += "<br><br><br><br>";
title.innerHTML += "<br><br><br><br>";

for (let i=0; i<=n-1; i++){
    for (let j=0; j<=(n*2)-1; j++){
        let anxo = (n*2) - 1;
        if (j == n+i/2 || j == n-(i/2) || i == (n/2)/2			 || 			j - (n/4) == n*2 - (i*2)+4 || j + (n/4) == i * 2 - 4	) { 
            title.innerHTML += "*";
        } else {
            title.innerHTML += "_";
        }
    }
    title.innerHTML += "<br>";
}

title.innerHTML += "<br><br><br><br>";
title.innerHTML += "<br><br><br><br>";

n = 21;

for (let i=0; i<=n-1; i++){
    for (let j=0; j<=n-1; j++){
        if (j == (n-1)/2 || i == (n-1)/2 || i==0 && j < (n+1)/2 || i==n-1 && j>((n-1)/2)-1 || j==0 && i>((n-1)/2)-1 || j==n-1 && i<(n+1)/2){
            title.innerHTML += "*";	
        } else {
            title.innerHTML += "_";
        }
    }
    title.innerHTML += "<br>";
}


